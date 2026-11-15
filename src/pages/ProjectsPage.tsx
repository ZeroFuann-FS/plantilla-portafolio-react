import { motion } from "framer-motion";
import ProjectsSection from "@/components/ProjectsSection";

const ProjectsPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    <ProjectsSection />
  </motion.div>
);

export default ProjectsPage;
