import Image from "next/image";
import { WhatsAppIcon, ArrowRightIcon } from "./Icons";
import drVictorProfissional from "@/assets/dr-victor-profissional.webp";

const WHATSAPP_LINK = "https://wa.me/5531991467509?text=Olá%20Dr.%20Victor,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20para%20avaliação%20hormonal%20e%20metabólica.";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-text">EmaCrescer</div>

      <div className="hero__content">
        <div className="hero__tag animate-up anim-delay-1">
          <span className="hero__tag-line" />
          Dr. Victor Venâncio · CRM [XXXX]
        </div>

        <h1 className="hero__title animate-up anim-delay-2">
          Seu corpo mudou<br />
          depois dos 35.<br />
          <em>Eu descubro<br />o porquê — e trato.</em>
        </h1>

        <p className="hero__text animate-up anim-delay-3">
          Não é fraqueza. Não é falta de disciplina. É desequilíbrio hormonal — e isso tem{" "}
          <strong>solução clínica, individualizada e definitiva</strong>. Com o meu Método{" "}
          <strong>EmaCrescer®</strong>, você retoma o controle do seu corpo, da sua energia e da sua vida.
        </p>

        <div className="hero__stats animate-up anim-delay-4">
          <div>
            <div className="hero__stat-num">+2</div>
            <div className="hero__stat-label">anos de<br />especialização</div>
          </div>
          <div>
            <div className="hero__stat-num">100%</div>
            <div className="hero__stat-label">protocolos<br />individualizados</div>
          </div>
          <div>
            <div className="hero__stat-num">1</div>
            <div className="hero__stat-label">método<br />exclusivo</div>
          </div>
        </div>

        <div className="animate-up anim-delay-5">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta">
            <WhatsAppIcon />
            Agendar minha consulta
            <ArrowRightIcon />
            <span className="btn-cta__shine" />
          </a>
        </div>
      </div>

      <div className="hero__photo">
        <div className="hero__photo-wrap">
          <Image
            src={drVictorProfissional}
            alt="Dr. Victor Venâncio"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            priority
            sizes="(max-width: 1024px) 0vw, 480px"
          />
          <div className="hero__photo-overlay" />
        </div>
        <div className="hero__badge">
          <span className="hero__badge-title">EmaCrescer®</span>
          <span className="hero__badge-sub">Método Exclusivo</span>
        </div>
      </div>
    </section>
  );
}
