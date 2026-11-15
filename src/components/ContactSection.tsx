import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { perfil } from "@/config/perfil";

const links = [
  { icon: Mail, label: "Email", href: `mailto:${perfil.correo}`, text: perfil.correo },
  { icon: Github, label: "GitHub", href: perfil.github, text: perfil.github.replace(/^https?:\/\/(www\.)?/, "") },
  { icon: Linkedin, label: "LinkedIn", href: perfil.linkedin, text: perfil.linkedin.replace(/^https?:\/\/(www\.)?/, "") },
  { icon: Phone, label: "Phone", href: `tel:${perfil.telefono.replace(/[^+\d]/g, "")}`, text: perfil.telefono },
].filter((l) => l.text);

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">{t.contact.label}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t.contact.title}</h2>
          <p className="mt-4 max-w-md mx-auto text-muted-foreground">{t.contact.description}</p>
        </motion.div>

        <div className="mt-12 flex flex-col items-center gap-4 max-w-md mx-auto">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group flex w-full items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-primary/60 hover:glow-border"
            >
              <link.icon size={20} className="text-primary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">{link.label}</p>
                <p className="text-xs text-muted-foreground truncate">{link.text}</p>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
