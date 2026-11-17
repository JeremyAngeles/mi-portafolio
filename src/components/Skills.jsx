import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Database, Server } from 'lucide-react';

const skills = [
  { 
    icon: Terminal, 
    title: "Backend & Arquitectura", 
    desc: "Java (Spring Boot), Node.js, Microservicios, APIs RESTful, Arquitectura Escalable." 
  },
  { 
    icon: Code2, 
    title: "Frontend Moderno", 
    desc: "React, JavaScript (ES6+), Tailwind CSS, Framer Motion, Interfaces Dinámicas." 
  },
  { 
    icon: Database, 
    title: "Bases de Datos", 
    desc: "MySQL, PostgreSQL, SQL Server, Modelado E-R, Optimización de Consultas." 
  },
  { 
    icon: Server, 
    title: "DevOps & Automatización", 
    desc: "Docker, n8n (Workflows), Git/GitHub, Azure, Vercel, Metodología SCRUM." 
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="mb-32">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="text-2xl font-bold text-white mb-10 flex items-center gap-4"
      >
        <span className="font-mono text-mi-acento text-sm font-normal bg-mi-acento/10 px-3 py-1 rounded-full">01</span> STACK TÉCNICO
      </motion.h3>
      
      <motion.div 
        variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div 
            variants={itemVariants} key={index} 
            className="bg-[#050505] p-8 rounded-3xl border border-mi-borde hover:border-mi-acento/50 hover:bg-[#0a0a0a] transition-all duration-300 group shadow-lg hover:-translate-y-2 cursor-default flex flex-col h-full"
          >
            <div className="w-14 h-14 bg-[#111] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-mi-acento/10 transition-colors border border-mi-borde group-hover:border-mi-acento/30">
              <skill.icon className="text-mi-gris group-hover:text-mi-acento transition-colors" size={28}/>
            </div>
            <h4 className="text-white font-bold mb-3 text-lg">{skill.title}</h4>
            <p className="text-sm font-light text-mi-gris leading-relaxed flex-grow">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;