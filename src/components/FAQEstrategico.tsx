import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Clock, ShieldCheck, HelpCircle } from "lucide-react";

export const faqEstrategico = [
  {
    q: "1. Quais tipos e formatos de plástico pós-industrial a Sallum compra?",
    a: "Trabalhamos com polímeros industriais selecionados como Polietileno de Baixa Densidade (PEBD em aparas e filmes), Polietileno de Alta Densidade (PEAD em bombonas, pallets e tubos), Polipropileno (PP em borras, injeções e aparas), Poliestireno (PS/PSAI) e ABS. Os materiais podem estar enfardados, a granel, em caixas plásticas, big bags ou peças inteiras.",
  },
  {
    q: "2. Como funciona a estrutura de caçambas Rollon e o frete de retirada?",
    a: "Disponibilizamos caçambas estacionárias Rollon nos tamanhos de 5 m³, 15 m³ e 30 m³, instaladas estrategicamente no pátio ou doca da sua fábrica. Conforme a frequência acordada (semanal, quinzenal ou sob demanda), nosso caminhão faz a troca imediata da caçamba cheia por uma vazia e higienizada, sem custo logístico para lotes comerciais viáveis.",
  },
  {
    q: "3. Qual é o tempo de resposta para avaliação técnica e proposta comercial?",
    a: "Nossa promessa de atendimento é de resposta em até 2 horas úteis. Assim que você envia as fotos do lote e informações básicas pelo formulário ou canais de contato, nossa equipe técnica analisa a composição, volume e localização, retornando com o laudo de compra e proposta de retirada.",
  },
  {
    q: "4. A empresa emite Nota Fiscal e documentação para auditoria CETESB / ISO?",
    a: "Sim, 100% das nossas operações contam com emissão formal de Nota Fiscal de entrada, Manifesto de Transporte de Resíduos (MTR) e laudo de destinação adequada quando solicitado. A Sallum possui licenciamento ambiental completo junto à CETESB e atende a todas as diretrizes de governança e sustentabilidade (ESG).",
  },
  {
    q: "5. Quais são as condições e prazos de pagamento praticados?",
    a: "Trabalhamos preferencialmente com pagamento à vista via PIX ou transferência bancária imediatamente após a pesagem em balança rodoviária aferida e conferência física do lote. Para parceiros recorrentes, também oferecemos faturamentos programados com máxima previsibilidade de caixa.",
  },
];

export function FAQEstrategico() {
  return (
    <section id="faq" className="section-x pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
            <HelpCircle className="h-4 w-4" />
            <span>Perguntas Frequentes Estratégicas</span>
          </div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl text-foreground">
            Dúvidas Frequentes sobre Compra & Logística
          </h2>
        </div>

        <div className="inline-flex items-center rounded-2xl bg-primary/10 border border-primary/20 px-4 py-2 text-xs font-bold text-primary self-start sm:self-auto">
          <span>Tempo de resposta comercial: até 2 horas úteis</span>
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft">
        <Accordion type="single" collapsible>
          {faqEstrategico.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-primary transition py-4">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2 pb-5 border-t border-border/50">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
