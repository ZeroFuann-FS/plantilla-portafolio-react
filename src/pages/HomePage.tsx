import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";

const HomePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <HeroSection />
  </motion.div>
);

export default HomePage;
