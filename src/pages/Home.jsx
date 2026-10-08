import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, ExternalLink, LayoutDashboard, Clock, 
  Layout, Store, CalendarCheck, Bot, ChevronRight 
} from 'lucide-react'; 
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Education from '../components/Education';
import Extras from '../components/Extras';

// 1. IMPORTAMOS LOGOS
import logoKaren from '../assets/logo-karen.png';
import logoJhon from '../assets/logo-jhon.png';
import logomiderma from '../assets/logo-miderma.png'; 
import logoOrbital from '../assets/logo-orbital.png'; 
import logoSalva from '../assets/logo-salva.png';

// 2. IMPORTAMOS PREVIEWS 
import previewKaren from '../assets/preview-karen.png';
import previewConsultorio from '../assets/preview-consultorio.png';
import previewMiderma from '../assets/preview-miderma.png'; 
import previewOrbital from '../assets/preview-orbital.png'; 
import previewSalvar from '../assets/preview-salvar.png';

// 3. TUS PROYECTOS ACTUALIZADOS
const projects = [
  {
    logo: logoKaren, 
    preview: previewKaren,
    title: "E-Health Dermatología Dra. Karen Ángeles",
    description: "Digitalización de consultorio médico mediante SPA. Interfaz premium con animaciones fluidas, hooks avanzados React y optimización para captación de pacientes vía WhatsApp. 100% responsive mobile-first.",
    tags: ["React", "JS (ES6+)", "Tailwind", "Framer Motion"],
    url: "https://karenangelesderma.com/",
    status: "Terminado"
  },
  {
    logo: logomiderma, 
    preview: previewMiderma, 
    title: "Miderma // Clínica Dermatológica",
    description: "Diseño y desarrollo de una plataforma web moderna para clínica dermatológica. Orientada a resaltar tratamientos especializados, optimizar el contacto con pacientes y brindar una experiencia de navegación fluida, profesional y confiable.",
    tags: ["React", "Node.js", "MySQL", "Tailwind"],
    url: "https://midermacentrodelapiel.pe/", 
    status: "Terminado"
  },
  {
    logo: logoOrbital, 
    preview: previewOrbital, 
    title: "Orbital Salud // E-commerce & Salud",
    description: "Desarrollo de plataforma web orientada a la venta de productos médicos. Actualmente en fase de integración con Salud Tools para automatizar el agendamiento de citas médicas, unificando comercio electrónico y gestión de pacientes en un solo ecosistema moderno.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    url: "https://www.orbitalsalud.pe/",
    status: "En proceso"
  },
  {
    logo: logoSalva, 
    preview: previewSalvar, 
    title: "Salvar Dermoplástica", 
    description: "Sitio web especializado en servicios dermoplásticos. Diseño estético, limpio y moderno con un fuerte enfoque en la experiencia del paciente y conversión.",
    tags: ["React", "Frontend", "Vercel"],
    url: "https://salva-derma-frontend.vercel.app/",
    status: "En proceso"
  },
  {
    logo: logoJhon, 
    preview: previewConsultorio,
    title: "Consultorio Médico 'Los Angeles Redentores'",
    description: "Consultorio de medicina integral. Desarrollo Frontend con React para visualización moderna de servicios médicos y optimización de experiencia de usuario.",
    tags: ["React", "JavaScript", "Vercel"],
    url: "https://web-consultorio-medico.vercel.app/",
    status: "En proceso"
  }
];

// DATOS DE LOS SERVICIOS (Tarjetas)
const servicesList = [
  {
    icon: Layout,
    title: "Landing Pages & Webs Corporativas",
    desc: "Diseño de alto impacto ideal para presentar tu empresa, portafolio o captar leads (clientes potenciales).",
    features: ["Diseño 100% Personalizado", "Alta velocidad de carga", "Optimizado para celulares"],
    wspLink: "https://wa.me/51960973706?text=Hola%20Jeremy,%20quiero%20cotizar%20una%20Landing%20Page%20corporativa."
  },
  {
    icon: Store,
    title: "Catálogo & Ventas por WhatsApp",
    desc: "Muestra tus productos en una tienda virtual y recibe los pedidos directamente a tu WhatsApp, listo para cerrar la venta.",
    features: ["Catálogo dinámico de productos", "Carrito de compras integrado", "Botón de pedido directo a WhatsApp"],
    wspLink: "https://wa.me/51960973706?text=Hola%20Jeremy,%20quiero%20cotizar%20una%20Web%20con%20cat%C3%A1logo%20y%20ventas%20por%20WhatsApp."
  },
  {
    icon: CalendarCheck,
    title: "Web Profesional con Agendamiento",
    desc: "Ideal para clínicas, consultorios o asesores. Permite a tus clientes reservar citas directamente desde la página.",
    features: ["Sistema de reservas automatizado", "Gestión de horarios", "Panel de administración"],
    wspLink: "https://wa.me/51960973706?text=Hola%20Jeremy,%20quiero%20cotizar%20una%20Web%20Profesional%20con%20sistema%20de%20citas."
  },
  {
    icon: Bot,
    title: "Chatbots & Automatizaciones",
    desc: "Ahorra tiempo respondiendo mensajes. Chatbots para WhatsApp conectados a Google Calendar, Excel, etc.",
    features: ["Respuestas 24/7 a clientes", "Conexión con Google Calender/Google Sheets", "Registro automático de datos"],
    wspLink: "https://wa.me/51960973706?text=Hola%20Jeremy,%20quiero%20cotizar%20un%20Chatbot%20y%20automatizaciones."
  }
];

// Animaciones base
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Home = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-32 overflow-hidden">
      
      {/* SECCIÓN HERO */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-32 pt-16 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-mi-acento opacity-[0.03] blur-[100px] -z-10 rounded-full"></div>

        <div className="inline-block border border-mi-borde rounded-full px-4 py-1 mb-6 bg-[#0a0a0a]">
          <p className="font-mono text-mi-gris text-xs tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-mi-acento animate-pulse"></span>
            Ingeniero de Software // ISIL //
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight">
          Transformando ideas en <br />
          <span className="text-mi-acento">Soluciones Digitales.</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed mb-10 text-mi-gris font-light mt-8">
          Soy <span className="text-white font-semibold">Jeremy Angeles</span>. Especializado en diseñar interfaces dinámicas y sistemas robustos. Ayudo a las empresas a automatizar procesos, captar clientes y escalar mediante tecnología web moderna.
        </p>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/51960973706" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-3 bg-mi-acento text-mi-fondo px-8 py-4 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
        >
          <MessageSquare size={18} /> Hablemos de tu proyecto
        </motion.a>
      </motion.section>

      {/* COMPONENTE SKILLS */}
      <Skills />

      {/* --- NUEVA SECCIÓN DE SERVICIOS (TARJETAS) --- */}
      <section id="services" className="mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            ¿Buscando digitalizar o escalar tu negocio?
          </h3>
          <p className="text-mi-gris text-lg font-light">
            Soluciones a medida para optimizar tu tiempo y aumentar tus ventas.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {servicesList.map((service, index) => (
            <motion.div 
              variants={fadeInUp} key={index} 
              className="group relative bg-gradient-to-br from-[#050505] to-[#0a0a0a] border border-mi-borde rounded-[2rem] p-8 hover:border-mi-acento/50 transition-all duration-500 overflow-hidden flex flex-col justify-between h-full"
            >
              {/* Brillo de fondo sutil */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-mi-acento opacity-0 group-hover:opacity-[0.03] blur-3xl rounded-full transition-opacity duration-700"></div>

              <div>
                <div className="w-14 h-14 bg-[#111] rounded-2xl flex items-center justify-center mb-6 border border-mi-borde group-hover:border-mi-acento/30 transition-colors">
                  <service.icon className="text-mi-gris group-hover:text-mi-acento transition-colors" size={28} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{service.title}</h4>
                <p className="text-mi-gris font-light text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-mono text-mi-gris">
                      <ChevronRight size={14} className="text-mi-acento shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={service.wspLink} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full inline-flex justify-center items-center gap-2 bg-white text-black py-3.5 rounded-xl font-bold text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
              >
                Cotizar plan <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* COMPONENTE PROYECTOS */}
      <section id="projects" className="mb-32">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-12 flex items-center gap-4"
        >
          <span className="font-mono text-mi-acento text-sm font-normal bg-mi-acento/10 px-3 py-1 rounded-full">02</span> 
          TRABAJOS DESTACADOS
        </motion.h3>
        
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          {projects.map((proj, index) => (
            <motion.div 
              variants={fadeInUp} key={index} 
              className="group border border-mi-borde rounded-[2rem] p-8 md:p-12 hover:border-mi-acento/50 transition-colors bg-[#030303] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-mi-acento/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                
                {/* Textos del proyecto */}
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    {proj.logo && <img src={proj.logo} alt="Logo" className="h-10 w-10 object-contain" />}
                    <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">{proj.title}</h4>
                  </div>
                  
                  {/* Badge de Estado */}
                  <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mi-borde bg-[#0a0a0a] text-xs font-mono">
                    {proj.status === "Terminado" ? (
                      <><span className="w-2 h-2 rounded-full bg-green-500"></span><span className="text-green-400">{proj.status}</span></>
                    ) : (
                      <><Clock size={12} className="text-yellow-500"/><span className="text-yellow-400">{proj.status}</span></>
                    )}
                  </div>

                  <p className="text-base text-mi-gris mb-8 leading-relaxed font-light">{proj.description}</p>
                  <div className="flex gap-2 font-mono text-xs text-mi-gris mb-8 flex-wrap">
                    {proj.tags.map(t => (
                      <span key={t} className="bg-[#111] border border-mi-borde px-4 py-1.5 rounded-full group-hover:border-mi-gris transition-colors">{t}</span>
                    ))}
                  </div>
                  
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href={proj.url} target="_blank" rel="noreferrer" 
                    className="inline-flex items-center gap-2 text-mi-acento font-bold hover:text-white transition-colors"
                  >
                    Visitar Proyecto <ExternalLink size={18} />
                  </motion.a>
                </div>

                {/* Previsualización */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`bg-[#0a0a0a] rounded-3xl h-72 md:h-80 border border-mi-borde flex items-center justify-center overflow-hidden group-hover:border-mi-acento/30 transition-all duration-500 relative shadow-xl ${index % 2 !== 0 ? 'md:order-1' : ''}`}
                >
                   {proj.preview ? (
                     <img src={proj.preview} alt={`Preview de ${proj.title}`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                   ) : (
                     <div className="flex flex-col items-center text-mi-borde group-hover:text-mi-acento/70 transition-colors duration-500">
                        <LayoutDashboard size={48} className="mb-4 opacity-50" />
                        <span className="font-mono text-sm uppercase tracking-widest text-mi-gris">Vista Previa en Construcción</span>
                     </div>
                   )}
                </motion.div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Education />
      <Timeline />
      <Extras />

    </main>
  );
};

export default Home;