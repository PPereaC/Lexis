// Configuración de la API
export const API_BASE_URL = 'https://agon.ppereac.dev/api';

// Obtener token JWT del localStorage
export const getToken = () => localStorage.getItem('token');

// Guardar token JWT
export const setToken = (token) => localStorage.setItem('token', token);

// Eliminar token JWT
export const removeToken = () => localStorage.removeItem('token');

// Headers por defecto para requests autenticados
export const getAuthHeaders = () => {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
  };
};
