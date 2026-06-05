import React from 'react';
import { Terminal, Code2, Database, Server } from 'lucide-react';

const skills = [
  { icon: Terminal, title: "Backend Core", desc: "Java (Estructuras, Algoritmos), Spring Boot, Hibernate" },
  { icon: Code2, title: "Frontend Moderno", desc: "React, JS (ES6+), TypeScript, HTML5/CSS3" },
  { icon: Database, title: "Estrategia de Datos", desc: "SQL (Modelado, Optimización consultas), Docker" },
  { icon: Server, title: "Infraestructura & DevOps", desc: "Azure DevOps (CI/CD), Git, Metodología SCRUM" }
];

const Skills = () => {
  return (
    <section id="skills" className="mb-32">
      <h3 className="text-2xl font-bold text-mi-acento mb-10 flex items-center gap-4">
        <span className="font-mono text-mi-gris text-sm font-normal">01 //</span> STACK TÉCNICO
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#0a0a0a] p-8 rounded-2xl border border-mi-borde hover:border-mi-gris transition-colors group">
            <skill.icon className="text-mi-gris group-hover:text-mi-acento transition-colors mb-6" size={28}/>
            <h4 className="text-mi-acento font-semibold mb-2">{skill.title}</h4>
            <p className="text-xs font-mono text-mi-gris leading-relaxed">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;