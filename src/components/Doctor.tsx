import Image from "next/image";
import drVictorSentado from "@/assets/dr-victor-sentado.webp";

const credentials = [
  "Especialização em Medicina Hormonal e Metabólica",
  "Experiência com implantes de reposição hormonal (pellets)",
  "Formação em emagrecimento clínico avançado",
  "Atendimento exclusivo e individualizado",
  "Consultório: Rua Teixeira da Silva, 34 — Sala 71, Bela Vista, São Paulo/SP",
];

export default function Doctor() {
  return (
    <section id="doctor" className="doctor">
      <div className="doctor__inner">
        <div className="doctor__photo reveal from-left">
          <div className="doctor__photo-wrap">
            <Image
              src={drVictorSentado}
              alt="Dr. Victor Venâncio"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="doctor__photo-shadow" />
          <div className="doctor__photo-badge">CRM · [NÚMERO]</div>
        </div>

        <div>
          <span className="section-tag section-tag--light reveal">Quem sou eu</span>

          <h2 className="doctor__title reveal reveal-delay-1">
            Dr. Victor<br />
            <em>Venâncio</em>
          </h2>

          <p className="doctor__text reveal reveal-delay-2">
            Comecei minha trajetória focado em medicina estética e hipertrofia — otimizando hormônios para homens que queriam resultados físicos. Aprendi muito. Mas faltava algo.
          </p>
          <p className="doctor__text reveal reveal-delay-3">
            Quando comecei a tratar mulheres no climatério, entendi que esse é o trabalho mais transformador que existe na medicina. São pacientes que carregam anos de respostas vagas, dietas frustradas e médicos que dizem &quot;está tudo normal&quot; — quando claramente não está.
          </p>
          <p className="doctor__text reveal reveal-delay-4" style={{ marginBottom: 0 }}>
            Hoje me especializo em{" "}
            <strong>reposição hormonal com implantes e medicina metabólica feminina</strong>. Crio protocolos individualizados que vão muito além do emagrecimento — porque quando você equilibra os hormônios de uma mulher, você transforma a vida dela por completo.
          </p>

          <div className="doctor__credentials reveal reveal-delay-5">
            {credentials.map((c, i) => (
              <div key={i} className="doctor__credential">
                <span className="doctor__credential-dot" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
