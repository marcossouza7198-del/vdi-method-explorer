import marquee1 from "@/assets/marquee-1.jpg";
import marquee2 from "@/assets/marquee-2.jpg";
import marquee3 from "@/assets/marquee-3.jpg";
import marquee4 from "@/assets/marquee-4.jpg";
import marquee5 from "@/assets/marquee-5.jpg";
import marquee6 from "@/assets/marquee-6.jpg";

const images = [
  { src: marquee1, alt: "Notificação Pix recebido" },
  { src: marquee2, alt: "Trabalhando do conforto de casa" },
  { src: marquee3, alt: "Vendas chegando no WhatsApp" },
  { src: marquee4, alt: "Dinheiro em espécie" },
  { src: marquee5, alt: "Liberdade geográfica" },
  { src: marquee6, alt: "Dashboard de vendas crescendo" },
];

// Duplicate the array so the marquee loops seamlessly
const loop = [...images, ...images];

export const MarqueeSection = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden border-y-2 border-primary/20">
      <div className="max-w-6xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-3">
          A <span className="text-primary glow-text">REALIDADE</span> DE QUEM APLICOU
        </h2>
        <p className="text-muted-foreground text-lg">
          Notificações, vendas, liberdade. Isso pode ser seu também.
        </p>
      </div>

      <div className="relative">
        {/* Edge fade overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex gap-6 animate-marquee will-change-transform">
          {loop.map((img, i) => (
            <div
              key={i}
              className="flex-none w-[260px] h-[260px] rounded-2xl overflow-hidden border-2 border-primary/40 shadow-[0_0_30px_hsl(160_84%_39%_/_0.25)] hover:scale-105 hover:border-primary transition-transform duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={768}
                height={768}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
