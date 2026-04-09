import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Package, 
  Layers, 
  BarChart3, 
  Plus, 
  HelpCircle, 
  LogOut,
  Zap,
  Tag
} from 'lucide-react'

const AdminSidebar = () => {
  const location = useLocation()
  
  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Products', path: '/produtos', icon: Package },
    { name: 'Categories', path: '#', icon: Tag },
    { name: 'Stock', path: '#', icon: Layers },
    { name: 'Analytics', path: '#', icon: BarChart3 },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col bg-surface-container-low dark:bg-on-background py-8 gap-2 z-40 border-r border-outline-variant/10">
      <div className="px-8 mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-lg shadow-primary/20">
            <Zap size={20} fill="currentColor" />
          </div>
          <div>
            <h2 className="font-headline font-black text-primary text-xl leading-tight">Editorial</h2>
            <p className="text-[10px] text-on-surface-variant font-label font-bold uppercase tracking-widest">Premium Admin</p>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-1 pr-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`group relative flex items-center gap-4 py-3 pl-10 transition-all duration-300 ${
              isActive(item.path)
                ? 'bg-white dark:bg-white/5 text-primary rounded-r-full font-bold shadow-sm'
                : 'text-on-surface/60 hover:text-primary hover:bg-white/50 dark:hover:bg-white/5 rounded-r-full'
            }`}
          >
            {isActive(item.path) && (
              <motion.div 
                layoutId="activeNav"
                className="absolute left-0 w-1.5 h-6 bg-primary rounded-r-full"
              />
            )}
            <item.icon size={18} className={isActive(item.path) ? 'fill-primary/10' : ''} />
            <span className="font-body text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto px-6 space-y-4">
        <Link 
          to="/dashboard/novo-produto"
          className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95"
        >
          <Plus size={16} />
          Add New Product
        </Link>
        
        <div className="pt-6 border-t border-outline-variant/20">
          <Link to="#" className="text-on-surface/60 hover:text-primary pl-4 py-2 flex items-center gap-4 transition-colors">
            <HelpCircle size={18} />
            <span className="font-body font-medium text-sm">Support</span>
          </Link>
          <button className="w-full text-on-surface/60 hover:text-error pl-4 py-2 flex items-center gap-4 transition-colors">
            <LogOut size={18} />
            <span className="font-body font-medium text-sm text-left">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default AdminSidebar
