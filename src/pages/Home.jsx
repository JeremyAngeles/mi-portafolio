import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ExternalLink, LayoutDashboard } from 'lucide-react'; 
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Education from '../components/Education';
import Extras from '../components/Extras'; // <-- NUEVO

// 1. IMPORTAMOS LOGOS
import logoMapache from '../assets/mapache_icon.png';
import logoKaren from '../assets/logo-karen.png';
import logoJhon from '../assets/logo-jhon.png';

// 2. IMPORTAMOS PREVIEWS
import previewBookscout from '../assets/preview-bookscout.png';
import previewKaren from '../assets/preview-karen.png';
import previewConsultorio from '../assets/preview-consultorio.png';

// 3. TUS PROYECTOS COMPLETOS CORREGIDOS
const projects = [
  {
    logo: logoMapache, 
    preview: previewBookscout,
    title: "BookTrack // Mi Biblioteca Personal",
    description: "Plataforma integral para seguimiento de hábitos de lectura. Incluye monitoreo de presupuestos y comparador de precios. Desarrollé backend MVC robusto y contenedorice con Docker para alta disponibilidad.",
    tags: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
    url: "https://booktrack-frontend-beta.vercel.app"
  },
  {
    logo: logoKaren, 
    preview: previewKaren,
    title: "E-Health Dermatología Dra. Karen Ángeles",
    description: "Digitalización de consultorio médico mediante SPA. Interfaz premium con animaciones fluidas, hooks avanzados React y optimización para captación de pacientes vía WhatsApp. 100% responsive mobile-first.",
    tags: ["React", "JS (ES6+)", "Tailwind", "Framer Motion"],
    url: "https://dra-karen-angeles.vercel.app/" 
  },
  {
    logo: null, 
    preview: null, 
    title: "Sistema de Gestión de Productos y Ventas",
    description: "Automatización de inventario eliminando el 100% de discrepancias de stock. Arquitectura backend transaccional en Spring Boot para garantizar consistencia, con almacenamiento normalizado en MySQL y frontend reactivo.",
    tags: ["Java", "Spring Boot", "Angular", "MySQL", "TypeScript"],
    url: "#" 
  },
  {
    logo: logoJhon, 
    preview: previewConsultorio,
    title: "Consultorio Médico 'Los Angeles Redentores'",
    description: "Consultorio de medicina integral. Desarrollo Frontend con React para visualización moderna de servicios médicos y optimización de experiencia de usuario.",
    tags: ["React", "JavaScript", "Vercel"],
    url: "https://consultorio-los-angeles.vercel.app/" 
  }
];

const Home = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-32">
      
      {/* SECCIÓN HERO */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-32 pt-16"
      >
        <div className="inline-block border border-mi-borde rounded-full px-4 py-1 mb-6">
          <p className="font-mono text-mi-gris text-xs tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-mi-acento animate-pulse"></span>
            Java Full Stack Trainee // ISIL // Qto Ciclo
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-mi-acento mb-4 tracking-tight leading-tight">
          Desarrollador Java <br />
          <span className="text-mi-gris">Full Stack.</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed mb-10 text-mi-gris font-light mt-8">
          Jeremy Angeles. Sólida capacidad analítica para resolución de problemas lógicos y técnicos. Especializado en diseño de <span className="text-mi-acento font-semibold">APIs robustas con Spring Boot</span> y <span className="text-mi-acento font-semibold">interfaces dinámicas escalables con React</span>. Transformo procesos manuales ineficientes en soluciones digitales que garantizan la integridad de datos y optimización de recursos.
        </p>
        
        {/* BOTÓN ACTUALIZADO CON TU NÚMERO */}
        <a href="https://wa.me/51960973706" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-mi-acento text-mi-fondo px-8 py-4 rounded-lg font-semibold text-sm hover:bg-mi-gris transition-all duration-300">
          <MessageSquare size={18} /> Contactar Ahora
        </a>
      </motion.section>

      {/* COMPONENTE SKILLS */}
      <Skills />

      {/* --- NUEVO: SECCIÓN CALL TO ACTION (VENTA DE SERVICIOS) --- */}
      <section className="mb-32">
        <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-mi-borde rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10 hover:border-mi-gris transition-colors shadow-2xl">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold text-mi-acento mb-4 tracking-tight">¿Buscando digitalizar o escalar tu negocio?</h3>
            <p className="text-mi-gris text-lg font-light leading-relaxed">
              Desarrollo desde <span className="text-mi-acento font-semibold">páginas web corporativas y e-commerce</span> para vender tus productos, hasta <span className="text-mi-acento font-semibold">sistemas de gestión a medida</span> para optimizar tus inventarios y procesos internos.
            </p>
          </div>
          <div className="shrink-0">
            <a href="https://wa.me/51960973706?text=Hola%20Jeremy,%20quiero%20cotizar%20un%20proyecto%20web" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#ffffff] text-[#000000] px-8 py-4 rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Cotizar Proyecto <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* COMPONENTE PROYECTOS */}
      <section id="projects" className="mb-32">
        <h3 className="text-2xl font-bold text-mi-acento mb-12 flex items-center gap-4">
          <span className="font-mono text-mi-gris text-sm font-normal">02 //</span> TRABAJO DESTACADO
        </h3>
        <div className="space-y-16">
          {projects.map((proj, index) => (
            <div key={index} className="group border border-mi-borde rounded-3xl p-8 md:p-12 hover:border-mi-gris transition-colors bg-[#050505]">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* Textos del proyecto */}
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    {proj.logo && <img src={proj.logo} alt="Logo" className="h-10 w-10 object-contain" />}
                    <h4 className="text-3xl font-bold text-mi-acento tracking-tight leading-tight">{proj.title}</h4>
                  </div>
                  <p className="text-base text-mi-gris mb-8 leading-relaxed font-light">{proj.description}</p>
                  <div className="flex gap-3 font-mono text-xs text-mi-gris mb-8 flex-wrap">
                    {proj.tags.map(t => (
                      <span key={t} className="border border-mi-borde px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  {proj.url !== "#" && (
                    <a href={proj.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-mi-acento font-semibold hover:opacity-70 transition-opacity">
                      Visitar Proyecto <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                {/* Previsualización */}
                <div className={`bg-[#0a0a0a] rounded-2xl h-64 border border-mi-borde flex items-center justify-center overflow-hidden group-hover:border-mi-gris transition-colors relative ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                   {proj.preview ? (
                     <img src={proj.preview} alt={`Preview de ${proj.title}`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                   ) : (
                     <div className="flex flex-col items-center text-mi-borde group-hover:text-mi-gris transition-colors duration-500">
                        <LayoutDashboard size={48} className="mb-4 opacity-50" />
                        <span className="font-mono text-sm uppercase tracking-widest">Sistema Interno</span>
                     </div>
                   )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1. COMPONENTE EDUCACIÓN (ISIL) */}
      <Education />

      {/* 2. COMPONENTE TIMELINE (Cursos y Experiencia) */}
      <Timeline />

      {/* 3. COMPONENTE EXTRAS (Idiomas y Referencias) <-- NUEVO */}
      <Extras />

    </main>
  );
};

export default Home;