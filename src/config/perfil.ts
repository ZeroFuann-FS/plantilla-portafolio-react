/* =========================================================
   TUS DATOS — nombre, foto, enlaces y proyectos.
   Los textos en español e inglés están en src/i18n/translations.ts
   ========================================================= */
import avatar from "@/assets/avatar.svg";
import workspace from "@/assets/workspace.svg";
import laptop from "@/assets/gear/laptop.svg";
import keyboard from "@/assets/gear/keyboard.svg";
import mouse from "@/assets/gear/mouse.svg";
import monitor from "@/assets/gear/monitor.svg";
import speaker from "@/assets/gear/speaker.svg";

export const perfil = {
  // Nombre grande del inicio (dos líneas) y alias debajo.
  nombre: ["Zero", "Fuann"],
  alias: "ZeroFuann",
  // Logo del menú: la segunda parte va en color de acento.
  logo: ["Zero", "Fuann"],
  // Foto: reemplaza src/assets/avatar.svg o importa tu propia imagen arriba.
  foto: avatar,
  fotoEspacio: workspace,

  // CV: pon tu PDF en la carpeta public/ (ej. public/cv.pdf) y escribe "/cv.pdf".
  // Déjalo vacío para ocultar los botones de descarga.
  cv: "",
  nombreArchivoCV: "CV_ZeroFuann.pdf",

  correo: "tu@correo.com",
  telefono: "", // ej. "+52 55 0000 0000"; vacío = no se muestra
  github: "https://github.com/ZeroFuann-FS",
  linkedin: "https://www.linkedin.com/in/tu-usuario",

  // Proyectos: el título y la descripción de cada uno están en translations.ts (mismo orden).
  proyectos: [
    { id: 1, tags: ["React", "Node.js", "PostgreSQL"], link: "#" },
    { id: 2, tags: ["TypeScript", "React", "Supabase"], link: "#" },
    { id: 3, tags: ["HTML", "CSS", "JavaScript"], link: "#" },
    { id: 4, tags: ["Vue", "Laravel", "MySQL"], link: "#" },
  ],

  // Imágenes del equipo de trabajo (la clave coincide con el id del equipo en translations.ts).
  equipo: { laptop, keyboard, mouse, monitor, speaker } as Record<string, string>,
};
