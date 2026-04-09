import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import MainLayout from './layouts/MainLayout'
import { Suspense, lazy } from 'react'

// Using lazy loading for better performance (Vercel best practices)
const HomeLazy = lazy(() => import('./pages/Home'))
const ProductsLazy = lazy(() => import('./pages/Products'))
const ContactLazy = lazy(() => import('./pages/Contact'))
const DashboardLazy = lazy(() => import('./pages/Dashboard'))
const AddProductLazy = lazy(() => import('./pages/AddProduct'))

function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
          <Routes>
            <Route path="/" element={<HomeLazy />} />
            <Route path="/produtos" element={<ProductsLazy />} />
            <Route path="/contato" element={<ContactLazy />} />
            <Route path="/dashboard" element={<DashboardLazy />} />
            <Route path="/dashboard/novo-produto" element={<AddProductLazy />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  )
}

export default App
