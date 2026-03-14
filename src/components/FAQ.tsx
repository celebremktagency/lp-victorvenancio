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
    a: "Cada caso é único — por isso a primeira consulta é tão importante. De forma geral, minhas pacientes relatam melhora de energia e sono nas primeiras semanas, e resultados mais expressivos em composição corporal e bem-estar ao longo dos primeiros 2 a 4 meses. O objetivo não é velocidade: é resultado duradouro.",
  },
  {
    q: "O tratamento é seguro? Tem contraindicações?",
    a: "A reposição hormonal bioidêntica, quando prescrita por médico especializado com base em exames e avaliação clínica, é segura e tem ampla evidência científica. Contraindicações existem e serão avaliadas na consulta — daí a importância de começar com um diagnóstico honesto e individualizado.",
  },
  {
    q: "O atendimento é presencial ou pode ser online?",
    a: "A consulta inicial e o procedimento do implante são presenciais, realizados no meu consultório na Rua Teixeira da Silva, 34, Sala 71 — Bela Vista, São Paulo/SP. O acompanhamento entre consultas pode acontecer por canal direto com a equipe. Entre em contato para verificar disponibilidade e agendamento.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq">
      <div className="faq__inner">
        <h2 className="faq__title reveal">
          Perguntas <em>frequentes</em>
        </h2>

        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className={`faq__item reveal reveal-delay-${Math.min(i + 1, 5)}`}>
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="faq__question"
              >
                {faq.q}
                <span className={`faq__toggle ${isOpen ? "open" : ""}`}>+</span>
              </button>
              <div className={`faq__answer ${isOpen ? "open" : ""}`}>
                {faq.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
