import { Download } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { perfil } from "@/config/perfil";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {perfil.nombre.join(" ")}. {t.footer.rights}
        </p>
        <div className="flex items-center gap-6">
          {perfil.cv && (
          <a
            href={perfil.cv}
            download={perfil.nombreArchivoCV}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Download size={14} />
            {t.footer.downloadCV}
          </a>
          )}
          <div className="flex flex-col gap-1">
            <p className="text-xs text-muted-foreground">{t.footer.builtWith}</p>
            <p className="text-xs text-muted-foreground">
              Plantilla por{" "}
              <a href="https://github.com/ZeroFuann-FS/plantilla-portafolio-react" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">ZeroFuann</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
