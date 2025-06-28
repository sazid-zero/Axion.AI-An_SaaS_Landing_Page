import { motion } from "framer-motion";

const Button = ({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
  <motion.button
    onClick={onClick}
    className={`relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden backdrop-blur-xl bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-white/30 shadow-2xl ${className}`}
    style={{
      background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.9), rgba(6, 182, 212, 0.9), rgba(16, 185, 129, 0.9))',
      backgroundSize: '400% 400%',
    }}
    whileHover={{ 
      scale: 1.05,
      backgroundPosition: '100% 0%',
      boxShadow: '0 25px 50px rgba(59, 130, 246, 0.4)',
    }}
    whileTap={{ scale: 0.95 }}
    animate={{
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    }}
    transition={{
      backgroundPosition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      },
      scale: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }}
  >
    <motion.span
      className="relative z-10"
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.span>
  </motion.button>
);

export default Button;