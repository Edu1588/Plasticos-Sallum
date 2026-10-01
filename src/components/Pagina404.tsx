import React from "react";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { AlertCircle, ArrowLeft, Home, Phone, HelpCircle } from "lucide-react";

export function Pagina404({ onVoltar }: { onVoltar: () => void }) {
  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="section-x max-w-2xl text-center">
        <Breadcrumbs
          items={[{ label: "Página não encontrada (404)", current: true }]}
          onNavigate={() => onVoltar()}
        />

        <div className="mt-8 rounded-3xl border border-border bg-card p-8 sm:p-14 shadow-card">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-6">
            <AlertCircle className="h-10 w-10" />
          </div>

          <span className="font-display text-6xl sm:text-7xl font-extrabold text-primary block">
            404
          </span>
          <h1 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
            Página Não Encontrada
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            O endereço que você tentou acessar não existe, foi alterado ou está temporariamente indisponível.
          </p>

          <div className="my-8 rounded-2xl bg-secondary p-5 text-left text-sm">
            <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-primary" />
              Você estava procurando por:
            </h3>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>
                • <button onClick={onVoltar} className="text-primary hover:underline cursor-pointer">Compra de resíduos plásticos pós-industriais</button>
              </li>
              <li>
                • <button onClick={onVoltar} className="text-primary hover:underline cursor-pointer">Estrutura de caçambas Rollon (5m³, 15m³, 30m³)</button>
              </li>
              <li>
                • <button onClick={onVoltar} className="text-primary hover:underline cursor-pointer">Simulador inteligente de coleta</button>
              </li>
              <li>
                • <a href="tel:+551156220348" className="text-primary hover:underline">Central de atendimento: (11) 5622-0348</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onVoltar}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-lime px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition hover:opacity-90 cursor-pointer"
            >
              <Home className="h-4 w-4" />
              Ir para a Página Inicial
            </button>
            <a
              href="https://wa.me/551156220348"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted transition"
            >
              <Phone className="h-4 w-4 text-primary" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
