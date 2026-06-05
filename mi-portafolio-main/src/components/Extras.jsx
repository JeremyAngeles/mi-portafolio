import React from 'react';
import { Globe, UserCheck, ExternalLink } from 'lucide-react';

const Extras = () => {
  return (
    // LE QUITAMOS EL mb-32 PARA ACERCARLO AL FOOTER
    <div className="grid md:grid-cols-2 gap-12">
      {/* SECCIÓN IDIOMAS */}
      <section id="languages">
        <h3 className="text-2xl font-bold text-mi-acento mb-8 flex items-center gap-4">
          <span className="font-mono text-mi-gris text-sm font-normal">05 //</span> IDIOMAS
        </h3>
        <div className="bg-[#050505] border border-mi-borde rounded-3xl p-8 space-y-4 h-full">
          <div className="flex items-center justify-between border-b border-mi-borde pb-4">
            <div className="flex items-center gap-3 text-mi-acento font-semibold"><Globe size={18} className="text-mi-gris"/> Español</div>
            <span className="font-mono text-xs text-mi-gris bg-[#0a0a0a] px-3 py-1 rounded-full border border-mi-borde">Nativo</span>
          </div>
          <div className="flex items-center justify-between border-b border-mi-borde pb-4">
            <div className="flex items-center gap-3 text-mi-acento font-semibold"><Globe size={18} className="text-mi-gris"/> Inglés</div>
            <span className="font-mono text-xs text-mi-gris bg-[#0a0a0a] px-3 py-1 rounded-full border border-mi-borde">Básico</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-mi-acento font-semibold"><Globe size={18} className="text-mi-gris"/> Japonés</div>
            <span className="font-mono text-xs text-mi-gris bg-[#0a0a0a] px-3 py-1 rounded-full border border-mi-borde">Básico</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN REFERENCIAS */}
      <section id="references">
        <h3 className="text-2xl font-bold text-mi-acento mb-8 flex items-center gap-4">
          <span className="font-mono text-mi-gris text-sm font-normal">06 //</span> REFERENCIAS
        </h3>
        <div className="bg-[#050505] border border-mi-borde rounded-3xl p-8 hover:border-mi-gris transition-colors group h-full">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-[#0a0a0a] border border-mi-borde text-mi-gris group-hover:text-mi-acento transition-colors mt-1">
              <UserCheck size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-mi-acento mb-1">Ing. Celso Guzmán Díaz</h4>
              <p className="text-sm text-mi-gris mb-5 leading-relaxed">Especialista en Infraestructura TI y Adm. de Sistemas <br/> Docente en ISIL</p>
              
              <div className="space-y-3 font-mono text-xs">
                <p className="flex items-center gap-2 text-mi-gris"><span className="text-mi-acento font-bold">TEL:</span> +51 950 014 541</p>
                <a href="https://linkedin.com/in/elcegu" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-mi-gris hover:text-mi-acento transition-colors">
                  <span className="text-mi-acento font-bold">IN:</span> linkedin.com/in/elcegu <ExternalLink size={12}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Extras;