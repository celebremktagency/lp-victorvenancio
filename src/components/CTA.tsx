import { WhatsAppIcon, ArrowRightIcon, CheckIcon, MapPinIcon } from "./Icons";

const WHATSAPP_LINK = "https://wa.me/5531991467509?text=Olá%20Dr.%20Victor,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20para%20avaliação%20hormonal%20e%20metabólica.";

const includes = [
  "Consulta completa com Dr. Victor Venâncio",
  "Avaliação hormonal e metabólica individualizada",
  "Solicitação e interpretação de exames",
  "Protocolo de tratamento personalizado",
  "Laudo hormonal explicado em linguagem acessível",
  "Canal direto com a clínica entre as consultas",
  "Orientações integradas de nutrição e estilo de vida",
];

export default function CTA() {
  return (
    <section id="cta" className="bg-navy py-[120px] px-[clamp(20px,6vw,100px)] text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(200,169,110,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-[600px] mx-auto relative z-[2]">
        <span className="block text-gold text-[11px] tracking-[3px] uppercase mb-5">Dê o primeiro passo</span>

        <h2 className="font-display text-[clamp(34px,4vw,56px)] font-light text-white mb-12 leading-[1.1]">
          Recupere o controle<br />
          do seu corpo<br />
          <em className="italic text-gold-light">de uma vez por todas.</em>
        </h2>

        <div className="bg-navy-light border border-gold/20 p-[60px_48px] relative mb-6">
          <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-gold text-navy text-[10px] font-bold tracking-[2px] uppercase px-5 py-1.5 whitespace-nowrap">
            Consulta Inicial + Plano de Tratamento
          </div>

          <ul className="list-none text-left flex flex-col gap-3 mb-10">
            {includes.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-text-muted">
                <CheckIcon className="w-4 h-4 text-gold shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 w-full bg-gradient-to-br from-gold to-gold-light text-navy font-semibold text-[13px] tracking-[2px] uppercase px-12 py-[18px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,169,110,0.4)] relative overflow-hidden"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar minha consulta
            <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-white/15 -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
          </a>

          <p className="text-xs text-text-muted mt-5 leading-[1.7] flex flex-col items-center gap-2">
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="w-3.5 h-3.5 text-gold" />
              Consultório Dr. Victor Venâncio
            </span>
            Rua Teixeira da Silva, 34, Sala 71 — Bela Vista, São Paulo/SP<br />
            Vagas limitadas pela agenda semanal
          </p>
        </div>
      </div>
    </section>
  );
}
