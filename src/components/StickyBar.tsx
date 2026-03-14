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
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-gold/15 backdrop-blur-md px-[clamp(20px,5vw,80px)] py-3.5 transition-transform duration-400 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ background: "rgba(10,14,26,0.96)" }}
    >
      <div className="font-display text-base text-white font-normal tracking-[2px]">
        Dr. Victor <span className="text-gold">Venâncio</span>
      </div>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gold text-navy text-[11px] font-bold tracking-[2px] uppercase px-7 py-2.5 border-none cursor-pointer no-underline transition-opacity duration-200 hover:opacity-85"
      >
        <WhatsAppIcon className="w-4 h-4" />
        Agendar Consulta
      </a>
    </div>
  );
}
