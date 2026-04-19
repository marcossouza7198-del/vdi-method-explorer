import { Check, X } from "lucide-react";

const forYou = [
  "Você quer fazer sua PRIMEIRA venda online em até 48h",
  "Está cansado(a) de salário miserável e quer liberdade financeira",
  "Tem pelo menos 4 horas por dia e um celular com internet",
  "Está disposto(a) a seguir um método PASSO A PASSO",
  "Quer parar de depender de patrão para sobreviver",
  "Sonha em viajar, dar uma vida boa pra família e ter tempo livre",
];

const notForYou = [
  "Quem acha que vai ganhar dinheiro SEM fazer nada",
  "Quem desiste no primeiro obstáculo e culpa o método",
  "Quem não tem 4 horas por dia para se dedicar",
  "Quem prefere reclamar a tomar uma atitude",
  "Quem busca pirâmide, esquema ou enriquecimento mágico",
  "Quem não vai aplicar o que aprende",
];

export const ForWhomSection = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(160_84%_39%_/_0.08)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto relative">
        <h2 className="section-title mb-4 animate-fade-in">
          ESSE MÉTODO É <span className="text-primary glow-text">PRA VOCÊ?</span>
        </h2>
        <p
          className="text-xl text-muted-foreground text-center mb-12 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Seja honesto com você mesmo agora. Isso pode mudar tudo.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* For you */}
          <div
            className="relative p-8 rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/15 to-card animate-fade-in hover:scale-[1.02] transition-transform duration-300"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute -top-4 left-6 bg-primary text-primary-foreground text-sm font-black px-4 py-1.5 rounded-full">
              ✅ É PRA VOCÊ SE...
            </div>
            <ul className="space-y-4 mt-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div
            className="relative p-8 rounded-2xl border-2 border-destructive bg-gradient-to-br from-destructive/15 to-card animate-fade-in hover:scale-[1.02] transition-transform duration-300"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute -top-4 left-6 bg-destructive text-destructive-foreground text-sm font-black px-4 py-1.5 rounded-full">
              ❌ NÃO É PRA VOCÊ SE...
            </div>
            <ul className="space-y-4 mt-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          className="text-center text-2xl md:text-3xl font-black text-foreground mt-12 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Se você se identificou com a coluna verde,{" "}
          <span className="text-primary glow-text">essa é sua hora.</span>
        </p>
      </div>
    </section>
  );
};
