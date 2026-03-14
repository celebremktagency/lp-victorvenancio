"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Tenho mais de 35 anos mas ainda não entrei na menopausa. Isso é indicado para mim?",
    a: "O climatério começa muito antes da menopausa — é um processo gradual que pode iniciar a partir dos 35 anos, com queda progressiva dos hormônios. Se você está sentindo mudanças no corpo, no humor, no peso ou na energia, vale fazer a avaliação. Não é preciso esperar a menstruação parar.",
  },
  {
    q: "O implante hormonal dói? Como funciona na prática?",
    a: "O pellet é um procedimento ambulatorial rápido, feito com anestesia local. Um pequeno cilindro com hormônios bioidênticos é inserido sob a pele — geralmente na região glútea. O desconforto é mínimo, e a liberação é contínua e estável por meses, sem os picos e vales de adesivos ou géis.",
  },
  {
    q: "Quais resultados posso esperar e em quanto tempo?",
    a: "Cada caso é único — por isso a primeira consulta é tão importante. De forma geral, pacientes relatam melhora de energia e sono nas primeiras semanas, e resultados mais expressivos em composição corporal e bem-estar ao longo dos primeiros 2 a 4 meses. O objetivo não é velocidade: é resultado duradouro.",
  },
  {
    q: "O tratamento é seguro? Tem contraindicações?",
    a: "A reposição hormonal bioidêntica, quando prescrita por médico especializado com base em exames e avaliação clínica, é segura e tem ampla evidência científica. Contraindicações existem e serão avaliadas na consulta — daí a importância de começar com um diagnóstico honesto e individualizado.",
  },
  {
    q: "O atendimento é presencial ou pode ser online?",
    a: "A consulta inicial e o procedimento do implante são presenciais, realizados no consultório na Rua Teixeira da Silva, 34, Sala 71 — Bela Vista, São Paulo/SP. O acompanhamento entre consultas pode acontecer por canal direto com a equipe. Entre em contato para verificar disponibilidade e agendamento.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-cream py-[120px] px-[clamp(20px,6vw,100px)]">
      <div className="max-w-[720px] mx-auto">
        <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light text-navy mb-[60px] text-center">
          Perguntas <em className="italic text-gold">frequentes</em>
        </h2>

        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border-b border-[#e5ddd0] py-6">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex justify-between items-center w-full text-left cursor-pointer text-[15px] font-medium text-navy gap-4 bg-transparent border-none hover:text-gold transition-colors duration-200"
              >
                {faq.q}
                <span
                  className={`font-display text-2xl text-gold shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`text-sm font-light text-[#4a5568] leading-[1.8] overflow-hidden transition-all duration-400 ${
                  isOpen ? "max-h-[300px] pt-4" : "max-h-0"
                }`}
              >
                {faq.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
