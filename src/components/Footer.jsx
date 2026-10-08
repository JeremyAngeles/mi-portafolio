import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 text-center text-mi-gris font-mono text-xs border-t border-mi-borde px-6">
      {/* Tu frase personalizada */}
      <div className="border border-mi-borde p-6 rounded-2xl max-w-xl mx-auto mb-10 bg-[#050505]">
        <p className="text-base font-sans text-mi-acento font-semibold leading-relaxed">
          Diseñamos y desarrollamos soluciones digitales a medida con tecnología de vanguardia.
        </p>
        <p className="text-mi-gris font-light mt-1 flex items-center justify-center gap-1.5">
          <Phone size={14} /> Si desean hacer una página web, mi número es 960973706.
        </p>
      </div>

      <p className="text-mi-acento font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 mb-4">
        <Mail size={14} /> jeremyangeles495@gmail.com
      </p>
      
      <p>Desarrollado por Jeremy Angeles © 2026 // Ingeniería de Software ISIL</p>
    </footer>
  );
};

export default Footer;