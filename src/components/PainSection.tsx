import { Flame } from "lucide-react";

const painPoints = [
  {
    title: "Rodar anúncio e NÃO sair nenhuma venda…",
    desc: "…e sentir que só tá queimando dinheiro sem entender o porquê.",
  },
  {
    title: "🔥 Ver gente vendendo TODO DIA…",
    desc: "…enquanto você posta, anuncia e ninguém compra nada de você.",
  },
  {
    title: "🔥 Testar estratégia atrás de estratégia…",
    desc: "…e nenhuma funcionar de verdade.",
  },
  {
    title: "🔥 Ter produto na mão… mas não saber vender",
    desc: "…porque falta o criativo certo que faz o cliente clicar e comprar.",
  },
  {
    title: "🔥 Investir no tráfego e só ver número subir…",
    desc: "…menos o que importa: as vendas.",
  },
  {
    title: "🔥 Ficar travado sem saber o que fazer primeiro…",
    desc: "…e perder tempo com coisa que não dá resultado.",
  },
  {
    title: "🔥 Sentir que tá perto… mas nunca sai a primeira venda",
    desc: "…como se tivesse sempre faltando “alguma coisa”.",
  },
  {
    title: "🔥 Seguir conteúdo gratuito e continuar perdido…",
    desc: "…porque ninguém te entrega o passo a passo completo.",
  },
  {
    title: "🔥 Ter medo de investir mais e perder dinheiro de novo…",
    desc: "…porque já tentou antes e não funcionou.",
  },
  {
    title: "🔥 Passar dias tentando… sem fechar UMA venda sequer",
    desc: "…enquanto poderia resolver isso em 48 horas com a estratégia certa.",
  },
];

export const PainSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary relative overflow-hidden" id="dor">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(0_84%_60%_/_0.12)_0%,transparent_60%)]" />

      <div className="max-w-5xl mx-auto relative">
        <h2 className="section-title mb-4 animate-fade-in">
          CHEGA DE <span className="text-destructive">ENGOLIR SAPO</span>!
        </h2>
        <p
          className="text-xl md:text-2xl text-foreground text-center mb-12 max-w-3xl mx-auto animate-fade-in font-semibold"
          style={{ animationDelay: "0.1s" }}
        >
          Olha pra essa lista e me diga: <span className="text-destructive">quantas dessas você AINDA aceita?</span>
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="pain-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-destructive/20 rounded-full p-2 shrink-0 group-hover:bg-destructive transition-colors duration-300">
                  <Flame className="w-5 h-5 text-destructive group-hover:text-destructive-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-foreground mb-1 leading-tight">
                    {pain.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-snug group-hover:text-foreground/90 transition-colors duration-300">
                    {pain.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-14 text-center animate-fade-in max-w-3xl mx-auto"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-2xl md:text-3xl font-black text-foreground mb-4 leading-tight">
            Se você sente RAIVA agora, é porque{" "}
            <span className="text-destructive">algo dentro de você sabe que MERECE MAIS.</span>
          </p>
          <p className="text-xl text-primary font-bold glow-text">
            E sua PRIMEIRA VENDA pode acontecer em 48 HORAS.
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            Não é sorte. Não é dom. É <span className="text-primary font-black">MÉTODO.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
