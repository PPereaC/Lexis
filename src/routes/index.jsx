import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import NewNTrendingPage from '../pages/NewNTrendingPage'
import LastReleasesPage from '../pages/LastReleasesPage'
import VideoGameDetailsPage from '../pages/VideoGameDetailsPage'

import '../App.css'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/tendencias" replace />} />
      <Route path="/tendencias" element={<MainLayout><NewNTrendingPage /></MainLayout>} />
      <Route path="/novedades" element={<MainLayout><LastReleasesPage /></MainLayout>} />
      <Route path="/juego/:id" element={<MainLayout><VideoGameDetailsPage /></MainLayout>} />
    </Routes>
  )
}

export default AppRoutes