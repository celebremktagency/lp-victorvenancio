import Image from "next/image";

const painPoints = [
  "Peso que não sai mesmo com dieta restrita",
  "Cansaço que não passa nem descansando",
  "Barriga crescendo sem explicação aparente",
  "Queda de libido, humor e motivação",
  "Ondas de calor, insônia, irritabilidade",
  'Médicos que dizem "está tudo normal nos seus exames"',
];

export default function Pain() {
  return (
    <section id="pain" className="py-[120px] px-[clamp(20px,6vw,100px)] bg-cream">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="inline-block text-[10px] font-semibold tracking-[3px] uppercase text-gold border border-gold px-4 py-1.5 mb-5">
            A pergunta que ninguém responde
          </span>

          <h2 className="font-display text-[clamp(36px,4vw,60px)] font-light leading-[1.1] text-navy mb-6">
            Você faz tudo certo.<br />
            E mesmo assim<br />
            <em className="italic text-accent-rose">o resultado não vem.</em>
          </h2>

          <p className="text-[15px] font-light text-[#4a5568] leading-[1.85] mb-8">
            Dieta em dia. Academia toda semana. Horas de sono — quando consegue. E mesmo assim o peso não sai, a energia sumiu e o humor virou montanha-russa. Você começa a achar que é coisa da sua cabeça.
            <br /><br />
            Não é da sua cabeça. É do seu metabolismo. E o metabolismo feminino depois dos 35 não funciona mais com as mesmas regras de antes.
          </p>

          <ul className="flex flex-col gap-3.5 list-none">
            {painPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3.5 text-[15px] text-[#374151] font-normal">
                <span className="text-gold font-semibold shrink-0 mt-0.5">—</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="w-full aspect-[3/4] relative overflow-hidden">
            <Image
              src="/clinica 3.webp"
              alt="Consultório Dr. Victor Venâncio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute bottom-[-30px] right-[-30px] w-[120px] h-[120px] border-2 border-gold -z-[1]" />
          <div className="absolute top-[-20px] left-[-20px] w-[80px] h-[80px] border-t-2 border-l-2 border-gold" />
        </div>
      </div>
    </section>
  );
}
