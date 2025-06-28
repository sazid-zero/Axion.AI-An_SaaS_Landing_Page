import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const StatsSection = ({ AnimatedSection, staggerContainer, scaleIn }: { AnimatedSection: any; staggerContainer: any; scaleIn: any }) => (
  <AnimatedSection id="stats" className="py-16 relative pt-28">
    <GlassCard className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {[
          { number: '100+', text: 'AI Models Implemented' },
          { number: '250+', text: 'Enterprise Clients' },
          { number: '99.9%', text: 'Uptime Guarantee' },
          { number: '10+', text: 'Years Experience' }
        ].map((stat, index) => (
          <motion.div 
            key={index}
            variants={scaleIn}
            whileHover={{ scale: 1.1, y: -10 }}
            className="p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group relative"
          >
            {/* Glassmorphism Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-cyan-600/20 rounded-xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="absolute -inset-2 backdrop-blur-xl bg-gradient-to-r from-white/20 to-white/10 rounded-xl border border-white/30" />
            
            {/* Floating Glass Elements */}
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 backdrop-blur-xl bg-gradient-to-r from-blue-500/30 to-violet-500/30 rounded-full border border-white/40 shadow-xl"
              animate={{
                y: [0, -5, 0],
                rotate: [0, 3, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-6 h-6 backdrop-blur-xl bg-gradient-to-r from-cyan-500/30 to-green-500/30 rounded-full border border-white/40 shadow-xl"
              animate={{
                y: [0, 5, 0],
                rotate: [0, -3, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Stat Content */}
            <motion.h3 
              className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent relative z-10"
  whileHover={{ scale: 1.2 }}
  style={{ backgroundSize: '200% 200%' }}
  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              {stat.number}
            </motion.h3>
            <p className="text-gray-600 mt-2 relative z-10">{stat.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </GlassCard>
  </AnimatedSection>
);

export default StatsSection;