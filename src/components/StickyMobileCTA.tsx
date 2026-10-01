import React from "react";
import { FileSpreadsheet, ArrowRight } from "lucide-react";

export function StickyMobileCTA({ onSolicitarCotacao }: { onSolicitarCotacao: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border px-4 py-3 sm:px-6 lg:hidden shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
            ⚡ Cotação Expressa
          </span>
          <span className="text-xs text-muted-foreground font-medium">
            Retorno em até 2h
          </span>
        </div>

        <button
          type="button"
          onClick={onSolicitarCotacao}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition active:scale-95 cursor-pointer"
        >
          <FileSpreadsheet className="h-4 w-4" />
          Solicitar cotação
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
