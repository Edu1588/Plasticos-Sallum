import React, { useEffect } from "react";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { CheckCircle2, Clock, Phone, ArrowLeft, Send, ShieldCheck, Truck } from "lucide-react";

export function ObrigadoPage({ onVoltar }: { onVoltar: () => void }) {
  useEffect(() => {
    // Rastreamento de conversão Google Analytics e Tag Manager
    if (typeof window !== "undefined") {
      const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
      if (Array.isArray(dataLayer)) {
        dataLayer.push({
          event: "generate_lead",
          lead_category: "cotacao_residuos_plasticos",
          conversion_time: new Date().toISOString(),
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground py-10">
      <div className="section-x max-w-3xl">
        <Breadcrumbs
          items={[{ label: "Obrigado", current: true }]}
          onNavigate={() => onVoltar()}
        />

        <div className="mt-8 rounded-3xl border border-border bg-card p-8 sm:p-14 text-center shadow-card">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime/20 text-primary mb-6 animate-bounce">
            <CheckCircle2 className="h-12 w-12 text-primary" />
          </div>

          <span className="eyebrow text-primary">Solicitação Recebida com Sucesso</span>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-foreground">
            Obrigado pelo contato!
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Seus dados foram enviados diretamente para a equipe técnica e comercial da Plásticos Sallum.
          </p>

          {/* Promessa de tempo de resposta */}
          <div className="my-8 rounded-2xl bg-primary/10 border border-primary/20 p-5 max-w-lg mx-auto flex items-center justify-center gap-3 text-primary font-bold text-sm">
            <Clock className="h-5 w-5 shrink-0" />
            <span>⚡ Promessa Sallum: Resposta comercial em até 2 horas úteis</span>
          </div>

          {/* Próximos Passos */}
          <div className="text-left space-y-4 rounded-2xl bg-secondary p-6 sm:p-8 my-8 text-sm">
            <h3 className="font-display text-base font-bold text-foreground">O que acontece agora?</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  1
                </span>
                <span>
                  <strong>Análise do Polímero:</strong> Nossos classificadores avaliam o tipo de resina plástica, grau de pureza e o volume estimado informado.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  2
                </span>
                <span>
                  <strong>Definição da Logística:</strong> Verificamos a rota e a necessidade de alocação de caçamba Rollon (5m³, 15m³ ou 30m³) ou caminhão truck/carreta.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  3
                </span>
                <span>
                  <strong>Proposta e Retirada:</strong> Apresentamos o valor por quilo/tonelada, combinamos a pesagem em balança aferida e agendamos a coleta.
                </span>
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/551156220348?text=Ol%C3%A1!%20Acabei%20de%20enviar%20uma%20solicita%C3%A7%C3%A3o%20de%20cota%C3%A7%C3%A3o%20pelo%20site%20da%20Pl%C3%A1sticos%20Sallum%20e%20gostaria%20de%20enviar%20fotos%20do%20material."
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white shadow-soft transition hover:bg-[#20ba59]"
            >
              <Send className="h-4 w-4" />
              Enviar Fotos do Material no WhatsApp
            </a>

            <button
              type="button"
              onClick={onVoltar}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-foreground hover:bg-muted transition cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
