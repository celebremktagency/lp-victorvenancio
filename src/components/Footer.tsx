import { MapPinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        Dr. Victor Venâncio · EmaCrescer®
      </div>

      <div className="footer__divider" />

      <div className="footer__address">
        <MapPinIcon style={{ color: "var(--gold)" }} />
        <span>Rua Teixeira da Silva, 34, Sala 71 — Bela Vista, São Paulo/SP</span>
      </div>

      <div className="footer__links">
        {[
          { label: "@drvictorvenancio", href: "#" },
          { label: "Política de Privacidade", href: "#" },
          { label: "Termos de Uso", href: "#" },
          { label: "Contato", href: "#" },
        ].map((link) => (
          <a key={link.label} href={link.href} className="footer__link">
            {link.label}
          </a>
        ))}
      </div>

      <div className="footer__copy">
        © 2026 Dr. Victor Venâncio. Todos os direitos reservados.<br />
        Este site é informativo e não substitui consulta médica. CRM [XXXX] · SP.
      </div>
    </footer>
  );
}
