import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { perfil } from "@/config/perfil";
import { useState, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={perfil.cv}
      download={perfil.nombreArchivoCV}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm font-medium tracking-widest uppercase text-primary mb-4"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-foreground"
            >
              {perfil.nombre[0]}
              <br />
              {perfil.nombre[1]}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient"
            >
              {perfil.alias}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed mx-auto lg:mx-0"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 items-center lg:items-start"
            >
              {perfil.cv && (
              <MagneticButton className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-cyan transition-all duration-300 hover:glow-cyan-strong">
                <Download size={16} />
                {t.hero.downloadCV}
              </MagneticButton>
              )}
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                {t.hero.learnMore}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="relative flex-shrink-0 lg:transform lg:-translate-x-8"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-2 border-primary animate-glow-pulse">
              <img
                src={perfil.foto}
                alt={perfil.nombre.join(" ")}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full pointer-events-none" style={{ boxShadow: "0 0 60px hsl(186 100% 45% / 0.2)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
