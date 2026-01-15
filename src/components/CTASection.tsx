import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import Button from "./Button";

const CTASection = ({ AnimatedSection, fadeInUp, scaleIn }: { AnimatedSection: any; fadeInUp: any; scaleIn: any }) => (
  <AnimatedSection className="py-20 pt-28">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <GlassCard className="p-12">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          variants={fadeInUp}
        >
          Quick Start Your Own{' '}
          <motion.span 
            className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%' }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            AI Business
          </motion.span>
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 mb-8"
          variants={fadeInUp}
        >
          Leverage our AI-powered platform to revolutionize your digital marketing efforts. 
          Get data-driven insights and automation at your fingertips.
        </motion.p>
        <motion.div
          variants={scaleIn}
          whileHover={{ scale: 1.1 }}
          style={{ transform: "translateZ(0)", willChange: "transform" }}
        >
          <Button>Get In Touch</Button>
        </motion.div>
      </GlassCard>
    </div>
  </AnimatedSection>
);

export default CTASection;