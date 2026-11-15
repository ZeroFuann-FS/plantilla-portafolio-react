import { useState } from "react";
import { motion } from "framer-motion";
import { Laptop, Keyboard, Mouse, Monitor, Speaker, ArrowUp } from "lucide-react";
import { perfil } from "@/config/perfil";
import { useLanguage } from "@/i18n/LanguageContext";

const gearIconMap: Record<string, React.ElementType> = {
  laptop: Laptop,
  keyboard: Keyboard,
  mouse: Mouse,
  monitor: Monitor,
  speaker: Speaker,
};

const categoryIcons: Record<string, React.ElementType> = {
  computer: Laptop,
  display: Monitor,
  peripherals: Mouse,
  smart: Speaker,
};

const WorkspaceSection = () => {
  const { t } = useLanguage();

  const gearByCategory = t.workspace.categories.map((cat) => ({
    ...cat,
    items: t.workspace.gear.filter((g) => g.category === cat.id),
  }));

  // Por qué es importante cada herramienta (clave = id del equipo en translations.ts).
  const importanceTexts: Record<string, string> = {
    laptop: "Es el centro de todo: aquí escribo código, corro entornos de desarrollo y pruebo los proyectos. Elegí un equipo equilibrado entre rendimiento, batería y portabilidad.",
    keyboard: "Un buen teclado hace más cómodas las jornadas largas. El formato compacto deja más espacio para el mouse y ayuda a mantener una postura relajada.",
    mouse: "Ligero y preciso, con botones programables para atajos frecuentes. Ideal tanto para programar como para diseñar.",
    monitor: "Una segunda pantalla permite tener el código de un lado y el navegador o la documentación del otro, sin cambiar de ventana todo el tiempo.",
    speaker: "Música para concentrarme, recordatorios y temporizadores por voz para tomar descansos sin salir del flujo de trabajo.",
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-24 lg:py-32 min-h-screen pt-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Floating Sticky TOC */}
        <aside className="w-full lg:w-72 fixed top-32 right-20 z-50 hidden lg:block">
          <nav className="relative bg-card/90 backdrop-blur-md rounded-2xl p-4 border border-border/30 shadow-lg">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-6 pb-2 border-b border-border/30">
              {t.workspace.toc}
            </h4>
            <ul className="space-y-2">
              {gearByCategory.map((cat) => {
                const CatIcon = categoryIcons[cat.id] || Monitor;
                return (
                  <li key={cat.id}>
                    <button
                      onClick={() => scrollTo(`ws-${cat.id}`)}
                      className="group flex w-full items-center gap-2 p-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-colors duration-200"
                    >
                      <CatIcon size={14} className="flex-shrink-0" />
                      <span>{cat.label}</span>
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={scrollToTop}
                  className="group flex w-full items-center gap-2 p-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-colors duration-200 mt-2 pt-2 border-t border-border/20"
                >
                  <ArrowUp size={14} className="flex-shrink-0" />
                  <span>{t.workspace.scrollTop}</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 min-w-0 lg:pr-80">
          <div className="container mx-auto px-0">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mb-16 pb-8 border-b border-border/30"
            >
              <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-primary mb-4">
                {t.workspace.label}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 text-foreground">
                {t.workspace.title}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {t.workspace.intro}
              </p>
            </motion.div>

            {/* Workspace Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-20 relative overflow-hidden rounded-2xl border border-border/30 shadow-md mx-auto max-w-4xl"
            >
              <img
                src={perfil.fotoEspacio}
                alt="Developer workspace setup"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Gear sections */}
            <div className="space-y-20">
              {gearByCategory.map((cat, catIdx) => (
                <motion.section
                  key={cat.id}
                  id={`ws-${cat.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px 0px" }}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                  className="scroll-mt-40"
                >
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-12 flex items-center gap-4 pb-6 border-b border-border/30">
                    {(() => {
                      const CI = categoryIcons[cat.id] || Monitor;
                      return (
                        <div className="p-3 rounded-lg bg-muted/50">
                          <CI size={28} className="text-primary" />
                        </div>
                      );
                    })()}
                    <span className="tracking-tight leading-none">{cat.label}</span>
                  </h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
                    {cat.items.map((item, i) => {
                      const Icon = gearIconMap[item.id] || Monitor;
                      return (
                        <motion.article
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.6 }}
                          className="group rounded-xl border border-border/30 bg-card p-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300"
                        >
                          <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted/40 p-2">
                              <Icon size={16} className="mx-auto text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                                {item.name}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {item.specs.map((spec, si) => (
                                  <span
                                    key={si}
                                    className="text-xs font-mono text-muted-foreground bg-muted/20 border border-border/20 py-1 px-2 rounded"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.article>
                      );
                    })}
                  </div>

                  {/* Importance Explanations */}
                  <div className="mt-12 space-y-8">
                    {cat.items.map((item) => (
                      <motion.div
                        key={`importance-${item.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-muted/10 rounded-xl p-6 border border-border/20"
                      >
                        <h5 className="text-lg font-semibold text-primary mb-3">
                          Por qué {item.name} es importante
                        </h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {importanceTexts[item.id]}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default WorkspaceSection;

