import React from "react";
import { TrendingUp, Factory, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

interface CaseItem {
  setor: string;
  local: string;
  volume: string;
  polimeros: string;
  desafio: string;
  solucao: string;
  resultados: string[];
}

const cases: CaseItem[] = [
  {
    setor: "Sistemista & Autopeças",
    local: "ABC Paulista / SP",
    volume: "45 toneladas / mês",
    polimeros: "PP injetado e ABS com fibra",
    desafio: "Peças técnicas reprovadas em ensaios ocupavam área nobre de circulação e faltava rastreabilidade para auditorias ambientais.",
    solucao: "Instalação de duas caçambas Rollon 30 m³ com cronograma de troca programado a cada 72 horas e emissão de laudo de destinação.",
    resultados: [
      "Liberação imediata de 300 m² de pátio interno",
      "Pagamento à vista após pesagem certificada",
      "100% de conformidade com ISO 14001 e CETESB",
    ],
  },
  {
    setor: "Indústria de Embalagens Flexíveis",
    local: "Guarulhos / SP",
    volume: "28 toneladas / mês",
    polimeros: "Aparas de filme PEBD cristal e termoencolhível",
    desafio: "Geração volumosa de aparas de extrusão e refile com descarte irregular por transportadores avulsos e atrasos na coleta.",
    solucao: "Contrato de fornecimento com rotina semanal fixa de caminhão Rollon e orientação de segregação na boca da extrusora.",
    resultados: [
      "Zero atrasos ou acúmulo de sobras na linha",
      "Valorização de 22% no preço pago por tonelada",
      "Logística reversa integrada ao relatório ESG",
    ],
  },
  {
    setor: "Fabricante de Eletrodomésticos",
    local: "Campinas & Região / SP",
    volume: "18 toneladas / mês",
    polimeros: "Purgas, borras pesadas de PP e carcaças de PS",
    desafio: "Materiais maciços e de difícil manuseio que danificavam caçambas convencionais e exigiam processamento específico.",
    solucao: "Disponibilização de caçamba Rollon reforçada de 15 m³ com encaminhamento direto para moagem pesada e beneficiamento.",
    resultados: [
      "Redução de custos operacionais com caçambas terceirizadas",
      "Retirada segura sem risco operacional para a equipe",
      "Parceria comercial contínua há mais de 8 anos",
    ],
  },
];

export function CasesSucesso({ onSolicitarCotacao }: { onSolicitarCotacao: () => void }) {
  return (
    <section id="cases" className="section-x py-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="eyebrow text-primary">Cases de Sucesso & Resultados Reais</span>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl text-foreground">
            Como ajudamos indústrias a transformarem sobras em valor
          </h2>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            Veja como indústrias líderes em seus segmentos superaram gargalos de armazenagem, conquistaram conformidade fiscal/ambiental e recuperaram capital financeiro com a Plásticos Sallum.
          </p>
        </div>

        <button
          type="button"
          onClick={onSolicitarCotacao}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-5 sm:px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-card cursor-pointer shrink-0 self-start md:self-auto max-w-full"
        >
          Avaliar resíduo da minha empresa
          <ArrowRight className="h-4 w-4 shrink-0" />
        </button>
      </div>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
        {cases.map((c, i) => (
          <div
            key={i}
            className="flex flex-col justify-between rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-soft transition duration-300 hover:shadow-card hover:border-primary/40 overflow-hidden max-w-full"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <Factory className="h-4 w-4" />
                  <span>{c.setor}</span>
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {c.local}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                    Volume & Polímero
                  </span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-display text-xl font-extrabold text-foreground">{c.volume}</span>
                  </div>
                  <span className="text-xs text-primary font-medium">{c.polimeros}</span>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                    Desafio Operacional
                  </span>
                  <p className="mt-1 text-sm text-foreground/80 leading-relaxed">{c.desafio}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                    Solução Sallum
                  </span>
                  <p className="mt-1 text-sm text-foreground/80 leading-relaxed">{c.solucao}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-border">
              <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-2.5">
                <TrendingUp className="h-3.5 w-3.5" />
                Resultados Alcançados:
              </span>
              <ul className="space-y-2">
                {c.resultados.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
