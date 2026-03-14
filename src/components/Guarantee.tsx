import { ShieldIcon } from "./Icons";

export default function Guarantee() {
  return (
    <section id="guarantee" className="guarantee">
      <div className="guarantee__inner">
        <div className="guarantee__icon reveal from-scale">
          <ShieldIcon style={{ width: 64, height: 64 }} />
        </div>

        <h2 className="guarantee__title reveal reveal-delay-1">
          Meu compromisso de<br />
          <em>transparência total</em>
        </h2>

        <p className="guarantee__text reveal reveal-delay-2">
          Não prometo milagre. Prometo diagnóstico honesto, protocolo individualizado e acompanhamento real. Se na sua primeira consulta eu avaliar que o tratamento não é indicado para o seu caso, vou te dizer com clareza — e orientar o caminho certo. Medicina séria não vende expectativa. Entrega resultado.
        </p>
      </div>
    </section>
  );
}
