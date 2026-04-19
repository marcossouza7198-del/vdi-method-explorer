import result1 from "@/assets/result-1.jpeg";
import result2 from "@/assets/result-2.jpeg";
import result3 from "@/assets/result-3.jpeg";
import result4 from "@/assets/result-4.jpeg";
import result5 from "@/assets/result-5.jpeg";
import result6 from "@/assets/result-6.png";
import result7 from "@/assets/result-7.png";
import { Reveal } from "./Reveal";

const items = [
  { src: result1, alt: "Resultado de aluno - quase R$300 no dia", caption: "Resultado de 6 dias" },
  { src: result2, alt: "Painel de vendas R$ 1.543,48 no dia", caption: "Resultado de 9 dias" },
  { src: result3, alt: "Painel de vendas R$ 233,30 no dia", caption: "Resultado de 10 dias" },
  { src: result4, alt: "Painel de vendas R$ 101,39 no dia", caption: "Resultado de 11 dias" },
  { src: result5, alt: "Painel de vendas R$ 447,56 no dia", caption: "Resultado de 16 dias" },
  { src: result6, alt: "Comissões de R$ 155,44 - vendas AUDIUM GOTAS", caption: "4 vendas em 1 dia" },
  { src: result7, alt: "Notificações KeedPay - vendas no Pix", caption: "Vendas saindo no automático" },
];

// Duplicate so the marquee loops seamlessly
const loop = [...items, ...items];

export const MarqueeSection = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden border-y-2 border-primary/20">
      <Reveal className="max-w-6xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-3 uppercase">
          A <span className="text-primary glow-text">REALIDADE</span> DE QUEM APLICOU
        </h2>
        <p className="text-muted-foreground text-lg">
          Prints reais de alunos. Isso pode ser seu também.
        </p>
      </Reveal>

      <div className="relative">
        {/* Edge fade overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex gap-6 animate-marquee will-change-transform">
          {loop.map((item, i) => (
            <div
              key={i}
              className="flex-none w-[280px] flex flex-col items-center gap-3"
            >
              <div className="w-[280px] h-[280px] rounded-2xl overflow-hidden border-2 border-primary/40 shadow-[0_0_30px_hsl(160_84%_39%_/_0.25)] hover:scale-105 hover:border-primary transition-transform duration-300 bg-card">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-primary font-bold text-base glow-text">
                ✅ {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
