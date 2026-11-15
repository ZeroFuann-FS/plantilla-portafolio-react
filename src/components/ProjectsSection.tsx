import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { perfil } from "@/config/perfil";

const projectMeta = perfil.proyectos;

const ProjectsSection = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
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
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">{t.projects.label}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t.projects.title}</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">{t.projects.description}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projectMeta.map((project, i) => {
            const content = t.projects.items[i];
            if (!content) return null;
            return (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                onClick={() => setSelectedIdx(i)}
                className="group cursor-pointer rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/60 hover:glow-border"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {content.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{content.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/70 backdrop-blur-md"
              onClick={() => setSelectedIdx(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6" onClick={() => setSelectedIdx(null)}>
              <motion.div
                layoutId={`project-${projectMeta[selectedIdx].id}`}
                className="relative w-full max-w-lg rounded-lg border border-border bg-card p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedIdx(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
                <h3 className="text-2xl font-bold text-foreground">{t.projects.items[selectedIdx].title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {projectMeta[selectedIdx].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{t.projects.items[selectedIdx].details}</p>
                <a
                  href={projectMeta[selectedIdx].link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-cyan transition-all duration-300 hover:glow-cyan-strong"
                >
                  {t.projects.liveDemo}
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
