import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    question: "O que eu preciso para começar?",
    answer: "Apenas um celular e um notebook. É só isso que você precisa para começar a faturar com a internet.",
  },
  {
    question: "Qual a faixa etária dos alunos?",
    answer: "Nossos alunos estão na faixa de 18 a 35 anos e todos estão tendo resultados incríveis!",
  },
  {
    question: "Quanto tempo até os primeiros resultados?",
    answer: "Nossos alunos mais rápidos fizeram a primeira venda em até 48 horas. A média gira em torno de 7 a 15 dias seguindo o método à risca.",
  },
  {
    question: "Tem garantia?",
    answer: "7 DIAS de garantia incondicional. Não gostou? Devolvemos 100% do seu dinheiro.",
  },
  {
    question: "Como faço para começar?",
    answer: "Clique no botão verde, fale comigo no WhatsApp e garanta sua vaga agora!",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-secondary relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative">
        <h2 className="section-title mb-12 animate-fade-in">
          PERGUNTAS <span className="text-primary">FREQUENTES</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal 
              key={index} 
              delay={index * 80}
              className="faq-item overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted transition-colors duration-300"
              >
                <span className="font-bold text-lg pr-4 hover:text-primary transition-colors duration-300">
                  {faq.question}
                </span>
                <div
                  className="transition-transform duration-200"
                  style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-6 h-6 text-primary shrink-0" />
                </div>
              </button>
              
              <div
                className="grid transition-all duration-200 ease-out"
                style={{
                  gridTemplateRows: openIndex === index ? '1fr' : '0fr',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 text-muted-foreground">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};