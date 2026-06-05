import React from 'react';
// IMPORTAMOS LA IMAGEN DE ISIL (Asegúrate de que el nombre sea exacto)
import isilLogo from '../assets/isil.jpg';

const Education = () => {
  return (
    <section id="education" className="mb-32">
      <h3 className="text-2xl font-bold text-mi-acento mb-12 flex items-center gap-4">
        <span className="font-mono text-mi-gris text-sm font-normal">03 //</span> FORMACIÓN ACADÉMICA
      </h3>
      
      <div className="bg-[#050505] border border-mi-borde rounded-3xl p-8 md:p-12 hover:border-mi-gris transition-colors flex flex-col md:flex-row gap-10 items-center">
        
        {/* Contenedor de la Imagen */}
        <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-2xl overflow-hidden border border-mi-borde bg-[#0a0a0a] flex items-center justify-center">
          <img src={isilLogo} alt="Instituto San Ignacio de Loyola" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
        </div>
        
        {/* Contenedor de la Información */}
        <div className="text-center md:text-left">
          <p className="font-mono text-mi-gris text-xs mb-3 uppercase tracking-widest">Educación Superior</p>
          <h4 className="text-3xl font-bold text-mi-acento mb-2 tracking-tight">Instituto San Ignacio de Loyola (ISIL)</h4>
          <p className="text-xl text-mi-gris font-light mb-6">Ingeniería de Software</p>
          
          <div className="flex gap-4 font-mono text-xs text-mi-gris flex-wrap justify-center md:justify-start">
            <span className="bg-mi-acento text-mi-fondo font-bold px-4 py-2 rounded-full">Quinto Ciclo (En curso)</span>
            <span className="bg-[#0a0a0a] border border-mi-borde px-4 py-2 rounded-full">2023 - 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;