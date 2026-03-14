"use client";

import { MicroscopeIcon, SyringeIcon, BoltIcon, TrophyIcon } from "./Icons";

const iconStyle = { width: 28, height: 28 };

const pillars = [
  {
    icon: <MicroscopeIcon style={iconStyle} />,
    num: "Pilar 01",
    title: "Diagnóstico Hormonal Completo",
    text: "Exames aprofundados para mapear exatamente onde está o desequilíbrio — sem achismo, sem protocolo genérico.",
  },
  {
    icon: <SyringeIcon style={iconStyle} />,
    num: "Pilar 02",
    title: "Reposição com Implantes",
    text: "Pellets subcutâneos de liberação contínua — equilíbrio hormonal estável, sem os altos e baixos de adesivos ou géis.",
  },
  {
    icon: <BoltIcon style={iconStyle} />,
    num: "Pilar 03",
    title: "Protocolo Metabólico",
    text: "Estratégias clínicas para reativar o metabolismo — incluindo, quando indicado, medicações modernas como a tirzepatida.",
  },
  {
    icon: <TrophyIcon style={iconStyle} />,
    num: "Pilar 04",
    title: "Acompanhamento Contínuo",
    text: "Monitoramento periódico dos resultados para ajustar o protocolo e garantir evolução constante.",
  },
];

export default function Method() {
  return (
    <section id="method" className="method">
      <div className="method__inner">
        <div className="method__header">
          <div>
            <span className="section-tag reveal">A solução</span>
            <h2 className="method__title reveal reveal-delay-1">
              O Método<br />
              <em>EmaCrescer®</em>
            </h2>
          </div>
          <p className="method__desc reveal from-right reveal-delay-2">
            Um protocolo clínico completo que trata a <strong>causa raiz</strong> — não apenas o sintoma. Desenvolvi este método para mulheres no climatério que querem recuperar o corpo, a energia e a qualidade de vida com base em evidência científica e tratamentos de última geração.
            <br /><br />
            Não é mais uma dieta. Não é mais uma academia. É medicina hormonal e metabólica aplicada de forma individualizada ao <em>seu</em> caso.
          </p>
        </div>

        <div className="method__pillars">
          {pillars.map((p, i) => (
            <div key={i} className={`method__pillar reveal reveal-delay-${i + 1}`}>
              <span className="method__pillar-line" />
              <span className="method__pillar-icon">{p.icon}</span>
              <div className="method__pillar-num">{p.num}</div>
              <div className="method__pillar-title">{p.title}</div>
              <p className="method__pillar-text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
