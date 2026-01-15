import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const ServicesSection = ({ AnimatedSection, fadeInUp, staggerContainer, scaleIn }: { AnimatedSection: any; fadeInUp: any; staggerContainer: any; scaleIn: any }) => (
  <AnimatedSection id="services" className="py-20 pt-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent"
          variants={fadeInUp}
        >
          Our Services
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 mt-4"
          variants={fadeInUp}
        >
          Comprehensive AI solutions for your business needs
        </motion.p>
      </div>
      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        
      >
        {[
          {
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            title: "Intelligent Automation",
            description: "Streamline processes and reduce manual tasks with AI-powered automation."
          },
          {
            icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
            title: "Real-Time Analytics",
            description: "Gain actionable insights as events unfold with real-time data processing."
          },
          {
            icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
            title: "Predictive Insights",
            description: "Anticipate trends and mitigate risks before they occur with predictive AI."
          }
        ].map((service, index) => (
          <motion.div
            key={index}
            variants={scaleIn}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transform: "translateZ(0)", willChange: "transform" }}
          >
            <GlassCard className="p-8 group h-full">
              <motion.div 
                className="w-12 h-12 bg-blue-100/50 rounded-lg flex items-center justify-center mb-6 border border-white/20"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                </svg>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-4 text-gray-900"
                whileHover={{ color: "#3b82f6" }}
              >
                {service.title}
              </motion.h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </AnimatedSection>
);

export default ServicesSection;