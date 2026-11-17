import React from 'react';
import { Award, Briefcase } from 'lucide-react';

const events = [
  { type: 'cert', icon: Award, date: "Febrero 2026", title: "Maestría en Docker - Edutin Academy" },
  { type: 'cert', icon: Award, date: "Febrero 2026", title: "Windows Containers Azure DevOps - Udemy" },
  { type: 'cert', icon: Award, date: "Febrero 2026", title: "AI-900 Azure AI Fundamentals - Udemy" },
  { type: 'cert', icon: Award, date: "Enero 2026", title: "Certificación SCRUM - VmEdu" },
];

const Timeline = () => {
  return (
    <section id="certifications" className="mb-32">
      <h3 className="text-2xl font-bold text-mi-acento mb-12 flex items-center gap-4">
        <span className="font-mono text-mi-gris text-sm font-normal">04 //</span> CURSOS, CERTIFICACIONES
      </h3>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="bg-[#0a0a0a] border border-mi-borde p-6 rounded-2xl flex gap-6 items-center hover:border-mi-gris transition-colors group">
            <div className={`p-4 rounded-full ${event.type === 'cert' ? 'bg-mi-acento/10 text-mi-acento' : 'bg-[#111111] border border-mi-borde text-mi-gris group-hover:text-mi-acento transition-colors'}`}>
              <event.icon size={20} />
            </div>
            <div>
              <p className="text-mi-acento font-semibold text-lg">{event.title}</p>
              <p className="font-mono text-mi-gris text-xs tracking-widest mt-1">{event.date.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;