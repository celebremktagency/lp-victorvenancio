"use client";

import { useEffect, useRef } from "react";
import { MicroscopeIcon, SyringeIcon, BoltIcon, TrophyIcon } from "./Icons";

const pillars = [
  {
    icon: <MicroscopeIcon className="w-7 h-7 text-gold" />,
    num: "Pilar 01",
    title: "Diagnóstico Hormonal Completo",
    text: "Exames aprofundados para mapear exatamente onde está o desequilíbrio — sem achismo, sem protocolo genérico.",
  },
  {
    icon: <SyringeIcon className="w-7 h-7 text-gold" />,
    num: "Pilar 02",
    title: "Reposição com Implantes",
    text: "Pellets subcutâneos de liberação contínua — equilíbrio hormonal estável, sem os altos e baixos de adesivos ou géis.",
  },
  {
    icon: <BoltIcon className="w-7 h-7 text-gold" />,
    num: "Pilar 03",
    title: "Protocolo Metabólico",
    text: "Estratégias clínicas para reativar o metabolismo — incluindo, quando indicado, medicações modernas como a tirzepatida.",
  },
  {
    icon: <TrophyIcon className="w-7 h-7 text-gold" />,
    num: "Pilar 04",
    title: "Acompanhamento Contínuo",
    text: "Monitoramento periódico dos resultados para ajustar o protocolo e garantir evolução constante.",
  },
];

export default function Method() {
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = pillarsRef.current?.querySelectorAll(".pillar");
    els?.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(20px)";
      (el as HTMLElement).style.transition = "opacity .6s ease, transform .6s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="method" className="bg-cream py-[120px] px-[clamp(20px,6vw,100px)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <span className="inline-block text-[10px] font-semibold tracking-[3px] uppercase text-gold border border-gold px-4 py-1.5 mb-5">
              A solução
            </span>
            <h2 className="font-display text-[clamp(40px,4.5vw,68px)] font-light text-navy leading-[1.08]">
              O Método<br />
              <em className="italic text-gold">EmaCrescer®</em>
            </h2>
          </div>
          <p className="text-[15px] font-light text-[#4a5568] leading-[1.85]">
            Um protocolo clínico completo que trata a <strong className="text-navy font-semibold">causa raiz</strong> — não apenas o sintoma. Desenvolvido para mulheres no climatério que querem recuperar o corpo, a energia e a qualidade de vida com base em evidência científica e tratamentos de última geração.
            <br /><br />
            Não é mais uma dieta. Não é mais uma academia. É medicina hormonal e metabólica aplicada de forma individualizada ao <em>seu</em> caso.
          </p>
        </div>

        <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-[#e5ddd0]">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="pillar group bg-white p-10 px-7 transition-transform duration-300 cursor-default relative overflow-hidden hover:-translate-y-1"
            >
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gold scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
              <span className="block mb-5">{p.icon}</span>
              <div className="font-display text-[13px] font-semibold tracking-[3px] text-gold uppercase mb-2.5">{p.num}</div>
              <div className="text-base font-semibold text-navy mb-3 leading-[1.3]">{p.title}</div>
              <p className="text-[13px] font-light text-[#6b7280] leading-[1.7]">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
