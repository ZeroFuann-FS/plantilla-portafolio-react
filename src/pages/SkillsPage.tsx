import { motion } from "framer-motion";
import SkillsSection from "@/components/SkillsSection";

const SkillsPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    <SkillsSection />
  </motion.div>
);

export default SkillsPage;
