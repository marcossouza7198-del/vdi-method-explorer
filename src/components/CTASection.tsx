import { ShoppingCart } from "lucide-react";

export const CTASection = () => {
  const checkoutLink = "https://pay.cakto.com.br/u6ipcm4";

  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(160 40% 8%) 50%, hsl(0 0% 0%) 100%)' }}>
      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="section-title mb-6 animate-fade-in">
          ÚLTIMA <span className="text-primary glow-text">CHANCE</span>
        </h2>
        
        <p 
          className="text-xl text-muted-foreground mb-4 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Daqui 30 dias você pode estar:
        </p>
        
        <div 
          className="text-2xl font-bold text-foreground mb-8 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="block mb-2 hover:text-destructive transition-colors duration-300">
            ❌ No mesmo lugar, reclamando da vida
          </span>
          <span className="block my-4 text-muted-foreground">OU</span>
          <span className="block hover:text-primary transition-colors duration-300">
            ✅ Fazendo sua primeira venda em até 48 horas
          </span>
        </div>

        {/* Pricing Box - Premium */}
        <div
          className="relative mb-10 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          {/* Glow halo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-emerald-400 to-primary rounded-3xl blur-2xl opacity-60 animate-pulse" />

          <div className="relative bg-gradient-to-br from-card via-secondary to-card border-2 border-primary/60 rounded-3xl p-8 md:p-10 overflow-hidden backdrop-blur-sm">
            {/* Decorative corner glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />

            {/* Discount badge */}
            <div className="relative inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-4 py-1.5 rounded-full text-sm font-black mb-5 animate-pulse">
              🔥 77% DE DESCONTO HOJE
            </div>

            <p className="relative text-muted-foreground line-through text-xl mb-1">
              De <span className="font-bold">R$ 297,00</span>
            </p>
            <p className="relative text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">
              Por apenas 12x de
            </p>

            <div className="relative flex items-start justify-center gap-1 mb-2">
              <span className="text-3xl md:text-4xl font-black text-primary mt-3">R$</span>
              <span className="text-7xl md:text-8xl font-black text-primary glow-text leading-none tracking-tight">
                6,92
              </span>
            </div>

            <div className="relative flex items-center justify-center gap-3 my-5">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground font-bold">ou</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
            </div>

            <p className="relative text-2xl md:text-3xl font-black text-foreground mb-6">
              À VISTA por <span className="text-primary glow-text">R$ 67,00</span>
            </p>

            <div className="relative inline-flex items-center gap-2 bg-destructive/10 border border-destructive/40 text-destructive font-bold text-base px-4 py-2 rounded-full animate-pulse">
              ⏰ Esta oferta expira HOJE!
            </div>
          </div>
        </div>

        {/* CTA Button - Enhanced */}
        <div className="relative inline-block mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full bg-primary/40 blur-xl animate-pulse" />
          <div className="absolute -inset-2 rounded-full border-2 border-primary/40 animate-ping" />

          <a
            href={checkoutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta relative inline-flex hover:scale-105 active:scale-95 transition-transform duration-200 group"
          >
            <ShoppingCart className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            <span className="flex flex-col items-start leading-tight">
              <span className="text-xs font-bold opacity-80 tracking-widest">QUERO COMEÇAR AGORA</span>
              <span>GARANTIR MINHA VAGA</span>
            </span>
          </a>
        </div>

        <p 
          className="text-sm text-muted-foreground animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          ✓ Pagamento 100% Seguro | ✓ Acesso Imediato | ✓ Garantia de 7 Dias
        </p>
      </div>
    </section>
  );
};
