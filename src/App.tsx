import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { RecomendadorCacamba } from "./components/RecomendadorCacamba";
import { CotacaoModal, type DadosCotacaoIniciais } from "./components/CotacaoModal";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { SvgWaveMask } from "./components/SvgWaveMask";
import { CasesSucesso } from "./components/CasesSucesso";
import { FAQEstrategico } from "./components/FAQEstrategico";
import { SocialProof } from "./components/SocialProof";
import { EquipeOperacao } from "./components/EquipeOperacao";
import { MapaRotas } from "./components/MapaRotas";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import { PoliticaPrivacidade } from "./components/PoliticaPrivacidade";
import { ObrigadoPage } from "./components/ObrigadoPage";
import { Pagina404 } from "./components/Pagina404";
import { NossosProdutos } from "./components/NossosProdutos";
import heroGalpao from "./assets/hero-galpao.jpg";
import retiradaCacamba from "./assets/retirada-cacamba.jpg";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Menu,
  X,
  Truck,
  Recycle,
  ShieldCheck,
  Building2,
  FileCheck2,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const TELEFONE = "(11) 5622-0348";
const EMAIL = "contato@plasticossallum.com.br";

const menu = [
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Nossos Produtos", href: "#nossos-produtos" },
  { label: "O que compramos", href: "#o-que-compramos" },
  { label: "Cases", href: "#cases" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Recomendação", href: "#recomendador" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const servicosCincoCards = [
  {
    numero: "01",
    titulo: "Compra de resíduos plásticos pós-industriais",
    subtitulo: "Pagamento à vista & laudo de compra comercial",
    texto:
      "Avaliamos e compramos sobras fabris geradas em processos industriais e de transformação plástica: aparas de filmes, purgas, borras, peças com defeito, canais de injeção, bandejas e peças técnicas.",
    destaques: ["PEBD, PEAD, PP, PS e ABS", "Pesagem em balança rodoviária aferida", "Pagamento à vista garantido"],
    icon: Recycle,
  },
  {
    numero: "02",
    titulo: "Retirada & logística própria de materiais",
    subtitulo: "Coleta ágil e organizada no chão de fábrica",
    texto:
      "Organizamos a coleta física conforme a periodicidade e conveniência da sua operação. Caminhões próprios equipados com sistema Rollon e motoristas experientes em manobras industriais.",
    destaques: ["Coleta programada ou avulsa", "Agendamento em até 24 horas", "Liberação de docas e espaço útil"],
    icon: Truck,
  },
  {
    numero: "03",
    titulo: "Caçambas Rollon dedicadas (5m³, 15m³ e 30m³)",
    subtitulo: "Estrutura estacionária sem custo de locação",
    texto:
      "Para geradores contínuos, posicionamos caçambas Rollon reforçadas e estanques no pátio da sua empresa. A substituição é feita com rapidez: sai a caçamba cheia e entra a vazia.",
    destaques: ["Caçambas de 5 m³, 15 m³ e 30 m³", "Troca rápida sem interrupção fabril", "Equipamento limpo e sinalizado"],
    icon: Building2,
  },
  {
    numero: "04",
    titulo: "Moagem & beneficiamento de polímeros",
    subtitulo: "Processamento e reintegração na cadeia circular",
    texto:
      "Purgas densas, blocos e peças maciças seguem para descaracterização e moagem de alto rendimento, transformando o refugo em matéria-prima pronta para retorno à indústria.",
    destaques: ["Moinhos industriais de alta potência", "Controle de impurezas e granulometria", "Classificação técnica por lote"],
    icon: ShieldCheck,
  },
  {
    numero: "05",
    titulo: "Destinação ambiental e conformidade fiscal CETESB",
    subtitulo: "100% formalizado com rastreabilidade total",
    texto:
      "Operação com total segurança jurídica e ambiental: emissão de Nota Fiscal de entrada, Manifesto de Transporte de Resíduos (MTR eletrônico) e Certificado de Destinação Final (CDF).",
    destaques: ["Licença de Operação CETESB ativa", "Rastreabilidade para auditorias ISO", "Alinhado à Política Nacional de Resíduos"],
    icon: FileCheck2,
  },
];

const passos = [
  {
    titulo: "Conte o que você tem",
    texto:
      "Envie uma foto e informe o tipo de material, o volume aproximado, a cidade e se a geração é pontual ou recorrente.",
  },
  {
    titulo: "Nossa equipe avalia",
    texto:
      "Analisamos o material em até 2 horas úteis e verificamos as condições comerciais e logísticas para a retirada.",
  },
  {
    titulo: "Combinamos a operação",
    texto:
      "Definimos valores, documentação fiscal, prazo e forma de coleta de acordo com o que foi negociado.",
  },
  {
    titulo: "Retiramos o material",
    texto:
      "A equipe organiza a retirada com caminhões Rollon para que o resíduo deixe sua operação com segurança e previsibilidade.",
  },
  {
    titulo: "O plástico segue para um novo ciclo",
    texto:
      "O material é encaminhado ao fluxo de reciclagem para continuar gerando valor na cadeia produtiva.",
  },
];

const diferenciais = [
  "Experiência de cinco décadas no mercado",
  "Atendimento direto, técnico e próximo",
  "Avaliação de material e volume antes da retirada",
  "Operações pontuais ou fornecimento recorrente",
  "Emissão de nota fiscal, conforme a negociação",
  "Logística orientada à necessidade da empresa geradora",
  "Compromisso com o reaproveitamento e responsabilidade ambiental",
  "Licenciamento ambiental e conformidade CETESB",
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "privacidade" | "obrigado" | "404">("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalCotacaoAberto, setModalCotacaoAberto] = useState(false);
  const [dadosCotacaoModal, setDadosCotacaoModal] = useState<DadosCotacaoIniciais | undefined>(undefined);

  // Inicializar Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Sincronizar URL e Título da Página dinamicamente para SEO
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    if (currentPage === "home") {
      document.title = "Plásticos Sallum | Compra de Resíduos Plásticos Pós-Industriais";
    } else if (currentPage === "privacidade") {
      document.title = "Política de Privacidade | Plásticos Sallum";
    } else if (currentPage === "obrigado") {
      document.title = "Solicitação Confirmada | Plásticos Sallum";
    } else if (currentPage === "404") {
      document.title = "Página Não Encontrada (404) | Plásticos Sallum";
    }
  }, [currentPage]);

  const abrirModalCotacao = (dados?: DadosCotacaoIniciais) => {
    setDadosCotacaoModal(dados);
    setModalCotacaoAberto(true);
  };

  // Roteamento condicional das páginas
  if (currentPage === "privacidade") {
    return <PoliticaPrivacidade onVoltar={() => setCurrentPage("home")} />;
  }

  if (currentPage === "obrigado") {
    return <ObrigadoPage onVoltar={() => setCurrentPage("home")} />;
  }

  if (currentPage === "404") {
    return <Pagina404 onVoltar={() => setCurrentPage("home")} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-lime selection:text-lime-foreground overflow-x-hidden w-full max-w-full pb-20 lg:pb-0">
      {/* Barra de Contato Rápido no Topo com Promessa de Resposta */}
      <div className="bg-deep/95 text-deep-foreground/80 py-2.5 border-b border-deep text-xs">
        <div className="section-x flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="font-semibold text-lime">
              Resposta comercial em até 2 horas úteis
            </span>
            <span className="hidden sm:inline-block text-deep-foreground/40">·</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-lime" />
              Grande SP, ABC, Campinas e Litoral
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 font-medium text-[11px] sm:text-xs">
            <a href="tel:+551156220348" className="hover:text-lime flex items-center gap-1 whitespace-nowrap">
              <Phone className="h-3.5 w-3.5 shrink-0" />
              {TELEFONE}
            </a>
            <span className="text-deep-foreground/40 hidden sm:inline">|</span>
            <a href={`mailto:${EMAIL}`} className="hover:text-lime flex items-center gap-1 truncate max-w-[190px] sm:max-w-none">
              <Mail className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{EMAIL}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cabeçalho Principal */}
      <header className="sticky top-0 z-40 border-b border-deep bg-deep/95 text-deep-foreground backdrop-blur-md">
        <div className="section-x flex h-18 items-center justify-between gap-6">
          <a href="#topo" className="leading-none group flex items-center" aria-label="Plásticos Sallum - Ir para o início">
            <div className="h-12 rounded-xl bg-white px-3 py-1 flex items-center justify-center shadow-sm transition duration-200 group-hover:opacity-95">
              <img
                src="/logosallum.png"
                alt="Plásticos Sallum"
                className="h-full w-auto object-contain"
              />
            </div>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-lime"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => abrirModalCotacao()}
              className="inline-flex items-center justify-center rounded-full bg-lime px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-card cursor-pointer"
            >
              Solicite uma cotação
            </button>
          </div>

          {/* Botão Mobile Menu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-deep-foreground hover:bg-deep-foreground/10 lg:hidden"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-deep-foreground/20 bg-deep p-5 lg:hidden">
            <nav className="flex flex-col space-y-4">
              {menu.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-deep-foreground hover:text-lime transition"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    abrirModalCotacao();
                  }}
                  className="w-full inline-flex items-center justify-center rounded-full bg-lime px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition hover:opacity-90 cursor-pointer"
                >
                  Solicite uma cotação
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section com Gradiente Branco na Esquerda e Imagem Nítida na Direita */}
      <section id="topo" className="relative isolate overflow-hidden bg-white text-[#0c2217]">
        {/* Imagem de fundo real do galpão com máxima nitidez e cores vivas */}
        <img
          src={heroGalpao}
          alt="Fardos de resíduo plástico pós-industrial organizados em galpão logístico da Plásticos Sallum"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-right md:object-[80%_center] contrast-[1.05] brightness-[1.02]"
          loading="eager"
        />

        {/* Gradiente diagonal com leve toque verde na extremidade esquerda, passando por branco e abrindo para a foto à direita */}
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,#dcf0e2_0%,#ebf7ef_9%,#ffffff_22%,#ffffff_38%,rgba(255,255,255,0.96)_50%,rgba(255,255,255,0.35)_70%,transparent_84%)]"
          aria-hidden="true"
        />
        {/* Realce suave verde na extremidade esquerda */}
        <div
          className="absolute inset-y-0 left-0 w-36 sm:w-72 -z-10 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-white via-transparent via-15% to-transparent"
          aria-hidden="true"
        />

        <div className="section-x grid gap-12 pt-20 pb-16 md:pt-28 md:pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <span>Compra de resíduos plásticos pós-industriais</span>
            </div>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl text-[#0c2217]">
              Seu resíduo plástico pode voltar a gerar valor.
            </h1>

            <p className="mt-3 font-display text-sm sm:text-base font-bold uppercase tracking-wider text-primary">
              50 anos de história · Desde 1976
            </p>

            <p className="mt-4 max-w-xl text-lg text-[#153424]/90 font-medium leading-relaxed">
              A Plásticos Sallum compra resíduos plásticos pós-industriais de empresas, organiza a retirada e ajuda sua operação a liberar espaço com agilidade, nota fiscal e total responsabilidade ambiental.
            </p>

            {/* Selo de Tempo de Resposta em verde escuro com fundo claro */}
            <div className="mt-6 inline-flex items-center rounded-xl bg-white/95 backdrop-blur-md px-4 py-2 text-xs font-bold text-[#0c2217] border border-primary/25 shadow-sm">
              <span>Avaliação e proposta comercial em até 2 horas úteis</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => abrirModalCotacao()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-deep shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-card cursor-pointer"
              >
                Solicite uma cotação
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-full border border-[#0c2217]/30 bg-white/70 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-[#0c2217] transition-colors hover:bg-white hover:border-[#0c2217] cursor-pointer"
              >
                Como funciona
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-white/85 p-7 backdrop-blur-md shadow-card">
            <p className="eyebrow text-primary mb-4">Garantias & Diferenciais</p>
            <ul className="grid gap-3.5">
              {[
                "Desde 1976 no mercado de reciclagem",
                "Compra com emissão de nota fiscal",
                "Pagamento à vista garantido",
                "Retirada e logística conforme a operação",
                "Licença ambiental e conformidade CETESB",
                "Caçambas Rollon 5m³, 15m³ e 30m³",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-[#0c2217]">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Efeito Visual SVG Wave Mask */}
        <SvgWaveMask fillColor="var(--color-background)" />
      </section>

      {/* Dor / Solução */}
      <section className="section-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-primary">Diagnóstico Operacional</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              O plástico que sobra na produção não precisa virar um problema.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Aparas, refugos, peças com defeito, borras, filmes, bandejas e outros resíduos ocupam áreas valiosas, atrapalham a circulação e perdem valor quando ficam acumulados no pátio da fábrica.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              A Plásticos Sallum avalia o material da sua empresa e orienta o melhor caminho comercial e logístico para a retirada. Você não precisa descobrir sozinho o que fazer: converse com quem atua há meio século com resíduos plásticos industriais.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={() => abrirModalCotacao()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-card cursor-pointer"
              >
                Quero avaliar meu material
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid gap-5 rounded-3xl bg-surface p-8 text-surface-foreground shadow-soft sm:p-10">
            <p className="eyebrow text-primary">Uma solução simples para a sua operação</p>
            {[
              "Você informa o material. Nós avaliamos a oportunidade técnica e comercial.",
              "Você mostra o volume e a localização. Nós verificamos a retirada e a caçamba.",
              "A negociação é aprovada. O material segue para o próximo ciclo sustentável.",
            ].map((linha, i) => (
              <div key={linha} className="flex gap-4 border-t border-border pt-4 first:border-0 first:pt-0">
                <span className="font-display text-3xl font-extrabold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-semibold leading-relaxed pt-1">{linha}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que compramos / Serviços com Imagem Sticky na Esquerda e 5 Cards Stick Fixo */}
      <section id="o-que-compramos" className="bg-secondary py-20 relative">
        <div className="section-x">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow text-primary">O que compramos & Serviços</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              O que a Sallum pode fazer pela sua empresa
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Soluções completas desde a compra e avaliação de resíduos plásticos pós-industriais até a alocação de caçambas Rollon, transporte ágil e destinação com 100% de conformidade técnica e ambiental.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] items-start relative">
            {/* Coluna Esquerda: Imagem Fixa / Sticky de Logística Dedicada */}
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <div className="relative h-80 sm:h-[460px] lg:h-[500px] w-full overflow-hidden">
                  <img
                    src={retiradaCacamba}
                    alt="Caminhão Rollon da Plásticos Sallum realizando a retirada de caçamba com resíduos plásticos"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 rounded-xl bg-deep/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-deep-foreground border border-white/10 shadow-lg">
                    <span className="flex items-center gap-1.5 text-lime">
                      <Truck className="h-4 w-4" />
                      Logística Dedicada Rollon
                    </span>
                  </div>
                  <div className="absolute bottom-4 inset-x-4 rounded-2xl bg-black/80 backdrop-blur-md p-4 text-white border border-white/10 shadow-lg">
                    <p className="font-display text-sm font-bold text-lime">Frota Própria & Caçambas Estacionárias</p>
                    <p className="text-xs text-gray-200 mt-1">
                      Atendimento pontual em todo o estado de SP com rodízio contínuo no chão de fábrica.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Cards que sobem com efeito stick fixo (A CTA fica no último card) */}
            <div className="space-y-6">
              {/* Card 01 */}
              <div
                className="sticky rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card transition-all duration-200"
                style={{ top: "7.5rem" }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                      <Recycle className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-display text-xs font-extrabold text-primary">
                        SERVIÇO 01
                      </span>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Compra de resíduos plásticos pós-industriais
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs font-bold text-primary mb-2">
                  Pagamento à vista & laudo de compra comercial
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Avaliamos e compramos sobras fabris geradas em processos industriais e de transformação plástica: aparas de filmes, purgas, borras, peças com defeito, canais de injeção, bandejas e peças técnicas.
                </p>

                <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-2">
                  {["PEBD, PEAD, PP, PS e ABS", "Pesagem em balança rodoviária aferida", "Pagamento à vista garantido"].map((d, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      <CheckCircle className="h-3 w-3 text-primary" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 02 */}
              <div
                className="sticky rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card transition-all duration-200"
                style={{ top: "8.25rem" }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-display text-xs font-extrabold text-primary">
                        SERVIÇO 02
                      </span>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Retirada & logística própria de materiais
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs font-bold text-primary mb-2">
                  Coleta ágil e organizada no chão de fábrica
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Organizamos a coleta física conforme a periodicidade e conveniência da sua operação. Caminhões próprios equipados com sistema Rollon e motoristas experientes em manobras industriais.
                </p>

                <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-2">
                  {["Coleta programada ou avulsa", "Agendamento em até 24 horas", "Liberação de docas e espaço útil"].map((d, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      <CheckCircle className="h-3 w-3 text-primary" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 03: Moagem & beneficiamento */}
              <div
                className="sticky rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card transition-all duration-200"
                style={{ top: "9rem" }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-display text-xs font-extrabold text-primary">
                        SERVIÇO 03
                      </span>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Moagem & beneficiamento de polímeros
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs font-bold text-primary mb-2">
                  Processamento e reintegração na cadeia circular
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Purgas densas, blocos e peças maciças seguem para descaracterização e moagem de alto rendimento, transformando o refugo em matéria-prima pronta para retorno à indústria.
                </p>

                <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-2">
                  {["Moinhos industriais de alta potência", "Controle de impurezas e granulometria", "Classificação técnica por lote"].map((d, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      <CheckCircle className="h-3 w-3 text-primary" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 04: Destinação ambiental */}
              <div
                className="sticky rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card transition-all duration-200"
                style={{ top: "9.75rem" }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                      <FileCheck2 className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-display text-xs font-extrabold text-primary">
                        SERVIÇO 04
                      </span>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Destinação ambiental e conformidade fiscal CETESB
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs font-bold text-primary mb-2">
                  100% formalizado com rastreabilidade total
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Operação com total segurança jurídica e ambiental: emissão de Nota Fiscal de entrada, Manifesto de Transporte de Resíduos (MTR eletrônico) e Certificado de Destinação Final (CDF).
                </p>

                <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-2">
                  {["Licença de Operação CETESB ativa", "Rastreabilidade para auditorias ISO", "Alinhado à Política Nacional de Resíduos"].map((d, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      <CheckCircle className="h-3 w-3 text-primary" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 05 (ÚLTIMO CARD): Estrutura Operacional Própria com a CTA */}
              <div
                className="sticky rounded-3xl border-2 border-primary/25 bg-card p-6 sm:p-8 shadow-card transition-all duration-200"
                style={{ top: "10.5rem" }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-display text-xs font-extrabold text-primary uppercase tracking-wider">
                        ESTRUTURA OPERACIONAL PRÓPRIA · SERVIÇO 05
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                        Caçambas e caminhões sob medida para sua fábrica
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Contamos com caminhões equipados com sistema Rollon e caçambas de capacidades variadas (5m³, 15m³ e 30m³). Posicionamos a caçamba no ponto estratégico da sua linha de produção ou pátio e realizamos as substituições programadas, mantendo sua empresa sempre em conformidade.
                </p>

                <div className="mt-5 space-y-2.5 pt-4 border-t border-border text-xs sm:text-sm font-semibold text-foreground">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Pontualidade na troca e rodizio imediato</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Caçambas revisadas, estanques e seguras</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Pesagem com balança rodoviária aferida</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Licenciamento ambiental CETESB e Nota Fiscal</span>
                  </div>
                </div>

                {/* CTA ÚNICA NO ÚLTIMO CARD */}
                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    onClick={() => abrirModalCotacao()}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-card cursor-pointer"
                  >
                    Solicitar caçamba para minha empresa
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sessão de Cases de Sucesso */}
      <CasesSucesso onSolicitarCotacao={() => abrirModalCotacao()} />

      {/* Avaliações reais de clientes (Social Proof) */}
      <SocialProof />

      {/* Como funciona / Processo */}
      <section id="como-funciona" className="section-x py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow text-primary">Como funciona</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Da sua fábrica para um novo ciclo sustentável
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Processo ágil e transparente em 5 etapas para liberar seu pátio e valorizar o material.
          </p>
        </div>

        <ol className="grid gap-5 md:grid-cols-5">
          {passos.map((p, i) => (
            <li
              key={p.titulo}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/40 flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-4xl font-extrabold text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{p.titulo}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.texto}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Botão Centralizado conforme solicitado */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => abrirModalCotacao()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-card cursor-pointer"
          >
            Enviar meu material para avaliação
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Recomendador Inteligente */}
      <section id="recomendador" className="section-x pb-20">
        <div className="mb-6">
          <p className="eyebrow text-primary">Simulação & Recomendação</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Qual serviço e caçamba você precisa?
          </h2>
          <p className="mt-2 text-base text-muted-foreground max-w-2xl">
            Preencha os dados do seu material para receber uma orientação imediata de capacidade, logística e cuidados antes da retirada.
          </p>
        </div>
        <RecomendadorCacamba
          whatsappBase="https://wa.me/551156220348"
          onSolicitarCotacao={(dados) => abrirModalCotacao(dados)}
        />
      </section>

      {/* Foto Real da Equipe & Operação Técnica */}
      <EquipeOperacao onSolicitarCotacao={() => abrirModalCotacao()} />

      {/* Institucional / Quem Somos */}
      <section id="quem-somos" className="bg-deep py-20 text-deep-foreground">
        <div className="section-x grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-lime">Quem somos</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              50 anos transformando relações e materiais
            </h2>

            {/* Foto solicitada abaixo do 50 anos */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/15 shadow-card bg-black/20">
              <img
                src="https://res.cloudinary.com/ifuatk2z/image/upload/v1790859485/Equipe_de_Pl%C3%A1sticos_na_F%C3%A1brica_de_Reciclagem.png"
                alt="Equipe de especialistas na fábrica de reciclagem da Plásticos Sallum"
                className="h-64 sm:h-80 w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-deep-foreground/85 leading-relaxed">
            <p>
              Desde 1976, a Plásticos Sallum trabalha com resíduos plásticos e com as empresas que precisam dar um destino mais inteligente ao que sobra da produção fabril.
            </p>
            <p>
              Nossa experiência foi construída no dia a dia da indústria: compreendendo as propriedades de cada tipo de resina plástica, respeitando o ritmo e as normas internas da operação de cada cliente e honrando rigorosamente o que foi combinado.
            </p>
            <p>
              Mais do que comprar plástico, construímos parcerias sólidas de longo prazo: para a empresa que libera espaço nobre no pátio e recupera valor financeiro, e para a cadeia da economia circular que reaproveita essa matéria-prima essencial.
            </p>
          </div>
        </div>

        <div className="section-x mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((d) => (
            <div
              key={d}
              className="flex items-start gap-3 rounded-xl border border-deep-foreground/15 bg-deep-foreground/5 p-4 text-sm font-semibold backdrop-blur-sm"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-lime" />
              <span>{d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Nossos Produtos (Fundo Branco após Quem Somos) */}
      <NossosProdutos onSolicitarCotacao={(dados) => abrirModalCotacao(dados)} />

      {/* Decisor / Chamada para Gestores com Coluna Direita com Imagem */}
      <section className="section-x py-20">
        <div className="rounded-3xl bg-surface p-8 sm:p-12 lg:p-14 text-surface-foreground shadow-soft">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Para quem precisa de uma solução prática, não de mais uma promessa
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-surface-foreground/90">
                A Sallum atende indústrias e empresas que geram resíduos plásticos em sua produção, armazenagem ou transformação e necessitam de um parceiro sério para avaliar, comprar e retirar esse material com pontualidade.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-surface-foreground/90">
                Se você é responsável por produção, compras, logística, almoxarifado, sustentabilidade (ESG) ou gestão de resíduos, fale diretamente conosco e receba uma proposta rápida e estruturada em até 2 horas úteis.
              </p>
              <div className="mt-8 flex flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => abrirModalCotacao()}
                  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-lime px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-card cursor-pointer"
                >
                  Falar com especialista
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-foreground/30 px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-foreground hover:bg-foreground/5 transition cursor-pointer"
                >
                  Ver canais de contato
                </a>
              </div>
            </div>

            {/* Coluna na Direita: Vídeo em proporção 3:4 em looping, sem áudio e sem controles */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[3/4] overflow-hidden rounded-2xl border border-border shadow-card bg-black">
                <video
                  src="https://res.cloudinary.com/ifuatk2z/video/upload/v1790860362/sallumvideo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ com Exatas 5 Perguntas Estratégicas */}
      <FAQEstrategico />

      {/* Mapas e Rotas Logísticas */}
      <div id="mapa-rotas">
        <MapaRotas />
      </div>

      {/* CTA Final / Contato */}
      <section id="contato" className="bg-primary py-20 text-primary-foreground relative isolate overflow-hidden">
        <SvgWaveMask fillColor="var(--color-primary)" inverted className="absolute top-0 left-0 right-0 opacity-15" />

        <div className="section-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative z-10">
          <div>
            <span className="eyebrow text-lime">Atendimento Comercial Ágil</span>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Tem plástico pós-industrial parado na sua empresa?
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/90 leading-relaxed">
              Envie algumas informações sobre o seu lote. A equipe da Plásticos Sallum avalia o material e apresenta a melhor condição comercial e logística para sua fábrica com retorno em até 2 horas úteis.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => abrirModalCotacao()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-card cursor-pointer"
              >
                Solicitar cotação
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-primary-foreground/25 bg-black/15 p-8 backdrop-blur-sm">
            <p className="eyebrow text-lime">Canais Oficiais de Contato</p>
            <ul className="mt-5 space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-lime shrink-0" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-primary-foreground/70">Telefone Fixo / WhatsApp</span>
                  <a
                    href="tel:+551156220348"
                    className="font-bold underline-offset-4 hover:underline"
                  >
                    {TELEFONE}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-lime shrink-0" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-primary-foreground/70">E-mail Comercial</span>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-bold underline-offset-4 hover:underline"
                  >
                    {EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-lime shrink-0 mt-1" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-primary-foreground/70">Unidade Operacional</span>
                  <span className="text-base text-primary-foreground/90">
                    Estrada Antiga do Mar, 902 — Jardim Sul, São Paulo/SP
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck2 className="h-5 w-5 text-lime shrink-0 mt-1" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-primary-foreground/70">Documentação e Cadastro</span>
                  <span className="text-base text-primary-foreground/90">
                    Comércio de Plásticos Sallum Ltda. · CNPJ 47.669.361/0001-99
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rodapé Oficial Plásticos Sallum */}
      <footer className="bg-deep py-14 text-deep-foreground border-t border-deep-foreground/10">
        <div className="section-x flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-deep-foreground/15">
            {/* Logo e Identidade Oficial */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="rounded-2xl bg-white px-3 py-2 shadow-md shrink-0">
                <img
                  src="/logosallum.png"
                  alt="Logotipo oficial da Plásticos Sallum"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>
              <div>
                <p className="font-display font-bold uppercase tracking-wide text-deep-foreground text-xl">
                  Plásticos Sallum
                </p>
                <p className="eyebrow text-lime text-xs mt-0.5">
                  50 anos de compromisso sustentável · Desde 1976
                </p>
                <p className="mt-2 text-xs text-deep-foreground/75 max-w-md leading-relaxed">
                  Compra de resíduos plásticos pós-industriais, logística com caçambas Rollon e beneficiamento com total conformidade ambiental.
                </p>
              </div>
            </div>

            {/* Links Institucionais e LGPD */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setCurrentPage("privacidade")}
                className="hover:text-lime transition underline-offset-4 hover:underline cursor-pointer"
              >
                Políticas de Privacidade (LGPD)
              </button>
              <a
                href="#contato"
                className="hover:text-lime transition underline-offset-4 hover:underline"
              >
                Canais de Atendimento
              </a>
            </div>
          </div>

          {/* Linha Inferior com Dados Fiscais e Créditos Escom Studio */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-deep-foreground/70">
            <div>
              <p>Comércio de Plásticos Sallum Ltda. · CNPJ 47.669.361/0001-99</p>
              <p className="mt-0.5">Estrada Antiga do Mar, 902 — Jardim Sul, São Paulo/SP · CEP 04245-000</p>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-deep-foreground/80 sm:text-right">
              <span>Desenvolvido por</span>
              <a
                href="https://www.escomstudio.com.br/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-lime hover:underline transition inline-flex items-center gap-1"
              >
                Escom Studio
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* CTA Fixo Mobile (Sticky) */}
      <StickyMobileCTA onSolicitarCotacao={() => abrirModalCotacao()} />

      {/* Modal Popup de Cotação */}
      <CotacaoModal
        isOpen={modalCotacaoAberto}
        onClose={() => setModalCotacaoAberto(false)}
        dadosIniciais={dadosCotacaoModal}
      />

      {/* Botão Fixo de WhatsApp no Canto Inferior Direito */}
      <WhatsAppFloatingButton numero="551156220348" />
    </div>
  );
}
