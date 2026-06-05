import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

const Header = () => {
  return (
    <nav className="p-6 md:px-12 flex justify-between items-center text-mi-acento backdrop-blur-md fixed w-full top-0 z-50 bg-mi-fondo/80 border-b border-mi-borde">
      <div className="flex flex-col">
        <span className="font-sans font-extrabold tracking-tight text-xl">JEREMY ANGELES</span>
        <span className="font-mono text-xs text-mi-gris tracking-widest uppercase">Java Full Stack // ISIL</span>
      </div>
      <div className="flex gap-4 items-center">
        <a href="https://github.com/JeremyAngeles" target="_blank" rel="noreferrer" className="text-mi-gris hover:text-mi-acento transition-colors"><Github size={20}/></a>
        <a href="https://linkedin.com/in/jeremy-angeles1329" target="_blank" rel="noreferrer" className="text-mi-gris hover:text-mi-acento transition-colors"><Linkedin size={20}/></a>
        {/* Aquí usas la URL de tu CV que me pasaste */}
        <a 
          href="https://heyzine.com/flip-book/dcdbe8a599.html#page/1" /* <- Esta es la URL que me pasaste, cámbiala si subes tu CV a otro lado */
          download="Jeremy_Angeles_R_CV_2026.pdf" 
          className="bg-mi-acento text-mi-fondo px-4 py-2 rounded-lg text-xs font-semibold hover:bg-mi-gris transition-colors flex items-center gap-1.5"
        >
          <FileText size={14} /> CV PDF
        </a>
      </div>
    </nav>
  );
};

export default Header;