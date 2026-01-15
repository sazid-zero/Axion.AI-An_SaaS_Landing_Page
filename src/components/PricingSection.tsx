import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import Button from "./Button";

const PricingSection = ({ AnimatedSection, fadeInUp, staggerContainer, scaleIn }: { AnimatedSection: any; fadeInUp: any; staggerContainer: any; scaleIn: any }) => (
  <AnimatedSection id="pricing" className="py-20 pt-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent"
          variants={fadeInUp}
          style={{ backgroundSize: '200% 200%' }}
  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          Pricing Plans
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 mt-4"
          variants={fadeInUp}
        >
          Choose the plan that's right for your business
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
            name: "Basic",
            price: "$19",
            features: ["Access to basic AI tools", "Limited data analytics", "Email support"],
            popular: false
          },
          {
            name: "Pro",
            price: "$49",
            features: ["Everything in Basic", "Advanced AI features", "Real-time analytics", "Priority email support"],
            popular: true
          },
          {
            name: "Enterprise",
            price: "$99",
            features: ["Everything in Pro", "Dedicated account manager", "Custom integrations", "24/7 premium support"],
            popular: false
          }
        ].map((plan, index) => (
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
            <GlassCard className={`p-8 h-full ${plan.popular ? 'border-2 border-blue-600/50' : ''}`}>
              {plan.popular && (
                <motion.div 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-md"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Best Value
                </motion.div>
              )}
              <motion.h3 
                className="text-2xl font-semibold mb-4 text-gray-900"
                whileHover={{ scale: 1.1 }}
              >
                {plan.name}
              </motion.h3>
              <motion.div 
                className="text-4xl font-bold mb-6 text-gray-900"
                whileHover={{ scale: 1.1, color: "#3b82f6" }}
              >
                {plan.price}<span className="text-lg text-gray-500">/month</span>
              </motion.div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex}
                    className="flex items-center gap-2 text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-green-500">✓</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <Button className="w-full">Choose Plan</Button>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </AnimatedSection>
);

export default PricingSection;