import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    <ContactSection />
  </motion.div>
);

export default ContactPage;
