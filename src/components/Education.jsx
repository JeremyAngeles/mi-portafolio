import React from 'react';
import { motion } from 'framer-motion';
import isilLogo from '../assets/isil.jpg'; // Asegúrate de que exista

const Education = () => {
  return (
    <section id="education" className="mb-32">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="text-2xl font-bold text-white mb-12 flex items-center gap-4"
      >
        <span className="font-mono text-mi-acento text-sm font-normal bg-mi-acento/10 px-3 py-1 rounded-full">03</span> FORMACIÓN ACADÉMICA
      </motion.h3>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="bg-[#050505] border border-mi-borde rounded-[2rem] p-8 md:p-12 hover:border-mi-acento/50 transition-colors flex flex-col md:flex-row gap-10 items-center group shadow-xl hover:shadow-2xl"
      >
        {/* Contenedor de la Imagen */}
        <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-3xl overflow-hidden border border-mi-borde bg-[#0a0a0a] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <img src={isilLogo} alt="Instituto San Ignacio de Loyola" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>
        
        {/* Contenedor de la Información */}
        <div className="text-center md:text-left">
          <p className="font-mono text-mi-acento text-xs mb-3 uppercase tracking-widest font-bold">Educación Superior</p>
          <h4 className="text-3xl font-bold text-white mb-2 tracking-tight">Instituto San Ignacio de Loyola (ISIL)</h4>
          <p className="text-xl text-mi-gris font-light mb-6">Ingeniería de Software</p>
          
          <div className="flex gap-3 font-mono text-xs text-mi-gris flex-wrap justify-center md:justify-start">
            <span className="bg-white text-black font-bold px-5 py-2.5 rounded-full">5to Ciclo (Cursando)</span>
            <span className="bg-[#111] border border-mi-borde px-5 py-2.5 rounded-full">2023 - 2026</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Education;