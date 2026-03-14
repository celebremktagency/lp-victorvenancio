"use client";

import { useEffect, useRef } from "react";

const causes = [
  {
    num: "01",
    title: "Estrogênio em queda",
    text: "Reduz a sensibilidade à insulina, favorece acúmulo de gordura abdominal e piora a qualidade do sono.",
  },
  {
    num: "02",
    title: "Progesterona desequilibrada",
    text: 'Provoca retenção hídrica, ansiedade, insônia e aquela sensação constante de que "algo não está certo".',
  },
  {
    num: "03",
    title: "Testosterona baixa",
    text: "Diminui massa muscular, libido, foco e a capacidade do corpo de queimar gordura com eficiência.",
  },
];

export default function Cause() {
  const cardsRef = useRef<HTMLDivElement>(null);

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

    const cards = cardsRef.current?.querySelectorAll(".cause-card");
    cards?.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(20px)";
      (el as HTMLElement).style.transition = "opacity .6s ease, transform .6s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cause" className="bg-navy py-[120px] px-[clamp(20px,6vw,100px)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-[900px] mx-auto text-center relative z-[2]">
        <span className="inline-block text-[10px] font-semibold tracking-[3px] uppercase text-gold-light border border-gold/40 px-4 py-1.5 mb-5">
          A causa real
        </span>

        <h2 className="font-display text-[clamp(34px,4vw,56px)] font-light text-white leading-[1.15] mb-6">
          O problema não é<br />
          <em className="italic text-gold-light">o que você come.</em><br />
          É o que seus hormônios<br />fazem com tudo isso.
        </h2>

        <p className="text-base font-light text-text-muted leading-[1.9] mb-16 max-w-[700px] mx-auto">
          A partir dos 35–40 anos, a produção de estrogênio, progesterona e testosterona começa a cair de forma progressiva. Isso{" "}
          <strong className="text-gold-pale font-medium">altera diretamente o metabolismo, a composição corporal e a disposição</strong>{" "}
          — independente de dieta ou treino. O climatério não é só fogacho: é uma mudança metabólica profunda que exige tratamento clínico especializado, não força de vontade.
        </p>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 mb-16">
          {causes.map((c) => (
            <div key={c.num} className="cause-card bg-navy-light p-10 px-[30px] text-left border-t-2 border-transparent transition-colors duration-300 hover:border-t-gold">
              <div className="font-display text-[52px] font-light text-gold/20 leading-none mb-4">{c.num}</div>
              <div className="text-sm font-semibold tracking-[1.5px] uppercase text-gold mb-3">{c.title}</div>
              <p className="text-sm font-light text-text-muted leading-[1.7]">{c.text}</p>
            </div>
          ))}
        </div>

        <a href="#method" className="inline-block border border-gold text-gold font-medium text-[13px] tracking-[2px] uppercase px-10 py-4 no-underline transition-all duration-300 hover:bg-gold hover:text-navy">
          Ver como trato isso →
        </a>
      </div>
    </section>
  );
}
