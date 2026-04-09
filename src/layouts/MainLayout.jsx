import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const MainLayout = ({ children }) => {
  const location = useLocation()
  const isAdminPage = location.pathname.startsWith('/dashboard') && location.pathname !== '/dashboard'
  
  // Note: dashboard/novo-produto should not have the main footer/header
  // but let's keep it simple for now or follow the design
  const showMainLayout = !isAdminPage

  return (
    <div className="flex flex-col min-h-screen">
      {showMainLayout && <Header />}
      <main className={`flex-grow ${showMainLayout ? 'pt-20' : ''}`}>
        {children}
      </main>
      {showMainLayout && <Footer />}
    </div>
  )
}

export default MainLayout
