import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, User, Menu } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../hooks/useCart'
import CartDrawer from './CartDrawer'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const location = useLocation()
  const { getTotalItems } = useCart()

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Contato', path: '/contato' },
    { name: 'Dashboard (Admin)', path: '/dashboard' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-black italic text-on-surface font-headline tracking-tight">
              KINETIC
            </Link>
            <div className="hidden md:flex items-center gap-6 font-headline font-bold tracking-tight">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-all duration-300 hover:opacity-80 ${
                    isActive(link.path)
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-on-surface/60 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative transition-transform scale-95 active:scale-90 text-on-surface/60 hover:text-primary"
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <button className="transition-transform scale-95 active:scale-90 text-on-surface/60 hover:text-primary">
              <User size={24} />
            </button>
            <button 
              className="md:hidden text-on-surface/60"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-headline font-bold ${
                  isActive(link.path) ? 'text-primary' : 'text-on-surface/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

export default Header
