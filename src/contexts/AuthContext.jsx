import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AuthApiService from '../services/authApi.service.js';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar sesión almacenada al cargar
    const checkSession = async () => {
      const storedUser = AuthApiService.getStoredUser();
      
      if (storedUser && AuthApiService.isAuthenticated()) {
        // Verificar que el token sigue válido
        const result = await AuthApiService.getCurrentUser();
        if (result.success) {
          setUser(result.user);
          setRole(result.user.role);
        } else {
          // Token inválido, limpiar
          setUser(null);
          setRole(null);
        }
      } else {
        setUser(null);
        setRole(null);
      }
      setLoading(false);
    };

    checkSession();
  }, []);

  const login = async (email, password) => {
    const result = await AuthApiService.login(email, password);
    if (result.success) {
      setUser(result.user);
      setRole(result.user.role);
    }
    return result;
  };

  const register = async (email, password, displayName) => {
    const result = await AuthApiService.register(email, password, displayName);
    if (result.success) {
      setUser(result.user);
      setRole(result.user.role);
    }
    return result;
  };

  const logout = async () => {
    const result = await AuthApiService.logout();
    if (result.success) {
      setUser(null);
      setRole(null);
    }
    return result;
  };

  // Funciones para verificar roles
  const isAdmin = useCallback(() => role === 'admin', [role]);
  const isUser = useCallback(() => role === 'user', [role]);
  const isAuthenticated = useCallback(() => !!user, [user]);

  // Objeto con funciones y valores para el contexto
  const value = {
    user,
    role,
    loading,
    login,
    register,
    logout,
    isAdmin,
    isUser,
    isAuthenticated
  };

  // Devuelve el proveedor con el contexto
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
