import React from "react";
import { MapPin, Navigation, Truck, ExternalLink } from "lucide-react";

export function MapaRotas() {
  const endereco = "Estrada Antiga do Mar, 902 — Jardim Sul, São Paulo/SP";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Estrada Antiga do Mar, 902, Jardim Sul, Sao Paulo, SP, Brasil"
  )}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    "Estrada Antiga do Mar, 902, Sao Paulo"
  )}`;

  const polos = [
    { nome: "Grande São Paulo & Capital", rotas: "Marginal Pinheiros, Marginal Tietê, Rodoanel Mário Covas" },
    { nome: "ABC Paulista (SBC, Santo André, Diadema)", rotas: "Via Anchieta, Rodovia dos Imigrantes, Corredor ABD" },
    { nome: "Polos Industriais de Guarulhos e Osasco", rotas: "Rodovia Presidente Dutra e Ayrton Senna" },
    { nome: "Interior (Campinas, Jundiaí e Sorocaba)", rotas: "Rodovia dos Bandeirantes, Anhanguera e Castelo Branco" },
  ];

  return (
    <section className="bg-secondary/60 py-20 border-t border-border">
      <div className="section-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow text-primary">Localização Estratégica & Rotas</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Estrutura física e rotas ágeis para atender indústrias em todo o estado
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Nosso galpão de triagem e logística está estrategicamente posicionado em São Paulo com acesso rápido ao Rodoanel, Anchieta e Imigrantes, viabilizando retiradas pontuais e rodízio eficiente de caçambas Rollon nas principais bacias industriais.
            </p>

            {/* Endereço em Destaque */}
            <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">Galpão & Central Operacional</h3>
                  <p className="text-sm text-foreground/80 mt-1">{endereco}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Comércio de Plásticos Sallum Ltda. · CNPJ 47.669.361/0001-99</p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition hover:opacity-90"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      Abrir no Google Maps
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href={wazeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground transition hover:bg-muted"
                    >
                      Traçar Rota no Waze
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Polos Atendidos */}
            <div className="mt-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                Principais Eixos Logísticos Atendidos Diariamente:
              </span>
              <div className="grid gap-2 sm:grid-cols-2">
                {polos.map((p) => (
                  <div key={p.nome} className="rounded-xl border border-border bg-card/60 p-3 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-foreground">
                      <Truck className="h-3.5 w-3.5 text-primary" />
                      <span>{p.nome}</span>
                    </div>
                    <p className="mt-1 text-muted-foreground text-[11px]">{p.rotas}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mapa Real Google Maps Interativo */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-muted">
              <iframe
                title="Localização Plásticos Sallum no Google Maps"
                src="https://maps.google.com/maps?q=Estrada+Antiga+do+Mar,+902+-+Jardim+Sul,+S%C3%A3o+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              <div className="absolute top-3 left-3 rounded-xl bg-deep/90 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-deep-foreground border border-white/10 shadow-lg pointer-events-none">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
                  Plásticos Sallum · Pátio Central SP
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-card flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-muted-foreground border-t border-border">
              <span>Coleta industrial com pesagem em balança aferida</span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline flex items-center gap-1 font-bold"
              >
                Abrir no Google Maps oficial
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
