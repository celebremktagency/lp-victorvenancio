import { MapPinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-10 px-[clamp(20px,6vw,100px)] text-center">
      <div className="font-display text-sm font-light text-gold tracking-[4px] uppercase mb-4">
        Dr. Victor Venâncio · EmaCrescer®
      </div>

      <div className="w-10 h-px bg-gold/30 mx-auto mb-6" />

      <div className="flex items-center justify-center gap-1.5 text-text-muted text-xs mb-6">
        <MapPinIcon className="w-3.5 h-3.5 text-gold" />
        <span>Rua Teixeira da Silva, 34, Sala 71 — Bela Vista, São Paulo/SP</span>
      </div>

      <div className="flex justify-center gap-8 flex-wrap mb-10">
        {[
          { label: "@drvictorvenancio", href: "#" },
          { label: "Política de Privacidade", href: "#" },
          { label: "Termos de Uso", href: "#" },
          { label: "Contato", href: "#" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[11px] text-text-muted no-underline tracking-[1.5px] uppercase transition-colors duration-200 hover:text-gold"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="text-xs text-text-muted/50">
        © 2026 Dr. Victor Venâncio. Todos os direitos reservados.<br />
        Este site é informativo e não substitui consulta médica. CRM [XXXX] · SP.
      </div>
    </footer>
  );
}
