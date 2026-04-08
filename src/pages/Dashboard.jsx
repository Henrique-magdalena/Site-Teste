import { motion } from 'framer-motion'
import { LayoutDashboard, ShoppingBag, Users, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    { name: 'Vendas Totais', value: 'R$ 45.231,89', trend: '+12.5%', isUp: true, icon: TrendingUp },
    { name: 'Pedidos', value: '1,284', trend: '+8.2%', isUp: true, icon: ShoppingBag },
    { name: 'Novos Clientes', value: '312', trend: '-2.4%', isUp: false, icon: Users },
  ]

  const recentOrders = [
    { id: '#4521', customer: 'João Silva', date: '08 Abr, 2024', amount: 'R$ 189,90', status: 'Processando' },
    { id: '#4520', customer: 'Maria Santos', date: '07 Abr, 2024', amount: 'R$ 349,80', status: 'Enviado' },
    { id: '#4519', customer: 'Pedro Oliveira', date: '07 Abr, 2024', amount: 'R$ 159,90', status: 'Concluído' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="font-headline font-extrabold text-4xl tracking-tighter text-on-surface flex items-center gap-3">
            <LayoutDashboard className="text-primary" size={32} /> DASHBOARD
          </h1>
          <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs mt-2">Visão Geral do Sistema</p>
        </div>
        
        <div className="flex gap-4">
          <button className="bg-surface-container-high px-6 py-3 rounded-xl font-label text-sm font-bold">Relatórios</button>
          <button className="kinetic-gradient text-white px-6 py-3 rounded-xl font-label text-sm font-bold shadow-lg shadow-primary/20">Configurações</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-outline-variant/10"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                <stat.icon size={20} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.isUp ? 'text-green-600' : 'text-red-600'}`}>
                {stat.trend} {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <p className="text-on-surface-variant text-sm font-label uppercase tracking-widest mb-1">{stat.name}</p>
            <h3 className="text-2xl font-headline font-extrabold text-on-surface">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* Tables & Chart Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-surface-container-low p-8 rounded-3xl"
        >
          <h3 className="font-headline font-bold text-xl mb-6">Pedidos Recentes</h3>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm">
                <div>
                  <p className="font-headline font-bold text-sm text-on-surface">{order.id} - {order.customer}</p>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-headline font-bold text-primary text-sm">{order.amount}</p>
                  <span className="inline-block px-2 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[8px] font-bold uppercase tracking-tighter mt-1">
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-on-background p-8 rounded-3xl text-white overflow-hidden relative"
        >
          <div className="relative z-10">
            <h3 className="font-headline font-bold text-xl mb-2">Engajamento Semanal</h3>
            <p className="text-white/50 text-xs mb-8">Baseado em cliques e conversões de coleções.</p>
            
            <div className="flex items-end gap-3 h-48">
              {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    className="w-full kinetic-gradient rounded-t-lg"
                  />
                  <span className="text-[8px] text-white/30 uppercase tracking-widest">Dia {i+1}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <TrendingUp size={120} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
