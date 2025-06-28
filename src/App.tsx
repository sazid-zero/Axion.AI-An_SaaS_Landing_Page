import { useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import HomeSection from "./components/HomeSection";
import StatsSection from "./components/StatsSection";
import BrandsSection from "./components/BrandsSection";
import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import FooterSection from "./components/FooterSection";

// Animation variants with explicit typing
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  },
  exit: { 
    opacity: 0, 
    y: 60,
    transition: {
      duration: 0.4,
      ease: "easeIn" as const
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  }
};

const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  },
  exit: { 
    scale: 0.8, 
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeIn" as const
    }
  }
};

function App() {
  useEffect(() => {
    document.title = "Axion.AI - AI SaaS Platform";
  }, []);

  const AnimatedSection = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        id={id}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="exit"
        variants={fadeInUp}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  const scrollToSection = (id: string) => {
    console.log(`Attempting to scroll to section: ${id}`);
    const element = document.getElementById(id);
    if (element) {
      console.log(`Found element with id: ${id}`);
      const navbarHeight = 64; // Adjust based on navbar height (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    } else {
      console.log(`Element with id: ${id} not found`);
    }
  };

  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuLinkClick = (id: string) => {
    scrollToSection(id);
    setTimeout(() => setIsMenuOpen(false), 300); // Delay menu close to allow scroll
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-900 transition-all duration-500">
      {/* Enhanced Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-400/40 to-green-400/40 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-violet-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full backdrop-blur-2xl bg-white/20 border-b border-white/30 z-50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.button 
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img
                src="/chat.png" // Replace with your actual logo path
                alt="Axion.AI Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Axion.AI
              </span>
            </motion.button>
            <div className="hidden md:flex space-x-8">
              {["Home", "Services", "About", "Pricing"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative hover:text-blue-600 transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
            <motion.button
              className="md:hidden p-2 rounded-xl backdrop-blur-xl bg-white/20 hover:bg-white/30 border border-white/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </motion.button>
          </div>
        </div>
        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ overflow: "hidden" }}
        >
          <div className="px-4 pt-2 pb-4 bg-white/20 backdrop-blur-2xl border-b border-white/30">
            {["Home", "Services", "About", "Pricing"].map((item) => (
              <motion.button
                key={item}
                onClick={() => handleMenuLinkClick(item.toLowerCase())}
                className="block w-full text-left py-2 text-gray-900 hover:text-blue-600 transition-colors duration-300 font-medium"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      <HomeSection AnimatedSection={AnimatedSection} fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <StatsSection AnimatedSection={AnimatedSection} staggerContainer={staggerContainer} scaleIn={scaleIn} />
      <ServicesSection AnimatedSection={AnimatedSection} fadeInUp={fadeInUp} staggerContainer={staggerContainer} scaleIn={scaleIn} />
      <FeaturesSection AnimatedSection={AnimatedSection} fadeInUp={fadeInUp} staggerContainer={staggerContainer} scaleIn={scaleIn} />
      <AboutSection AnimatedSection={AnimatedSection} fadeInUp={fadeInUp} staggerContainer={staggerContainer} scaleIn={scaleIn} />
      <TestimonialsSection AnimatedSection={AnimatedSection} fadeInUp={fadeInUp} staggerContainer={staggerContainer} scaleIn={scaleIn} />
      <PricingSection AnimatedSection={AnimatedSection} fadeInUp={fadeInUp} staggerContainer={staggerContainer} scaleIn={scaleIn} />
      <CTASection AnimatedSection={AnimatedSection} fadeInUp={fadeInUp} scaleIn={scaleIn} />
      <BrandsSection AnimatedSection={AnimatedSection} fadeInUp={fadeInUp} staggerContainer={staggerContainer} scaleIn={scaleIn} />
      <FooterSection fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
    </div>
  );
}

export default App;