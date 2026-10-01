import React, { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck, Truck, FileText } from "lucide-react";

export interface DadosCotacaoIniciais {
  tipo?: string;
  volume?: string;
  frequencia?: string;
  cacamba?: string;
  observacoes?: string;
}

interface CotacaoModalProps {
  isOpen: boolean;
  onClose: () => void;
  dadosIniciais?: DadosCotacaoIniciais;
}

export function CotacaoModal({ isOpen, onClose, dadosIniciais }: CotacaoModalProps) {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [tipo, setTipo] = useState(dadosIniciais?.tipo || "");
  const [volume, setVolume] = useState(dadosIniciais?.volume || "");
  const [frequencia, setFrequencia] = useState(dadosIniciais?.frequencia || "Pontual (lote único)");
  const [cacamba, setCacamba] = useState(dadosIniciais?.cacamba || "Avaliar com a equipe técnica");
  const [observacoes, setObservacoes] = useState(dadosIniciais?.observacoes || "");
  const [enviado, setEnviado] = useState(false);

  // Sync if dadosIniciais change
  React.useEffect(() => {
    if (dadosIniciais) {
      if (dadosIniciais.tipo) setTipo(dadosIniciais.tipo);
      if (dadosIniciais.volume) setVolume(dadosIniciais.volume);
      if (dadosIniciais.frequencia) setFrequencia(dadosIniciais.frequencia);
      if (dadosIniciais.cacamba) setCacamba(dadosIniciais.cacamba);
      if (dadosIniciais.observacoes) setObservacoes(dadosIniciais.observacoes);
    }
  }, [dadosIniciais]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Formatar mensagem estruturada para envio comercial
    const textoMensagem = [
      "*NOVA SOLICITAÇÃO DE COTAÇÃO - PLÁSTICOS SALLUM*",
      "",
      `👤 *Responsável:* ${nome}`,
      `🏢 *Empresa:* ${empresa}`,
      `📞 *Telefone / WhatsApp:* ${telefone}`,
      `📍 *Cidade / Estado:* ${cidade}`,
      "",
      `♻️ *Tipo de Resíduo:* ${tipo}`,
      `📦 *Volume Estimado:* ${volume}`,
      `🔄 *Frequência de Geração:* ${frequencia}`,
      `🚛 *Caçamba / Logística:* ${cacamba}`,
      observacoes ? `📝 *Observações:* ${observacoes}` : "",
      "",
      "_Enviado através do formulário de cotação do site da Plásticos Sallum._",
    ]
      .filter((linha) => linha !== "")
      .join("\n");

    const url = `https://wa.me/551156220348?text=${encodeURIComponent(textoMensagem)}`;

    // Feedback visual
    setEnviado(true);

    // Abrir o WhatsApp após breve confirmação
    setTimeout(() => {
      window.open(url, "_blank");
      setTimeout(() => {
        setEnviado(false);
        onClose();
      }, 1200);
    }, 400);
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl border border-border bg-card p-6 sm:p-8 text-card-foreground shadow-card my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition cursor-pointer"
          aria-label="Fechar formulário"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Cabeçalho */}
        <div className="pr-8">
          <span className="eyebrow text-primary">Atendimento Direto Plásticos Sallum</span>
          <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-foreground">
            Solicitar Cotação de Resíduos
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Preencha os dados do material da sua fábrica. Nossa equipe técnica avaliará a viabilidade, valor de compra e estrutura logística.
          </p>
        </div>

        {enviado ? (
          <div className="my-10 flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime/20 text-primary">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold">Solicitação gerada com sucesso!</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Conectando você diretamente com nossa equipe de compras e logística...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Seu Nome *
                <input
                  type="text"
                  required
                  placeholder="Ex.: Carlos Silva"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className={inputClass}
                />
              </label>

              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Empresa / Fábrica *
                <input
                  type="text"
                  required
                  placeholder="Ex.: Indústria Metal-Plástica Ltda."
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  className={inputClass}
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Telefone / WhatsApp *
                <input
                  type="tel"
                  required
                  placeholder="Ex.: (11) 98765-4321"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className={inputClass}
                />
              </label>

              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Cidade e Bairro (Local do Resíduo) *
                <input
                  type="text"
                  required
                  placeholder="Ex.: Guarulhos / SP - Cumbica"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  className={inputClass}
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Tipo de Resíduo Plástico *
                <input
                  type="text"
                  required
                  placeholder="Ex.: Aparas de PEBD, Borras PP, Peças ABS"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className={inputClass}
                />
              </label>

              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Volume Estimado *
                <input
                  type="text"
                  required
                  placeholder="Ex.: 3 toneladas / 12 big bags"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className={inputClass}
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Frequência de Geração
                <select
                  value={frequencia}
                  onChange={(e) => setFrequencia(e.target.value)}
                  className={inputClass}
                >
                  <option value="Pontual (lote único / limpeza de pátio)">Pontual (lote único / limpeza)</option>
                  <option value="Semanal (contínua)">Semanal (geração contínua)</option>
                  <option value="Quinzenal">Quinzenal</option>
                  <option value="Mensal">Mensal</option>
                </select>
              </label>

              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Necessidade de Caçamba Rollon
                <select
                  value={cacamba}
                  onChange={(e) => setCacamba(e.target.value)}
                  className={inputClass}
                >
                  <option value="Avaliar com a equipe técnica">Avaliar com a equipe técnica</option>
                  <option value="Sem caçamba (coleta avulsa em fardos/bags)">Sem caçamba (coleta avulsa)</option>
                  <option value="Caçamba Rollon 5 m³">Caçamba Rollon 5 m³</option>
                  <option value="Caçamba Rollon 15 m³">Caçamba Rollon 15 m³</option>
                  <option value="Caçamba Rollon 30 m³">Caçamba Rollon 30 m³</option>
                </select>
              </label>
            </div>

            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Informações adicionais ou acondicionamento (opcional)
              <textarea
                rows={2}
                placeholder="Ex.: Material enfardado, temos fotos disponíveis, doca para caminhão truck/carreta..."
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                className={inputClass}
              />
            </label>

            {/* Garantias de segurança */}
            <div className="grid grid-cols-3 gap-2 rounded-xl bg-secondary p-3 text-center text-[11px] font-semibold text-secondary-foreground">
              <div className="flex items-center justify-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                <span>Nota Fiscal</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Truck className="h-4 w-4 text-primary shrink-0" />
                <span>Frota Rollon</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <FileText className="h-4 w-4 text-primary shrink-0" />
                <span>CETESB Conforme</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-card cursor-pointer"
              >
                <Send className="h-4 w-4" />
                Enviar Solicitação de Cotação
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
