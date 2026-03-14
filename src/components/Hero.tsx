import Image from "next/image";
import { WhatsAppIcon, ArrowRightIcon } from "./Icons";

const WHATSAPP_LINK = "https://wa.me/5531991467509?text=Olá%20Dr.%20Victor,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20para%20avaliação%20hormonal%20e%20metabólica.";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-navy relative grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Background text */}
      <div className="absolute bottom-[-40px] left-[-20px] font-display text-[clamp(120px,18vw,260px)] font-bold text-gold/[0.04] leading-none pointer-events-none whitespace-nowrap z-0">
        EmaCrescer
      </div>

      {/* Left */}
      <div className="px-[clamp(40px,6vw,100px)] py-[clamp(80px,8vw,130px)] flex flex-col justify-center relative z-[2]">
        <div className="flex items-center gap-3 mb-8 text-gold text-[11px] font-medium tracking-[3px] uppercase animate-up delay-1">
          <span className="w-10 h-px bg-gold inline-block" />
          Dr. Victor Venâncio · CRM [XXXX]
        </div>

        <h1 className="font-display text-[clamp(42px,5vw,74px)] font-light text-white leading-[1.08] mb-7 animate-up delay-2">
          Seu corpo mudou<br />
          depois dos 35.<br />
          <em className="italic text-gold-light">
            Eu descubro<br />o porquê — e trato.
          </em>
        </h1>

        <p className="text-base font-light text-text-muted leading-[1.75] max-w-[440px] mb-11 animate-up delay-3">
          Não é fraqueza. Não é falta de disciplina. É desequilíbrio hormonal — e isso tem{" "}
          <strong className="text-gold-pale font-medium">solução clínica, individualizada e definitiva</strong>. Com o Método{" "}
          <strong className="text-gold-pale font-medium">EmaCrescer®</strong>, você retoma o controle do seu corpo, da sua energia e da sua vida.
        </p>

        <div className="flex gap-10 mb-12 pt-8 border-t border-gold/15 animate-up delay-4">
          <div>
            <div className="font-display text-[42px] font-semibold text-gold leading-none mb-1">+2</div>
            <div className="text-[11px] text-text-muted tracking-[1.5px] uppercase leading-[1.4]">
              anos de<br />especialização
            </div>
          </div>
          <div>
            <div className="font-display text-[42px] font-semibold text-gold leading-none mb-1">100%</div>
            <div className="text-[11px] text-text-muted tracking-[1.5px] uppercase leading-[1.4]">
              protocolos<br />individualizados
            </div>
          </div>
          <div>
            <div className="font-display text-[42px] font-semibold text-gold leading-none mb-1">1</div>
            <div className="text-[11px] text-text-muted tracking-[1.5px] uppercase leading-[1.4]">
              método<br />exclusivo
            </div>
          </div>
        </div>

        <div className="animate-up delay-5">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-br from-gold to-gold-light text-navy font-semibold text-[13px] tracking-[2px] uppercase px-12 py-[18px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,169,110,0.4)] relative overflow-hidden"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar minha consulta
            <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-white/15 -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
          </a>
        </div>
      </div>

      {/* Right — photo */}
      <div className="relative hidden lg:flex items-end justify-center z-[2]">
        <div className="w-full max-w-[480px] h-[90vh] relative overflow-hidden border-t border-gold/20 border-l border-l-gold/10">
          <Image
            src="/dr-victor-profissional.webp"
            alt="Dr. Victor Venâncio"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 1024px) 0vw, 480px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/20" />
        </div>
        <div className="absolute bottom-20 left-[-20px] bg-gold text-navy px-6 py-4 z-[3]">
          <span className="font-display text-[22px] font-bold leading-none block">EmaCrescer®</span>
          <span className="text-[10px] font-semibold tracking-[2px] uppercase block mt-1">Método Exclusivo</span>
        </div>
      </div>
    </section>
  );
}
