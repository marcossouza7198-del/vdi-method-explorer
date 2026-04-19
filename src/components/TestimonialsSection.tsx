import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    video: "/videos/depoimento-1.mp4",
    quote: '"Faturei R$ 13k no primeiro mês"',
  },
  {
    video: "/videos/depoimento-2.mp4",
    quote: '"Saí do zero para R$ 8k em 45 dias"',
  },
  {
    video: "/videos/depoimento-3.mp4",
    quote: '"Aos 13 Anos já estava vivendo do Digital"',
  },
  {
    video: "/videos/depoimento-4.mp4",
    quote: '"Primeira venda em 7 dias, hoje faço R$ 12k"',
  },
];

const stats = [
  { value: "850+", label: "Alunos Ativos" },
  { value: "R$ 2.3M+", label: "Faturado pelos Alunos" },
  { value: "4.9/5", label: "Avaliação Média" },
];

export const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 px-4 bg-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="section-title mb-4 animate-fade-in">
          QUEM JÁ ESTÁ <span className="text-primary glow-text">FATURANDO</span>
        </h2>
        
        <p 
          className="text-xl text-muted-foreground text-center mb-12 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Resultados reais de pessoas comuns como você
        </p>

        {/* Testimonials Carousel */}
        <div 
          className="relative mb-16 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300 -translate-x-1/2 md:translate-x-0 hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300 translate-x-1/2 md:translate-x-0 hover:scale-110"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-8 md:mx-16" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-none w-[280px] sm:w-[320px] testimonial-card hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="relative bg-muted rounded-lg overflow-hidden" style={{ aspectRatio: '9/16' }}>
                    <video
                      key={testimonial.video}
                      className="w-full h-full object-contain bg-background"
                      controls
                      preload="metadata"
                      playsInline
                    >
                      <source src={testimonial.video} type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-primary font-bold text-base">{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {stats.map((stat, index) => (
            <Reveal 
              key={index} 
              delay={index * 100}
              className="stat-card cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <p className="text-5xl font-black text-primary mb-2 glow-text">
                {stat.value}
              </p>
              <p className="text-muted-foreground font-semibold">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};