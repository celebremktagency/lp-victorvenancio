"use client";

const causes = [
  {
    num: "01",
    title: "Estrogênio em queda",
    text: "Reduz a sensibilidade à insulina, favorece acúmulo de gordura abdominal e piora a qualidade do sono.",
  },
  {
    num: "02",
    title: "Progesterona desequilibrada",
    text: "Provoca retenção hídrica, ansiedade, insônia e aquela sensação constante de que \"algo não está certo\".",
  },
  {
    num: "03",
    title: "Testosterona baixa",
    text: "Diminui massa muscular, libido, foco e a capacidade do corpo de queimar gordura com eficiência.",
  },
];

export default function Cause() {
  return (
    <section id="cause" className="cause">
      <div className="cause__glow" />

      <div className="cause__inner">
        <span className="section-tag section-tag--light reveal">A causa real</span>

        <h2 className="cause__title reveal reveal-delay-1">
          O problema não é<br />
          <em>o que você come.</em><br />
          É o que seus hormônios<br />fazem com tudo isso.
        </h2>

        <p className="cause__text reveal reveal-delay-2">
          A partir dos 35–40 anos, a produção de estrogênio, progesterona e testosterona começa a cair de forma progressiva. Isso{" "}
          <strong>altera diretamente o metabolismo, a composição corporal e a disposição</strong>{" "}
          — independente de dieta ou treino. O climatério não é só fogacho: é uma mudança metabólica profunda que exige tratamento clínico especializado, não força de vontade.
        </p>

        <div className="cause__cards">
          {causes.map((c, i) => (
            <div key={c.num} className={`cause__card reveal reveal-delay-${i + 1}`}>
              <div className="cause__card-num">{c.num}</div>
              <div className="cause__card-title">{c.title}</div>
              <p className="cause__card-text">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-4">
          <a href="#method" className="btn-outline">
            Ver como eu trato isso →
          </a>
        </div>
      </div>
    </section>
  );
}
