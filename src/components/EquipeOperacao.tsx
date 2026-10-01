import React from "react";
import retiradaCacamba from "../assets/retirada-cacamba.jpg";
import heroGalpao from "../assets/hero-galpao.jpg";
import { Users, Award, ShieldCheck, HeartHandshake, PhoneCall } from "lucide-react";

export function EquipeOperacao({ onSolicitarCotacao }: { onSolicitarCotacao: () => void }) {
  return (
    <section className="section-x py-20">
      <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-card overflow-hidden">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary mb-4">
              <Users className="h-4 w-4" />
              <span>Gente que entende de plástico e de indústria</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Equipe operacional e técnica com 50 anos de experiência prática
            </h2>

            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Nosso time é formado por profissionais que vivenciam o dia a dia das fábricas: classificadores especialistas em identificação de polímeros (densidade, fluidez e pureza), motoristas com treinamento específico para movimentação de caçambas Rollon em ambientes industriais restritos e consultores comerciais ágeis.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-secondary p-4">
                <span className="font-display text-2xl font-extrabold text-primary block">50 Anos</span>
                <span className="text-xs text-muted-foreground font-semibold">Tradição familiar e solidez desde 1976</span>
              </div>
              <div className="rounded-2xl border border-border bg-secondary p-4">
                <span className="font-display text-2xl font-extrabold text-primary block">100%</span>
                <span className="text-xs text-muted-foreground font-semibold">Auditorias fiscais e CETESB aprovadas</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onSolicitarCotacao}
                className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition hover:-translate-y-0.5 cursor-pointer"
              >
                Falar com nossa equipe
              </button>
              <a
                href="tel:+551156220348"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-muted transition"
              >
                <PhoneCall className="h-4 w-4 text-primary" />
                (11) 5622-0348
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={heroGalpao}
                  alt="Galpão operacional da Plásticos Sallum com fardos de plástico organizados e triados"
                  className="h-48 w-full object-cover transition duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl bg-deep p-5 text-deep-foreground">
                <ShieldCheck className="h-6 w-6 text-lime mb-2" />
                <h3 className="font-display text-sm font-bold">Classificação Rigorosa</h3>
                <p className="mt-1 text-xs text-deep-foreground/80">
                  Triagem minuciosa por lote, garantindo a correta destinação e valorização comercial.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-2xl bg-primary p-5 text-primary-foreground">
                <Award className="h-6 w-6 text-lime mb-2" />
                <h3 className="font-display text-sm font-bold">Logística Própria</h3>
                <p className="mt-1 text-xs text-primary-foreground/85">
                  Caminhões Rollon e motoristas registrados para coleta imediata em todo o estado de SP.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={retiradaCacamba}
                  alt="Operação de caçamba Rollon da Plásticos Sallum em retirada industrial"
                  className="h-48 w-full object-cover transition duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
