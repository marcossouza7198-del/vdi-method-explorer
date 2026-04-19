import { Flame } from "lucide-react";

const painPoints = [
  {
    title: "Trabalhar feito um ESCRAVO o mês inteiro...",
    desc: "...e ainda assim, no dia 30, o dinheiro NÃO chega no fim do mês.",
  },
  {
    title: "Ver gente MEDÍOCRE faturando alto na internet...",
    desc: "...enquanto você, que é mais inteligente, continua preso na mesma vida.",
  },
  {
    title: "Pedir 'liberado' pro patrão pra ir no médico...",
    desc: "...como se você fosse uma criança que precisa de permissão pra viver.",
  },
  {
    title: "Negar passeio pros seus filhos por falta de grana...",
    desc: "...e ver a tristeza no rosto deles. Isso DESTRÓI por dentro.",
  },
  {
    title: "Acordar todo dia com o peso do FRACASSO nas costas...",
    desc: "...sabendo que mais um dia vai passar e NADA vai mudar.",
  },
  {
    title: "Ver seus amigos viajando, prosperando, vivendo...",
    desc: "...enquanto você posta foto de comida no instagram fingindo que está tudo bem.",
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
