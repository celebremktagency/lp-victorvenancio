import Image from "next/image";
import clinica3 from "@/assets/clinica-3.webp";

const painPoints = [
  "Peso que não sai mesmo com dieta restrita",
  "Cansaço que não passa nem descansando",
  "Barriga crescendo sem explicação aparente",
  "Queda de libido, humor e motivação",
  "Ondas de calor, insônia, irritabilidade",
  "Médicos que dizem \"está tudo normal nos seus exames\"",
];

export default function Pain() {
  return (
    <section id="pain" className="pain">
      <div className="pain__inner">
        <div>
          <span className="section-tag reveal">A pergunta que ninguém responde</span>

          <h2 className="pain__title reveal reveal-delay-1">
            Você faz tudo certo.<br />
            E mesmo assim<br />
            <em>o resultado não vem.</em>
          </h2>

          <p className="pain__text reveal reveal-delay-2">
            Dieta em dia. Academia toda semana. Horas de sono — quando consegue. E mesmo assim o peso não sai, a energia sumiu e o humor virou montanha-russa. Você começa a achar que é coisa da sua cabeça.
            <br /><br />
            Não é da sua cabeça. É do seu metabolismo. E o metabolismo feminino depois dos 35 não funciona mais com as mesmas regras de antes.
          </p>

          <ul className="pain__list">
            {painPoints.map((point, i) => (
              <li key={i} className={`reveal reveal-delay-${Math.min(i + 1, 6)}`}>
                <span>—</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="pain__photo reveal from-right reveal-delay-2">
          <div className="pain__photo-wrap">
            <Image
              src={clinica3}
              alt="Consultório Dr. Victor Venâncio"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="pain__photo-deco1" />
          <div className="pain__photo-deco2" />
        </div>
      </div>
    </section>
  );
}
