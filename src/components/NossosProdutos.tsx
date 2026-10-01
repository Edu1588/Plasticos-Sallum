import React from "react";
import { ArrowRight, Layers } from "lucide-react";
import type { DadosCotacaoIniciais } from "./CotacaoModal";

interface NossosProdutosProps {
  onSolicitarCotacao: (dados?: Partial<DadosCotacaoIniciais>) => void;
}

interface ProdutoItem {
  sigla: string;
  subtitulo: string;
  imagem: string;
  descricao: string;
}

const PRODUTOS: ProdutoItem[] = [
  {
    sigla: "PP",
    subtitulo: "(DIVERSAS CORES)",
    imagem: "/produtos/pp-pellets.svg",
    descricao:
      "O Polipropileno (PP) reciclado é um polímero versátil, leve e resistente, com excelentes propriedades químicas, elétricas e mecânicas. É amplamente utilizado em setores como indústria automotiva, indústria de embalagens, indústria de artigos domésticos, construção civil e agricultura.",
  },
  {
    sigla: "ABS",
    subtitulo: "(DIVERSAS CORES)",
    imagem: "/produtos/abs-pellets.svg",
    descricao:
      "O ABS (Acrilonitrila Butadieno Estireno) reciclado é um polímero resistente, durável e versátil, com boa resistência a impactos e estabilidade dimensional. É utilizado em eletrodomésticos, peças automotivas, equipamentos esportivos, brinquedos, carcaças de eletrônicos e componentes industriais.",
  },
  {
    sigla: "PSAI",
    subtitulo: "(DIVERSAS CORES)",
    imagem: "/produtos/psai-pellets.svg",
    descricao:
      "O Poliestireno de Alto Impacto (PSAI) reciclado é um copolímero de estireno modificado com borracha, oferecendo rigidez, tenacidade e resistência a impactos. É utilizado em embalagens opacas para alimentos, peças internas de eletrodomésticos, gabinetes eletrônicos, brinquedos, embalagens de proteção, materiais de construção e peças automotivas.",
  },
  {
    sigla: "PSSTD",
    subtitulo: "(CRISTAL)",
    imagem: "/produtos/psstd-pellets.svg",
    descricao:
      "O Poliestireno Standard (PSSTD) reciclado é um polímero rígido, transparente e brilhante, com excelentes propriedades ópticas. É utilizado em copos e pratos descartáveis transparentes, caixas de CD/DVD, brinquedos, peças de montagem transparentes e materiais de escritório.",
  },
];

export function NossosProdutos({ onSolicitarCotacao }: NossosProdutosProps) {
  return (
    <section id="nossos-produtos" className="bg-white py-20 border-b border-border">
      <div className="section-x">
        {/* Cabeçalho da Seção com Fundo Branco */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary mb-3">
            <Layers className="h-4 w-4" />
            <span>Matéria-Prima Reciclada · Resinas Termoplásticas</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-[#0c2217] sm:text-4xl lg:text-5xl">
            Nossos Produtos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Polímeros beneficiados e granulados com rigoroso controle de pureza e qualidade para a indústria transformadora.
          </p>
        </div>

        {/* Grade Limpa: Cada box com Imagem Grande e Texto Claro */}
        <div className="grid gap-8 md:grid-cols-2">
          {PRODUTOS.map((produto) => (
            <div
              key={produto.sigla}
              className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft transition-all duration-300 hover:shadow-card hover:border-primary/40 flex flex-col"
            >
              {/* Imagem Grande em Destaque */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl border border-border/60 shadow-inner bg-slate-950">
                <img
                  src={produto.imagem}
                  alt={`Grânulos de ${produto.sigla} ${produto.subtitulo}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 rounded-xl bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-extrabold text-white border border-white/20 uppercase tracking-wider">
                  {produto.sigla}
                </div>
              </div>

              {/* Título e Texto Descritivo */}
              <div className="mt-6 flex-1 flex flex-col">
                <h3 className="font-display text-3xl font-black text-[#0c2217] tracking-tight">
                  {produto.sigla}
                </h3>
                <p className="font-display text-sm font-bold text-primary uppercase tracking-wider mt-1">
                  {produto.subtitulo}
                </p>

                <p className="mt-4 text-base text-foreground/85 leading-relaxed font-normal">
                  {produto.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Único Botão Centralizado no Final da Seção */}
        <div className="mt-14 flex flex-col items-center justify-center text-center">
          <button
            type="button"
            onClick={() =>
              onSolicitarCotacao({
                observacoes: "Interesse em cotação de polímeros reciclados (PP, ABS, PSAI, PSSTD)",
              })
            }
            className="inline-flex items-center justify-center gap-3 rounded-full bg-lime px-10 py-5 font-display text-base font-bold uppercase tracking-wider text-deep shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-card cursor-pointer"
          >
            Solicitar cotação de polímeros reciclados
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
            Atendimento ágil com envio de ficha técnica e disponibilidade de lotes para sua empresa.
          </p>
        </div>
      </div>
    </section>
  );
}
