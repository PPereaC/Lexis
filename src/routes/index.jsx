import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import NewNTrendingPage from '../pages/TrendingPage'
import LastReleasesPage from '../pages/LastReleasesPage'
import VideoGameDetailsPage from '../pages/VideoGameDetailsPage'
import SearchResultsPage from '../pages/SearchResultsPage'
import NextReleasesPage from '../pages/NextReleasesPage'

import '../App.css'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/tendencias" replace />} />
      <Route path="/tendencias" element={<MainLayout><NewNTrendingPage /></MainLayout>} />
      <Route path="/novedades" element={<MainLayout><LastReleasesPage /></MainLayout>} />
      <Route path="/juego/:id" element={<MainLayout><VideoGameDetailsPage /></MainLayout>} />
      <Route path="/buscar" element={<MainLayout><SearchResultsPage /></MainLayout>} />
      <Route path="/proximamente" element={<MainLayout><NextReleasesPage /></MainLayout>} />
    </Routes>
  )
}

export default AppRoutes