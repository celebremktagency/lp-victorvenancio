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
    <section id="doctor" className="bg-navy py-[120px] px-[clamp(20px,6vw,100px)] relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-[100px] items-center">
        {/* Photo */}
        <div className="relative">
          <div className="w-full aspect-[3/4] relative overflow-hidden border border-gold/20">
            <Image
              src={drVictorSentado}
              alt="Dr. Victor Venâncio"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="absolute bottom-[-20px] right-[-20px] w-full h-full border border-gold/20 pointer-events-none" />
          <div className="absolute bottom-[30px] left-[-20px] bg-gold text-navy px-5 py-3 text-[11px] font-bold tracking-[2px] uppercase z-10">
            CRM · [NÚMERO]
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-block text-[10px] font-semibold tracking-[3px] uppercase text-gold-light border border-gold/40 px-4 py-1.5 mb-5">
            Quem vai te tratar
          </span>

          <h2 className="font-display text-[clamp(36px,3.8vw,56px)] font-light text-white leading-[1.1] mb-6">
            Dr. Victor<br />
            <em className="italic text-gold-light">Venâncio</em>
          </h2>

          <p className="text-[15px] font-light text-text-muted leading-[1.85] mb-5">
            Comecei minha trajetória focado em medicina estética e hipertrofia — otimizando hormônios para homens que queriam resultados físicos. Aprendi muito. Mas faltava algo.
          </p>
          <p className="text-[15px] font-light text-text-muted leading-[1.85] mb-5">
            Quando comecei a tratar mulheres no climatério, entendi que esse é o trabalho mais transformador que existe na medicina. São pacientes que carregam anos de respostas vagas, dietas frustradas e médicos que dizem &quot;está tudo normal&quot; — quando claramente não está.
          </p>
          <p className="text-[15px] font-light text-text-muted leading-[1.85]">
            Hoje me especializo em{" "}
            <strong className="text-gold-pale font-medium">reposição hormonal com implantes e medicina metabólica feminina</strong>. Crio protocolos individualizados que vão muito além do emagrecimento — porque quando você equilibra os hormônios de uma mulher, você transforma a vida dela por completo.
          </p>

          <div className="flex flex-col gap-3 mt-9 pt-9 border-t border-gold/15">
            {credentials.map((c, i) => (
              <div key={i} className="flex items-center gap-3.5 text-[13px] text-text-muted">
                <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
