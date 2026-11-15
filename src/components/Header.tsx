import { perfil } from "@/config/perfil";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Github, Linkedin, Mail, Globe } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "@/i18n/LanguageContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { lang, t, toggleLang } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.skills, href: "/skills" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.workspace, href: "/workspace" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
              {perfil.logo[0]}<span className="text-primary">{perfil.logo[1]}</span>
            </Link>
            <Link
              to="/"
              className="hidden sm:flex items-center justify-center h-8 w-8 rounded-md border border-border/50 text-sm font-semibold text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors duration-300 bg-muted/10"
              title="Home"
            >
              /
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === l.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={perfil.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href={perfil.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${perfil.correo}`} className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
            </a>

            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors duration-300 hover:text-primary hover:border-primary/60"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              {lang === "es" ? "EN" : "ES"}
            </button>

            <button
              onClick={toggle}
              className="relative ml-1 flex h-8 w-14 items-center rounded-full border border-border bg-secondary p-1 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              <motion.div
                className="flex h-6 w-6 items-center justify-center rounded-full bg-primary"
                animate={{ x: theme === "light" ? 22 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {theme === "dark" ? (
                  <Moon size={12} className="text-primary-foreground" />
                ) : (
                  <Sun size={12} className="text-primary-foreground" />
                )}
              </motion.div>
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-foreground"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 border-l border-border bg-card p-8"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-5 right-5 text-foreground"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <nav className="mt-16 flex flex-col gap-6">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    location.pathname === "/" ? "text-primary" : "text-foreground"
                  }`}
                  title="Home"
                >
                  /
                </Link>
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      location.pathname === l.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-10 flex items-center gap-4">
                <a href={perfil.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href={perfil.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${perfil.correo}`} className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={20} />
                </a>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary hover:border-primary/60"
                >
                  <Globe size={14} />
                  {lang === "es" ? "EN" : "ES"}
                </button>
                <button
                  onClick={toggle}
                  className="flex h-8 w-14 items-center rounded-full border border-border bg-secondary p-1 transition-colors duration-300"
                  aria-label="Toggle theme"
                >
                  <motion.div
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-primary"
                    animate={{ x: theme === "light" ? 22 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {theme === "dark" ? <Moon size={12} className="text-primary-foreground" /> : <Sun size={12} className="text-primary-foreground" />}
                  </motion.div>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
