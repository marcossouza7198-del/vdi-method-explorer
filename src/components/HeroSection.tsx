import { ChevronDown, Zap } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export const HeroSection = () => {
  const scrollToModulos = () => {
    document.getElementById("modulos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Modern layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(160_84%_39%_/_0.25)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(160_84%_39%_/_0.15)_0%,transparent_60%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <CountdownTimer />
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6 animate-fade-in backdrop-blur-sm"
          style={{ animationDelay: "0.05s" }}
        >
          <Zap className="w-4 h-4" />
          MÉTODO TESTADO E APROVADO
        </div>

        <h1
          className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] animate-fade-in uppercase"
          style={{ animationDelay: "0.1s" }}
        >
          SE VOCÊ SEGUIR ISSO AQUI, SUA <span className="text-primary glow-text">PRIMEIRA VENDA</span> PODE SAIR EM <span className="text-primary glow-text">ATÉ 48 HORAS!</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground mb-4 font-semibold animate-fade-in max-w-3xl mx-auto italic"
          style={{ animationDelay: "0.3s" }}
        >
          Mesmo que você nunca tenha vendido nada, não saiba criar anúncio e esteja começando do zero!
        </p>

        <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground text-lg mb-2">Depois da primeira venda, você pode escalar para isso:</p>
          <p className="text-4xl md:text-6xl font-black text-primary glow-text">
            R$ 5.000 a R$ 30.000/MÊS
          </p>
        </div>

        {/* Highlighted formula */}
        <div
          className="relative max-w-2xl mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-2xl" />
          <div className="relative bg-card/80 backdrop-blur-sm border-2 border-primary rounded-2xl p-6 md:p-8">
            <span className="block text-2xl md:text-3xl font-black text-foreground leading-tight">
              INTERNET + 4 HORAS POR DIA ={" "}
              <span className="text-primary glow-text">500 REAIS TODO DIA</span>
            </span>
            <p className="text-muted-foreground mt-3 text-base md:text-lg">
              Trabalhando direto do WhatsApp, no conforto da sua casa
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a
            href="https://pay.cakto.com.br/u6ipcm4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta group w-full sm:w-auto"
          >
            <Zap className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>QUERO MINHA PRIMEIRA VENDA EM 48H</span>
          </a>

          <button
            onClick={scrollToModulos}
            className="btn-secondary group w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-8 rounded-full border-2 border-primary/20 hover:border-primary/50 transition-all font-bold text-foreground"
          >
            <span>O QUE VOU APRENDER</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>

        <p
          className="text-sm text-muted-foreground mt-4 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          ✓ Vagas Limitadas | ✓ Acesso Imediato | ✓ Garantia de 7 Dias
        </p>
      </div>
    </section>
  );
};
