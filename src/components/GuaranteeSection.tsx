import { Shield } from "lucide-react";
import { Reveal } from "./Reveal";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Static glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <Reveal className="max-w-3xl mx-auto text-center relative">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
          <Shield className="w-24 h-24 text-primary mx-auto relative z-10" />
        </div>
        
        <h2 className="text-4xl font-black mb-6">
          GARANTIA <span className="text-primary glow-text">BLINDADA</span> DE 7 DIAS
        </h2>
        
        <p className="text-2xl font-bold text-primary mb-6 glow-text">
          É IMPOSSÍVEL VOCÊ NÃO GOSTAR!
        </p>
        
        <p className="text-xl text-muted-foreground mb-4">
          Aqui qualquer pessoa tem resultado com a internet,
        </p>
        
        <p className="text-2xl font-black text-foreground mb-6">
          BASTA QUERER MUDAR DE VIDA!
        </p>
        
        <p className="text-lg text-muted-foreground">
          Sem perguntas. Sem burocracia. Sem enrolação.
        </p>
      </Reveal>

        <h2 className="text-4xl font-black mb-6">
          GARANTIA <span className="text-primary glow-text">BLINDADA</span> DE 7 DIAS
        </h2>
        
        <p className="text-2xl font-bold text-primary mb-6 glow-text">
          É IMPOSSÍVEL VOCÊ NÃO GOSTAR!
        </p>
        
        <p className="text-xl text-muted-foreground mb-4">
          Aqui qualquer pessoa tem resultado com a internet,
        </p>
        
        <p className="text-2xl font-black text-foreground mb-6">
          BASTA QUERER MUDAR DE VIDA!
        </p>
        
        <p className="text-lg text-muted-foreground">
          Sem perguntas. Sem burocracia. Sem enrolação.
        </p>
      </div>
    </section>
  );
};
