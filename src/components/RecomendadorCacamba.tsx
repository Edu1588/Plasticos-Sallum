import { useState } from "react";
import { obterRecomendacao, type Recomendacao } from "@/src/lib/recomendacao";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export function RecomendadorCacamba({
  whatsappBase,
  onSolicitarCotacao,
}: {
  whatsappBase: string;
  onSolicitarCotacao?: (dados: { tipo: string; volume: string; frequencia: string; cacamba: string }) => void;
}) {
  const [tipo, setTipo] = useState("");
  const [volume, setVolume] = useState("");
  const [frequencia, setFrequencia] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [res, setRes] = useState<Recomendacao | null>(null);

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (tipo.trim().length < 3 || !volume.trim()) {
      setErro("Por favor, descreva o tipo de resíduo e o volume aproximado.");
      return;
    }
    setLoading(true);
    setErro(null);
    setRes(null);
    try {
      const r = await obterRecomendacao({ tipo, volume, frequencia });
      if (r.ok) {
        setRes(r.data);
      } else {
        setErro(r.error);
      }
    } catch {
      setErro("Não conseguimos gerar a recomendação. Fale diretamente com nossa equipe.");
    } finally {
      setLoading(false);
    }
  }

  const waMsg = res
    ? encodeURIComponent(
        `Olá! Sou da empresa e tenho ${tipo} (${volume}, frequência: ${frequencia || "pontual"}). A recomendação do site da Plásticos Sallum foi: ${res.servico} com ${res.cacamba}. Gostaria de solicitar uma avaliação comercial e logística.`
      )
    : "";

  const campo =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form onSubmit={enviar} className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
        <div className="flex items-center gap-2 mb-4 text-primary">
          <Sparkles className="h-5 w-5" />
          <span className="font-display text-sm font-bold uppercase tracking-wider">
            Simulador de Coleta & Logística
          </span>
        </div>

        <label className="block text-sm font-semibold text-foreground">
          Tipo de resíduo plástico
          <textarea
            className={campo}
            rows={3}
            maxLength={500}
            placeholder="Ex.: aparas de filme PEBD cristal, borras de PP injetado, bandejas termoformadas, sobras de corte"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
          />
        </label>

        <label className="mt-4 block text-sm font-semibold text-foreground">
          Volume aproximado
          <input
            className={campo}
            maxLength={200}
            placeholder="Ex.: 2 toneladas, 10 big bags, 15 m³"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            required
          />
        </label>

        <label className="mt-4 block text-sm font-semibold text-foreground">
          Frequência de geração (opcional)
          <select className={campo} value={frequencia} onChange={(e) => setFrequencia(e.target.value)}>
            <option value="">Selecione a frequência</option>
            <option value="Pontual (uma vez)">Pontual (lote único / limpeza de pátio)</option>
            <option value="Semanal">Semanal (geração contínua)</option>
            <option value="Quinzenal">Quinzenal</option>
            <option value="Mensal">Mensal</option>
          </select>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-soft transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
        >
          {loading ? (
            <>
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Analisando seu material...
            </>
          ) : (
            <>
              Ver recomendação
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        {erro && <p className="mt-4 text-sm font-medium text-destructive">{erro}</p>}
      </form>

      <div
        className="flex flex-col justify-between rounded-2xl border border-border bg-secondary p-6 shadow-soft sm:p-8"
        aria-live="polite"
      >
        {!res && !loading && (
          <div className="flex h-full flex-col justify-center space-y-4 text-secondary-foreground">
            <h3 className="font-display text-xl font-bold">Descubra a melhor logística para sua fábrica</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Conte o que sua empresa gera e indicamos o serviço e o tamanho de caçamba Rollon mais adequados. A avaliação comercial e de retirada é sempre feita pela equipe da Plásticos Sallum com agilidade.
            </p>
            <div className="rounded-xl border border-border bg-card/60 p-4 text-sm text-foreground">
              <span className="font-bold text-primary">Dica:</span> Detalhes sobre se o plástico está moído, enfardado ou a granel ajudam a sugerir a capacidade ideal da caçamba.
            </div>
          </div>
        )}

        {loading && (
          <div className="flex h-full flex-col items-center justify-center space-y-3 py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-3 border-primary border-t-transparent" />
            <p className="font-medium text-muted-foreground animate-pulse">
              Consultando parâmetros técnicos de resíduos e logística...
            </p>
          </div>
        )}

        {res && (
          <div className="space-y-6">
            <div>
              <p className="eyebrow text-primary">Serviço indicado</p>
              <p className="mt-1 font-display text-2xl font-extrabold text-foreground">{res.servico}</p>
            </div>

            <div>
              <p className="eyebrow text-primary">Caçamba ou estrutura sugerida</p>
              <div className="mt-1 inline-flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2 font-display text-xl font-bold text-primary">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                {res.cacamba}
              </div>
            </div>

            <div>
              <p className="eyebrow text-muted-foreground">Justificativa operacional</p>
              <p className="mt-1 text-sm text-foreground/90 leading-relaxed">{res.justificativa}</p>
            </div>

            {res.dicas && res.dicas.length > 0 && (
              <div>
                <p className="eyebrow text-muted-foreground">Dicas para otimizar o valor do seu resíduo</p>
                <ul className="mt-2 space-y-2 text-sm text-foreground/85">
                  {res.dicas.map((d, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-2">
              {onSolicitarCotacao ? (
                <button
                  type="button"
                  onClick={() =>
                    onSolicitarCotacao({
                      tipo,
                      volume,
                      frequencia,
                      cacamba: res.cacamba,
                    })
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition hover:opacity-95 cursor-pointer"
                >
                  Solicitar avaliação
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <a
                  href={`${whatsappBase}?text=${waMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition hover:opacity-95"
                >
                  Solicitar avaliação
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
