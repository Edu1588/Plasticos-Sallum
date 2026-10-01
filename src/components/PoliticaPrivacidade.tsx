import React from "react";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { ShieldCheck, Lock, FileText, ArrowLeft, Mail, Phone } from "lucide-react";

export function PoliticaPrivacidade({ onVoltar }: { onVoltar: () => void }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="section-x py-8">
        <Breadcrumbs
          items={[{ label: "Políticas de Privacidade", current: true }]}
          onNavigate={() => onVoltar()}
        />

        <div className="mt-4 mb-8">
          <button
            type="button"
            onClick={onVoltar}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a página principal
          </button>
        </div>

        <article className="max-w-4xl mx-auto rounded-3xl border border-border bg-card p-8 sm:p-14 shadow-soft">
          <div className="flex items-center gap-3 text-primary mb-4">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <span className="eyebrow text-primary">Conformidade LGPD & Segurança</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Política de Privacidade e Proteção de Dados Pessoais
          </h1>
          <p className="text-xs text-muted-foreground mb-8">
            Última atualização: 30 de setembro de 2026 · Comércio de Plásticos Sallum Ltda. (CNPJ 47.669.361/0001-99)
          </p>

          <div className="space-y-8 text-sm text-foreground/90 leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-foreground">1. Compromisso com a Privacidade</h2>
              <p>
                A <strong>Comércio de Plásticos Sallum Ltda.</strong> ("Plásticos Sallum"), pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 47.669.361/0001-99, com sede na Estrada Antiga do Mar, 902, Jardim Sul, São Paulo/SP, valoriza a privacidade e o sigilo das informações de seus clientes industriais, parceiros, fornecedores e visitantes do seu website corporativo.
              </p>
              <p>
                Esta Política foi redigida em total conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (Lei Federal nº 13.709/2018 - LGPD)</strong>, com o Marco Civil da Internet (Lei nº 12.965/2014) e demais normas correlatas.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-foreground">2. Dados Coletados e Finalidade do Tratamento</h2>
              <p>
                A Plásticos Sallum coleta exclusivamente os dados estritamente necessários para a realização de cotações, avaliação técnica de lotes de resíduos plásticos, agendamento de caçambas Rollon e formalização fiscal de contratos de compra e venda:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Dados de Contato Comercial:</strong> Nome do responsável, empresa/razão social, telefone/WhatsApp corporativo, e-mail comercial e endereço do pátio para retirada.</li>
                <li><strong>Dados Técnicos do Resíduo:</strong> Tipo de polímero, volume estimado, fotos do material e frequência de geração.</li>
                <li><strong>Dados Fiscais e Cadastrais:</strong> CNPJ, Inscrição Estadual e comprovante de endereço exclusivamente para emissão de Nota Fiscal de entrada e MTR (Manifesto de Transporte de Resíduos).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-foreground">3. Compartilhamento e Sigilo de Informações</h2>
              <p>
                A Plásticos Sallum <strong>jamais comercializa, aluga ou compartilha</strong> dados pessoais de clientes com terceiros para fins de marketing ou prospecção não solicitada. O compartilhamento ocorre única e exclusivamente com:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Órgãos ambientais fiscalizadores (como CETESB, IBAMA e Secretarias do Meio Ambiente) quando exigido por legislação obrigatória de controle de resíduos;</li>
                <li>Autoridades fiscais e tributárias (SEFAZ e Receita Federal) para emissão de notas fiscais;</li>
                <li>Operadores logísticos e motoristas próprios para a realização da coleta física no local informado.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-foreground">4. Armazenamento e Medidas de Segurança</h2>
              <p>
                Adotamos práticas técnicas e organizacionais compatíveis com os padrões de segurança da informação da indústria, incluindo criptografia SSL/TLS em trânsito, controle restrito de acessos por credenciais corporativas e monitoramento contra vulnerabilidades.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-foreground">5. Direitos do Titular de Dados</h2>
              <p>
                Em consonância com o artigo 18 da LGPD, todo titular de dados pode, a qualquer momento, solicitar a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou a eliminação de dados tratados com base em consentimento, mediante solicitação formal ao nosso Encarregado de Dados (DPO).
              </p>
            </section>

            <section className="space-y-3 rounded-2xl bg-secondary p-6">
              <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                6. Contato do Encarregado de Proteção de Dados (DPO)
              </h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados pessoais pela Plásticos Sallum:
              </p>
              <p className="font-medium text-foreground">
                E-mail: <a href="mailto:contato@plasticossallum.com.br" className="text-primary underline">contato@plasticossallum.com.br</a><br />
                Telefone: (11) 5622-0348<br />
                Endereço: Estrada Antiga do Mar, 902 — Jardim Sul, São Paulo/SP
              </p>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex justify-end">
            <button
              type="button"
              onClick={onVoltar}
              className="rounded-full bg-primary px-8 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-soft transition hover:opacity-90 cursor-pointer"
            >
              Voltar ao Início
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
