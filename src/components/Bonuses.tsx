"use client";

import { useEffect, useRef } from "react";
import { DnaIcon, ClipboardIcon, MessageIcon, WhatsAppIcon, ArrowRightIcon } from "./Icons";

const WHATSAPP_LINK = "https://wa.me/5531991467509?text=Olá%20Dr.%20Victor,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20para%20avaliação%20hormonal%20e%20metabólica.";

const bonuses = [
  {
    num: "01",
    icon: <DnaIcon className="w-7 h-7 text-gold" />,
    title: "Laudo Hormonal Interpretado",
    text: "Seus exames explicados com clareza — sem jargão — para você entender exatamente o que está acontecendo no seu corpo.",
  },
  {
    num: "02",
    icon: <ClipboardIcon className="w-7 h-7 text-gold" />,
    title: "Protocolo Alimentar Estratégico",
    text: "Orientações nutricionais integradas ao seu tratamento hormonal — sem dieta genérica, sem lista de alimentos proibidos.",
  },
  {
    num: "03",
    icon: <MessageIcon className="w-7 h-7 text-gold" />,
    title: "Canal Direto com a Clínica",
    text: "Acesso prioritário para dúvidas, ajustes e acompanhamento entre as consultas — sem fila, sem demora, sem abandono.",
  },
];

export default function Bonuses() {
  const gridRef = useRef<HTMLDivElement>(null);

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

    const cards = gridRef.current?.querySelectorAll(".bonus-card");
    cards?.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(20px)";
      (el as HTMLElement).style.transition = "opacity .6s ease, transform .6s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="bonuses" className="bg-navy py-[120px] px-[clamp(20px,6vw,100px)]">
      <div className="max-w-[1000px] mx-auto text-center">
        <span className="inline-block text-[10px] font-semibold tracking-[3px] uppercase text-gold-light border border-gold/40 px-4 py-1.5 mb-5">
          Inclusos no tratamento
        </span>

        <h2 className="font-display text-[clamp(34px,4vw,56px)] font-light text-white mb-4">
          Tudo o que você<br />
          <em className="italic text-gold-light">recebe ao iniciar</em>
        </h2>

        <p className="text-[13px] text-text-muted mb-[60px] tracking-[1px] uppercase">
          Além do protocolo clínico personalizado
        </p>

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 mb-16">
          {bonuses.map((b) => (
            <div key={b.num} className="bonus-card bg-navy-light p-10 px-7 text-left relative">
              <div className="absolute top-5 right-6 font-display text-[64px] font-bold text-gold/[0.06] leading-none">{b.num}</div>
              <span className="block mb-5">{b.icon}</span>
              <div className="text-sm font-semibold tracking-[1px] text-gold mb-3 uppercase">{b.title}</div>
              <p className="text-sm font-light text-text-muted leading-[1.7]">{b.text}</p>
            </div>
          ))}
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-gradient-to-br from-gold to-gold-light text-navy font-semibold text-[13px] tracking-[2px] uppercase px-12 py-[18px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,169,110,0.4)] relative overflow-hidden"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Garantir minha consulta
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          <span className="absolute inset-0 bg-white/15 -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
        </a>
      </div>
    </section>
  );
}
