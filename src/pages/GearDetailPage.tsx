import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

import { perfil } from "@/config/perfil";

const gearImages = perfil.equipo;

const GearDetailPage = () => {
  const { gearId } = useParams();
  const { t } = useLanguage();

  const gearItem = t.workspace.gear.find((g) => g.id === gearId);
  const image = gearId ? gearImages[gearId] : undefined;

  if (!gearItem) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="text-muted-foreground">Gear not found.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-6">
        <Link
          to="/workspace"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          {t.workspace.backLabel}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-lg border border-border"
          >
            <img
              src={image}
              alt={gearItem.name}
              className="w-full h-auto object-cover aspect-video"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
              {t.workspace.label}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              {gearItem.name}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">{gearItem.detail}</p>

            <div className="mt-8 space-y-4">
              {gearItem.specs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.3 }}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <span className="text-primary font-bold text-sm mt-0.5">•</span>
                  <span className="text-sm text-foreground">{spec}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GearDetailPage;
