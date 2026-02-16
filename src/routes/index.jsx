import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import NewNTrendingPage from '../pages/NewNTrendingPage'
import LastReleasesPage from '../pages/LastReleasesPage'

import '../App.css'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><NewNTrendingPage /></MainLayout>} />
      <Route path="/ultimos-lanzamientos" element={<MainLayout><LastReleasesPage /></MainLayout>} />
    </Routes>
  )
}

export default AppRoutes