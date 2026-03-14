import { WhatsAppIcon, ArrowRightIcon, CheckIcon, MapPinIcon } from "./Icons";

const WHATSAPP_LINK = "https://wa.me/5531991467509?text=Olá%20Dr.%20Victor,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20para%20avaliação%20hormonal%20e%20metabólica.";

const includes = [
  "Consulta completa comigo",
  "Avaliação hormonal e metabólica individualizada",
  "Solicitação e interpretação de exames",
  "Protocolo de tratamento personalizado",
  "Laudo hormonal explicado em linguagem acessível",
  "Canal direto com a clínica entre as consultas",
  "Orientações integradas de nutrição e estilo de vida",
];

export default function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="cta__glow" />

      <div className="cta__inner">
        <span className="cta__label reveal">Dê o primeiro passo</span>

        <h2 className="cta__title reveal reveal-delay-1">
          Recupere o controle<br />
          do seu corpo<br />
          <em>de uma vez por todas.</em>
        </h2>

        <div className="cta__card reveal from-scale reveal-delay-2">
          <div className="cta__card-badge">
            Consulta Inicial + Plano de Tratamento
          </div>

          <ul className="cta__list">
            {includes.map((item, i) => (
              <li key={i}>
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>

          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta__btn">
            <WhatsAppIcon />
            Agendar minha consulta
            <ArrowRightIcon />
          </a>

          <div className="cta__address">
            <span className="cta__address-line">
              <MapPinIcon />
              Meu consultório
            </span>
            Rua Teixeira da Silva, 34, Sala 71 — Bela Vista, São Paulo/SP<br />
            Vagas limitadas pela agenda semanal
          </div>
        </div>
      </div>
    </section>
  );
}
