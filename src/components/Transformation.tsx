import Image from "next/image";
import { WhatsAppIcon, ArrowRightIcon } from "./Icons";
import antesImg from "@/assets/antes.webp";
import depoisImg from "@/assets/depois.webp";

const WHATSAPP_LINK = "https://wa.me/5531991467509?text=Olá%20Dr.%20Victor,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20para%20avaliação%20hormonal%20e%20metabólica.";

export default function Transformation() {
  return (
    <section id="transformation" className="transformation">
      <div className="transformation__inner">
        <span className="section-tag reveal">Resultados reais</span>

        <h2 className="transformation__title reveal reveal-delay-1">
          Veja o que acontece quando<br />
          <em>a causa é tratada de verdade.</em>
        </h2>

        <p className="transformation__subtitle reveal reveal-delay-2">
          Minha própria transformação — porque eu pratico o que prescrevo.
        </p>

        <div className="transformation__grid">
          <div className="transformation__col reveal from-left reveal-delay-1">
            <span className="transformation__label transformation__label--before">Antes</span>
            <div className="transformation__img">
              <Image
                src={antesImg}
                alt="Antes"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="transformation__divider reveal from-scale reveal-delay-2">
            <div className="transformation__divider-line" />
            <div className="transformation__divider-arrow">&rarr;</div>
            <div className="transformation__divider-line" />
          </div>

          <div className="transformation__col reveal from-right reveal-delay-3">
            <span className="transformation__label transformation__label--after">Depois</span>
            <div className="transformation__img transformation__img--after">
              <Image
                src={depoisImg}
                alt="Depois"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-4">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta">
            <WhatsAppIcon />
            Quero esse resultado também
            <ArrowRightIcon />
            <span className="btn-cta__shine" />
          </a>
        </div>
      </div>
    </section>
  );
}
