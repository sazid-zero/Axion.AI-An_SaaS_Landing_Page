import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const FooterSection = ({ fadeInUp, staggerContainer }: { fadeInUp: any; staggerContainer: any }) => (
  <motion.footer 
    className="relative py-16 bg-gradient-to-t from-gray-900/50 to-transparent"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <GlassCard className="py-12 px-8 backdrop-blur-2xl bg-white/30 border border-white/40">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
         
        >
          <motion.div variants={fadeInUp}>
            <motion.h3 
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Axion.AI
            </motion.h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Transform your business with cutting-edge AI technology and innovative solutions.
            </p>
          </motion.div>
          {[
            { title: "Services", items: ["AI Automation", "Data Analytics", "Predictive Modeling"] },
            { title: "Company", items: ["About Us", "Careers", "Contact"] },
            { title: "Support", items: ["Help Center", "Documentation", "Privacy Policy"] }
          ].map((section, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <h4 className="font-semibold mb-4 text-gray-900 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex}
                    whileHover={{ x: 5, scale: 1.05 }}
                    className="cursor-pointer transition-all duration-300 text-gray-600 hover:text-blue-600 text-sm"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="border-t border-white/30 mt-8 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          
        >
          <p className="text-gray-700 font-medium">
            © 2024 Axion.AI. All rights reserved.
          </p>
        </motion.div>
      </GlassCard>
    </div>
  </motion.footer>
);

export default FooterSection;