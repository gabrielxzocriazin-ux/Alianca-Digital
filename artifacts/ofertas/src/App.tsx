import React from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, BarChart3, MessageCircle, ShoppingBag, Lock } from 'lucide-react';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#050505] text-white flex flex-col items-center py-12 px-4 relative overflow-hidden font-sans selection:bg-primary/30 selection:text-primary">
      
      {/* Background ambient glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      {/* Grain overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-screen bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noiseFilter%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.85%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

      <div className="w-full max-w-md z-10 flex flex-col items-center">
        
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="w-28 h-28 rounded-full p-[2px] bg-gradient-to-b from-primary to-primary/20 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop" 
                alt="Sua Marca" 
                className="w-full h-full object-cover rounded-full border-4 border-[#050505]"
              />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold tracking-tight mb-2 flex items-center gap-2">
            Sua Marca / Nome
            <div className="bg-primary/20 p-1 rounded-full text-primary">
              <Sparkles className="w-4 h-4" />
            </div>
          </h1>
          <p className="text-gray-400 text-sm font-medium max-w-[280px]">
            Escolha uma das opções abaixo para garantir seu acesso:
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col gap-4"
        >
          
          {/* Featured Hero Button */}
          <motion.a
            href="#"
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="relative group w-full bg-[#0A0A0A] border border-primary/30 rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_rgba(0,255,102,0.15)]"
          >
            {/* Animated gradient background sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            
            <div className="relative z-10 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                  <TrendingUp className="w-3 h-3" />
                  Mais Vendido
                </span>
                <ArrowRight className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              
              <h2 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                E-book Mudança Express (27 Dias)
              </h2>
              <p className="text-sm text-gray-400 font-medium">
                Acesso imediato + Bônus Exclusivo
              </p>
            </div>
          </motion.a>

          {/* Regular Buttons */}
          <motion.a
            href="#"
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full bg-[#0A0A0A] border border-white/5 rounded-2xl p-5 flex items-center justify-between transition-all duration-300 hover:bg-[#0E0E0E] hover:border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors group-hover:bg-white/10">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-white mb-0.5">
                  Grupo VIP de Vendas Digitais
                </h2>
                <p className="text-xs text-gray-500 font-medium">
                  Aprenda estratégias diárias de escala
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </motion.a>

          <motion.a
            href="#"
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full bg-[#0A0A0A] border border-white/5 rounded-2xl p-5 flex items-center justify-between transition-all duration-300 hover:bg-[#0E0E0E] hover:border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors group-hover:bg-white/10">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-white mb-0.5">
                  Planilha Automática de Controle
                </h2>
                <p className="text-xs text-gray-500 font-medium">
                  Calcule seus lucros e métricas em segundos
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </motion.a>

          <motion.a
            href="#"
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full bg-[#0A0A0A] border border-white/5 rounded-2xl p-5 flex items-center justify-between transition-all duration-300 hover:bg-[#0E0E0E] hover:border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors group-hover:bg-primary/10">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-white mb-0.5">
                  Como Ser um Vendedor da Kiwify
                </h2>
                <p className="text-xs text-gray-500 font-medium">
                  e Venda Rapidamente
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </motion.a>

          <motion.a
            href="#"
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full bg-[#0A0A0A] border border-white/5 rounded-2xl p-5 flex items-center justify-between transition-all duration-300 hover:bg-[#0E0E0E] hover:border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors group-hover:bg-primary/10">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-white mb-0.5">
                  Scripts Secretos de Vendas
                </h2>
                <p className="text-xs text-gray-500 font-medium">
                  Acesso exclusivo às melhores abordagens
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </motion.a>

          <motion.a
            href="#"
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full bg-[#0A0A0A] border border-white/5 rounded-2xl p-5 flex items-center justify-between transition-all duration-300 hover:bg-[#0E0E0E] hover:border-white/10 mt-2"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#25D366] transition-colors group-hover:bg-[#25D366]/10">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-white mb-0.5">
                  Dúvidas? Fale Conosco
                </h2>
                <p className="text-xs text-gray-500 font-medium">
                  Atendimento rápido em tempo real
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
          </motion.a>

        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 mb-6"
        >
          <p className="text-xs text-gray-600 font-medium">
            © 2026 Todos os direitos reservados.
          </p>
        </motion.div>
        
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={() => <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white font-sans">404 - Não encontrado</div>} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;
