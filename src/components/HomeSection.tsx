import { motion } from "framer-motion";
import Button from "./Button";

const HomeSection = ({ AnimatedSection, fadeInUp, staggerContainer }: {AnimatedSection: any; fadeInUp: any; staggerContainer: any }) => (
  <AnimatedSection id="home" className="pt-32 pb-20 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold leading-tight"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.span variants={fadeInUp} className="text-gray-900">Transform Your Business with{' '}</motion.span>
            <motion.span 
              variants={fadeInUp}
              className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              AI Power
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mt-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Leverage cutting-edge artificial intelligence to automate processes, 
            gain insights, and accelerate your business growth. Experience a future where your business runs smarter, faster, and more efficiently.
          </motion.p>
          <motion.div 
            className="mt-8 flex gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <Button>Get Started</Button>
            <motion.button 
              className="px-6 py-3 backdrop-blur-xl bg-white/20 border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 font-semibold cursor-pointer"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                borderColor: '#3b82f6',
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.02, rotate: 1 }} >
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-cyan-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="absolute -inset-4 backdrop-blur-xl bg-gradient-to-r from-white/30 to-white/10 rounded-3xl border border-white/40" />
            <div className="absolute -inset-2 backdrop-blur-lg bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 rounded-3xl border border-white/30" />
            
            <motion.div className="relative z-10">
              <motion.img
                src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI Technology"
                className="rounded-3xl shadow-2xl relative z-10 border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 backdrop-blur-xl bg-gradient-to-r from-blue-500/30 to-violet-500/30 rounded-2xl border border-white/40 shadow-xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 backdrop-blur-xl bg-gradient-to-r from-cyan-500/30 to-green-500/30 rounded-xl border border-white/40 shadow-xl"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
);

export default HomeSection;