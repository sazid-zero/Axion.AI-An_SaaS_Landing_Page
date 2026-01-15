import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const TestimonialsSection = ({ AnimatedSection, fadeInUp, staggerContainer, scaleIn }: { AnimatedSection: any; fadeInUp: any; staggerContainer: any; scaleIn: any }) => (
  <AnimatedSection id="testimonials" className="py-20 pt-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent"
          variants={fadeInUp}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 mt-4"
          variants={fadeInUp}
        >
          Hear from businesses transformed by Axion.AI's solutions
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
            name: "Sharif Mahmud",
            role: "CEO, TechTrend Innovations",
            avatar: "/sazid.jpg",
            quote: "Axion.AI's automation tools streamlined our operations, saving us 30% in costs and boosting efficiency."
          },
          {
            name: "Sharmin Akther",
            role: "CTO, DataSync Solutions",
            avatar: "/sharmin.jpg",
            quote: "The real-time analytics provided by Axion.AI gave us insights we never thought possible."
          },
          {
            name: "Shafayat Mahmud",
            role: "Founder, AIStart Labs",
            avatar: "/shafayat.jpg",
            quote: "Predictive insights from Axion.AI helped us stay ahead of market trends."
          }
        ].map((testimonial, index) => (
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
            <GlassCard className="p-8 group h-full relative">
              {/* Animated Avatar with Glass Effect */}
              <div className="relative mb-6">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-cyan-600/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"
                />
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto border border-white/20 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
              <motion.p 
                className="text-gray-600 italic mb-4"
                variants={fadeInUp}
              >
                "{testimonial.quote}"
              </motion.p>
              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </motion.div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </AnimatedSection>
);

export default TestimonialsSection;