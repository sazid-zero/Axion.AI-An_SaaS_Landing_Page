import { motion } from "framer-motion";

const AboutSection = ({ AnimatedSection, fadeInUp, staggerContainer, scaleIn }: { AnimatedSection: any; fadeInUp: any; staggerContainer: any; scaleIn: any }) => (
  <AnimatedSection id="about" className="py-20 pt-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          
        >
          <motion.h2 
            className="text-4xl font-bold mb-8"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
        
          ><motion.span variants={fadeInUp} className="text-gray-900">About{' '}</motion.span>
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
            >Axion.AI
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            variants={fadeInUp}
            
          >
            We are a leading AI technology company dedicated to transforming businesses 
            through innovative artificial intelligence solutions.Our team of experts combines industry‑leading research with innovative algorithms to deliver a platform that adapts to your unique needs. Join us and lead the digital revolution in your industry.
          </motion.p>
          <motion.div 
            className="grid sm:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            
          >
            {[
              { title: "Mission", text: "Our mission is to use AI for the good of humanity and the planet." },
              { title: "Vision", text: "Our vision is to drive business innovation and growth through AI." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4"
                variants={scaleIn}
                whileHover={{ scale: 1.05, x: 10 }}
                
              >
                <motion.div 
                  className="w-8 h-8 bg-blue-100/50 rounded-lg flex items-center justify-center border border-white/20"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  
                >
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="relative"
          style={{ transform: "translateZ(0)", willChange: "transform" }}
        >
          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="absolute -inset-3 backdrop-blur-xl bg-gradient-to-r from-white/20 to-white/10 rounded-3xl border border-white/30" />
            
            <motion.div className="relative z-10">
              <motion.img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About us"
                className="rounded-2xl shadow-2xl relative z-10 border border-white/20"
                whileHover={{ scale: 1.02 }}
                style={{ y: 0 }}
                animate={{ y: [-10, 10] }}
                transition={{
  type: "spring",
  stiffness: 300,
  damping: 20,
  y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
}}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
);

export default AboutSection;