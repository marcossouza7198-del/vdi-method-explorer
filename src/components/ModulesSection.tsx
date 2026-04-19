import { Check, Gift, Sparkles, Crown } from "lucide-react";
import { Reveal } from "./Reveal";

const modules = [
  {
    number: "01",
    title: "Mentalidade Milionária",
    description: "Quebre as crenças que te impedem de ganhar dinheiro online. A mente é onde o dinheiro nasce.",
  },
  {
    number: "02",
    title: "Preparação de Estrutura",
    description: "Monte toda a base necessária para começar a vender com profissionalismo já no primeiro dia.",
  },
  {
    number: "03",
    title: "Criativos Milionários",
    description: "Aprenda a criar anúncios que CONVERTEM e geram vendas todos os dias no automático.",
  },
  {
    number: "04",
    title: "Tráfego Pago Avançado",
    description: "Domine as estratégias de anúncios pagos para ESCALAR seus resultados de R$500 para R$30.000/mês.",
  },
];

const bonuses = [
  {
    icon: "💎",
    title: "BÔNUS 1: Mentoria com Quem Vive Desse Mercado",
    description: "Acesso direto a mentores que faturam alto todos os dias. Tire suas dúvidas com quem JÁ FEZ.",
    originalPrice: "R$ 1.997",
  },
  {
    icon: "🚀",
    title: "BÔNUS 2: Pacote de Criativos Já Validados",
    description: "Copie e cole os criativos que nossos alunos já testaram e que GERAM VENDAS comprovadamente.",
    originalPrice: "R$ 997",
  },
  {
    icon: "📱",
    title: "BÔNUS 3: Suporte Prioritário no WhatsApp",
    description: "Tire suas dúvidas diretamente com nossa equipe especialista. Resposta em até 24h.",
    originalPrice: "EXCLUSIVO",
  },
  {
    icon: "👥",
    title: "BÔNUS 4: Comunidade VIP de Alunos",
    description: "Entre na comunidade mais engajada do Brasil. Networking + insights diários de quem está faturando.",
    originalPrice: "VIP",
  },
];

export const ModulesSection = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden" id="modulos">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(160_84%_39%_/_0.08)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6 animate-fade-in mx-auto block w-fit">
          <Sparkles className="w-4 h-4 inline mr-1" />
          CONTEÚDO COMPLETO
        </div>
        <h2 className="section-title mb-4 animate-fade-in">
          O QUE VOCÊ VAI <span className="text-primary glow-text">RECEBER</span>
        </h2>
        <p
          className="text-xl text-muted-foreground text-center mb-16 animate-fade-in max-w-2xl mx-auto"
          style={{ animationDelay: "0.1s" }}
        >
          Tudo que você precisa para fazer sua{" "}
          <span className="text-primary font-bold">PRIMEIRA VENDA em até 48 HORAS</span>
        </p>

        {/* Modules — modern card grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {modules.map((module, index) => (
            <Reveal
              key={index}
              delay={index * 90}
              className="group relative"
            >
              {/* Glow halo on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-card border-2 border-border group-hover:border-primary rounded-2xl p-8 h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_-12px_hsl(160_84%_39%_/_0.4)] cursor-pointer overflow-hidden">
                {/* Decorative number */}
                <div className="absolute -right-4 -top-4 text-[7rem] font-black text-primary/10 leading-none select-none group-hover:text-primary/20 transition-colors duration-500">
                  {module.number}
                </div>

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Check className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>

                  <p className="text-xs font-bold text-primary tracking-widest mb-2">
                    MÓDULO {module.number}
                  </p>
                  <h3 className="text-2xl font-black mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {module.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Divider */}
        <div className="relative py-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-dashed border-primary/40" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-8 py-3 text-2xl md:text-3xl font-black text-primary flex items-center gap-3">
              <Gift className="w-8 h-8 animate-bounce" />
              E AINDA VOCÊ GANHA
              <Gift className="w-8 h-8 animate-bounce" />
            </span>
          </div>
        </div>

        {/* Bonuses — premium cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {bonuses.map((bonus, index) => (
            <Reveal
              key={index}
              delay={index * 90}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-primary/50 to-primary rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-card to-background border-2 border-primary rounded-2xl p-6 h-full cursor-pointer transition-all duration-300 group-hover:-translate-y-2 overflow-hidden">
                {/* GRÁTIS badge */}
                <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
                  <span className="bg-primary text-primary-foreground text-xs font-black px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                    GRÁTIS
                  </span>
                  <span className="text-muted-foreground line-through text-xs">
                    {bonus.originalPrice}
                  </span>
                </div>

                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {bonus.icon}
                </div>

                <h3 className="text-lg md:text-xl font-black text-foreground group-hover:text-primary transition-colors duration-300 mb-3 pr-20">
                  {bonus.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {bonus.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Total bonus value */}
        <div
          className="mt-14 relative animate-fade-in"
          style={{ animationDelay: "1.1s" }}
        >
          <div className="absolute -inset-1 bg-primary/30 rounded-2xl blur-2xl" />
          <div className="relative text-center p-10 rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/20 via-card to-background cursor-pointer hover:scale-[1.02] transition-all duration-300">
            <Crown className="w-12 h-12 text-primary mx-auto mb-3" />
            <p className="text-muted-foreground text-xl mb-2">
              Valor total dos bônus:
            </p>
            <p className="text-5xl md:text-6xl font-black text-primary mb-2 glow-text">
              + R$ 2.994
            </p>
            <p className="text-2xl md:text-3xl font-black text-foreground">
              100% GRÁTIS PRA VOCÊ! 🎁
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
