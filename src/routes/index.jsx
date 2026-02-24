import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext.jsx'
import { ProtectedRoute, AdminRoute, PublicRoute } from '../components/ProtectedRoute.jsx'
import MainLayout from '../layouts/MainLayout'
import NewNTrendingPage from '../pages/TrendingPage'
import LastReleasesPage from '../pages/LastReleasesPage'
import VideoGameDetailsPage from '../pages/VideoGameDetailsPage'
import SearchResultsPage from '../pages/SearchResultsPage'
import NextReleasesPage from '../pages/NextReleasesPage'
import GenreResultsPage from '../pages/GenreResultsPage'
import TopGamesPage from '../pages/TopGamesPage'
import LoginPage from '../pages/LoginPage.jsx'
import RegisterPage from '../pages/RegisterPage.jsx'
import AdminPage from '../pages/AdminPage.jsx'
import ProfilePage from '../pages/ProfilePage.jsx'
import '../App.css'

function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        {/* Redirigir a login si no está autenticado */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Todas las rutas de juegos - Protegidas (requieren login) */}
        <Route path="/tendencias" element={<ProtectedRoute><MainLayout><NewNTrendingPage /></MainLayout></ProtectedRoute>} />
        <Route path="/novedades" element={<ProtectedRoute><MainLayout><LastReleasesPage /></MainLayout></ProtectedRoute>} />
        <Route path="/juego/:id" element={<ProtectedRoute><MainLayout><VideoGameDetailsPage /></MainLayout></ProtectedRoute>} />
        <Route path="/buscar" element={<ProtectedRoute><MainLayout><SearchResultsPage /></MainLayout></ProtectedRoute>} />
        <Route path="/proximamente" element={<ProtectedRoute><MainLayout><NextReleasesPage /></MainLayout></ProtectedRoute>} />
        <Route path="/genero/:genero" element={<ProtectedRoute><MainLayout><GenreResultsPage /></MainLayout></ProtectedRoute>} />
        <Route path="/top" element={<ProtectedRoute><MainLayout><TopGamesPage /></MainLayout></ProtectedRoute>} />
        
        {/* Rutas de autenticación - Públicas */}
        <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path="/registro" element={<PublicRoute><RegisterPage /></PublicRoute>} />
        
        {/* Ruta de administración - Solo admin */}
        <Route path="/admin" element={<AdminRoute><AdminPage /></AdminRoute>} />
        
        {/* Ruta de perfil - Solo usuarios autenticados */}
        <Route path="/perfil" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      </Routes>
    </AuthProvider>
  )
}

export default AppRoutes