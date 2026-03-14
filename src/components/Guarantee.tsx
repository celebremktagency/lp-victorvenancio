import { ShieldIcon } from "./Icons";

export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-cream py-[100px] px-[clamp(20px,6vw,100px)]">
      <div className="max-w-[680px] mx-auto text-center">
        <span className="block mb-6 text-gold">
          <ShieldIcon className="w-16 h-16 mx-auto" />
        </span>

        <h2 className="font-display text-[clamp(30px,3.5vw,48px)] font-light text-navy mb-5 leading-[1.15]">
          Compromisso de<br />
          <em className="italic text-gold">transparência total</em>
        </h2>

        <p className="text-[15px] font-light text-[#4a5568] leading-[1.85]">
          Não prometo milagre. Prometo diagnóstico honesto, protocolo individualizado e acompanhamento real. Se na sua primeira consulta eu avaliar que o tratamento não é indicado para o seu caso, vou te dizer com clareza — e orientar o caminho certo. Medicina séria não vende expectativa. Entrega resultado.
        </p>
      </div>
    </section>
  );
}
