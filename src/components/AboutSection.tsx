import { motion } from "framer-motion";
import { Code, Palette, Users, Zap, Heart, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Code, Palette, Users, Zap, Heart, Globe];

const cardClasses = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">{t.about.label}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t.about.title}</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">{t.about.description}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {t.about.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:glow-border ${cardClasses[i]}`}
              >
                <Icon size={28} className="text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
