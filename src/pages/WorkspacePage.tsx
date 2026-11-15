import { motion } from "framer-motion";
import WorkspaceSection from "@/components/WorkspaceSection";

const WorkspacePage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    <WorkspaceSection />
  </motion.div>
);

export default WorkspacePage;
