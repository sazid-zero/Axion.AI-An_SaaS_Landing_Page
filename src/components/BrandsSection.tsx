import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const BrandsSection = ({ AnimatedSection, fadeInUp, staggerContainer, scaleIn }: { AnimatedSection: any; fadeInUp: any; staggerContainer: any; scaleIn: any }) => (
  <AnimatedSection className="py-16 pt-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className="text-center text-2xl font-semibold text-gray-600 mb-12"
        variants={fadeInUp}
        
      >
        Trusted by leading companies
      </motion.h2>
      <GlassCard className="p-8">
        <motion.div 
          className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        
        >
          {['discord', 'openai', 'paypal', 'slack', 'spotify', 'uber'].map((brand) => (
            <motion.img
              key={brand}
              src={`/assets/logos/${brand}.png`}
              alt={brand}
              className="h-8 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300"
              variants={scaleIn}
              whileHover={{ scale: 1.2, rotate: 5 }}
              
            />
          ))}
        </motion.div>
      </GlassCard>
    </div>
  </AnimatedSection>
);

export default BrandsSection;