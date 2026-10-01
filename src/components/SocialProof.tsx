import React from "react";
import { Star, Quote, CheckCircle2, ShieldCheck } from "lucide-react";

interface Depoimento {
  cargo: string;
  segmento: string;
  estrelas: number;
  texto: string;
  destaque: string;
}

const depoimentos: Depoimento[] = [
  {
    cargo: "Diretoria de Suprimentos",
    segmento: "Setor de Embalagens · Grande São Paulo",
    estrelas: 5,
    destaque: "Pesagem precisa e pagamento rigorosamente em dia",
    texto: "Trabalhamos com a Plásticos Sallum há mais de 6 anos. A pontualidade na retirada dos fardos de PEBD e a transparência nas pesagens rodoviárias transformaram o que antes era dor de cabeça em uma receita recorrente e segura para nossa unidade fabril.",
  },
  {
    cargo: "Coordenação de Meio Ambiente & ESG",
    segmento: "Sistemista Automotivo · ABC Paulista",
    estrelas: 5,
    destaque: "Documentação CETESB e MTR 100% impecáveis",
    texto: "Nossas auditorias ambientais internas são extremamente rígidas. A Sallum nos fornece todas as notas fiscais, manifestos de transporte e laudos com rastreabilidade total. É o tipo de parceiro que você confia de olhos fechados.",
  },
  {
    cargo: "Gerência Geral de Produção",
    segmento: "Injeção Termoplástica · Região de Campinas",
    estrelas: 5,
    destaque: "Caçamba Rollon de 30m³ sempre no prazo",
    texto: "Nossa linha gera cerca de 3 toneladas diárias de borras e purgas de polipropileno. A caçamba Rollon da Sallum fica posicionada ao lado da expedição e a troca é feita sem qualquer interrupção do nosso fluxo fabril.",
  },
];

export function SocialProof() {
  return (
    <section className="bg-secondary py-20">
      <div className="section-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow text-primary">Credibilidade & Parcerias</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-foreground">
            O que dizem os gestores que confiam na Sallum
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Profissionais de suprimentos, logística e sustentabilidade que contam com a solidez e pontualidade de quem atua há 50 anos no mercado.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:shadow-card hover:-translate-y-1"
            >
              <div>
                {/* 5 Estrelas */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(d.estrelas)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-foreground">5.0</span>
                </div>

                <Quote className="h-8 w-8 text-primary/20 mb-3" />

                <h3 className="font-display text-base font-bold text-foreground mb-2">
                  "{d.destaque}"
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {d.texto}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-border flex items-center justify-between">
                <div>
                  <h4 className="font-display text-sm font-bold text-foreground">{d.cargo}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{d.segmento}</p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary mt-1">
                    <CheckCircle2 className="h-3 w-3 shrink-0" />
                    Parceiro Ativo Verificado
                  </span>
                </div>
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
