"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./Icons";

const WHATSAPP_LINK = "https://wa.me/5531991467509?text=Olá%20Dr.%20Victor,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20para%20avaliação%20hormonal%20e%20metabólica.";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        setVisible(hero.getBoundingClientRect().bottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sticky-bar ${visible ? "visible-bar" : "hidden-bar"}`}>
      <div className="sticky-bar__logo">
        Dr. Victor <span>Venâncio</span>
      </div>
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="sticky-bar__btn">
        <WhatsAppIcon style={{ width: 16, height: 16 }} />
        Agendar Consulta
      </a>
    </div>
  );
}
