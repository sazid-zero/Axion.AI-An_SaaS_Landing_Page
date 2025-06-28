import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const FeaturesSection = ({ AnimatedSection, fadeInUp, staggerContainer, scaleIn }: { AnimatedSection: any; fadeInUp: any; staggerContainer: any; scaleIn: any }) => (
  <AnimatedSection id="features" className="py-20 pt-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl font-bold text-gray-900"
          variants={fadeInUp}
        >
          Powerful AI Features
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 mt-4"
          variants={fadeInUp}
        >
          Discover the cutting-edge tools that set EdgeAI apart
        </motion.p>
      </div>
      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {[
          {
            title: "AI-Powered Chatbots",
            description: "Engage customers 24/7 with intelligent, context-aware chatbots.",
            image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            title: "Data Visualization",
            description: "Transform complex data into actionable insights with dynamic visualizations.",
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            title: "Machine Learning APIs",
            description: "Integrate advanced ML models into your applications with ease.",
            image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            variants={scaleIn}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <GlassCard className="p-8 group h-full relative">
              {/* Animated Feature Image */}
              <div className="relative mb-6">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-cyan-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-2xl border border-white/20 relative z-10"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ y: 0 }}
  animate={{ y: [-10, 10] }}
  transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
                />
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
              </div>
              <motion.h3 
                className="text-xl font-semibold mb-4 text-gray-900"
                variants={fadeInUp}
                whileHover={{ color: "#3b82f6" }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                variants={fadeInUp}
              >
                {feature.description}
              </motion.p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </AnimatedSection>
);

export default FeaturesSection;