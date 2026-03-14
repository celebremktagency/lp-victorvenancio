import Image from "next/image";
import { WhatsAppIcon, ArrowRightIcon } from "./Icons";

const WHATSAPP_LINK = "https://wa.me/5531991467509?text=Olá%20Dr.%20Victor,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20para%20avaliação%20hormonal%20e%20metabólica.";

export default function Transformation() {
  return (
    <section id="transformation" className="bg-cream py-[120px] px-[clamp(20px,6vw,100px)] text-center">
      <div className="max-w-[1000px] mx-auto">
        <span className="inline-block text-[10px] font-semibold tracking-[3px] uppercase text-gold border border-gold px-4 py-1.5 mb-5">
          Resultados reais
        </span>

        <h2 className="font-display text-[clamp(36px,4vw,60px)] font-light text-navy mb-4 leading-[1.1]">
          Veja o que acontece quando<br />
          <em className="italic text-gold">a causa é tratada de verdade.</em>
        </h2>

        <p className="text-[15px] text-[#6b7280] font-light mb-16 max-w-[500px] mx-auto">
          Transformação do próprio Dr. Victor — porque ele pratica o que prescreve.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-5 items-center mb-16">
          {/* Before */}
          <div className="text-center">
            <span className="block text-[11px] font-semibold tracking-[3px] uppercase text-text-muted mb-4">Antes</span>
            <div className="w-full aspect-[3/4] relative overflow-hidden">
              <Image
                src="/antes.webp"
                alt="Dr. Victor Venâncio — Antes"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:flex flex-col items-center gap-3">
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold to-transparent" />
            <div className="font-display text-[32px] font-semibold text-gold">&rarr;</div>
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold to-transparent" />
          </div>

          {/* After */}
          <div className="text-center">
            <span className="block text-[11px] font-semibold tracking-[3px] uppercase text-gold mb-4">Depois</span>
            <div className="w-full aspect-[3/4] relative overflow-hidden border-2 border-gold">
              <Image
                src="/depois.webp"
                alt="Dr. Victor Venâncio — Depois"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-gradient-to-br from-gold to-gold-light text-navy font-semibold text-[13px] tracking-[2px] uppercase px-12 py-[18px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,169,110,0.4)] relative overflow-hidden"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Quero esse resultado também
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          <span className="absolute inset-0 bg-white/15 -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
        </a>
      </div>
    </section>
  );
}
