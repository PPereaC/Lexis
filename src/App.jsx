import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'

function App() {
  const basename = import.meta.env.PROD ? '/Agon' : ''
  return (
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App