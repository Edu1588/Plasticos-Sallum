import { GoogleGenAI } from "@google/genai";

export interface Recomendacao {
  servico: string;
  cacamba: string;
  justificativa: string;
  dicas: string[];
}

export interface RecomendacaoInput {
  tipo: string;
  volume: string;
  frequencia?: string;
}

// Expert heuristic recommendation engine based on 50 years of Plásticos Sallum industrial practices
export function calcularRecomendacaoLocal(input: RecomendacaoInput): Recomendacao {
  const tipoLower = input.tipo.toLowerCase();
  const volumeLower = input.volume.toLowerCase();
  const frequenciaLower = (input.frequencia || "").toLowerCase();

  // Volume parsing heuristics
  let volumeNum = 0;
  const numMatch = volumeLower.match(/(\d+(?:[.,]\d+)?)/);
  if (numMatch) {
    volumeNum = parseFloat(numMatch[1].replace(",", "."));
  }

  const isTonelada = volumeLower.includes("ton") || volumeLower.includes(" t ") || volumeLower.endsWith("t");
  const isKilo = volumeLower.includes("kg") || volumeLower.includes("quilo");
  const isMetroCubico = volumeLower.includes("m³") || volumeLower.includes("m3") || volumeLower.includes("metro");
  const isBigBag = volumeLower.includes("bag") || volumeLower.includes("sacaria") || volumeLower.includes("saco");
  const isCacamba = volumeLower.includes("caçamba") || volumeLower.includes("cacamba");
  const isFrequente = frequenciaLower.includes("semanal") || frequenciaLower.includes("quinzenal") || frequenciaLower.includes("mensal");

  let servico = "Compra de resíduos plásticos pós-industriais";
  let cacamba = "Caçamba Rollon 15 m³";
  let justificativa = "";
  const dicas: string[] = [];

  // Determine container type
  if (
    (isKilo && volumeNum < 800) ||
    (volumeLower.includes("pequeno") || volumeLower.includes("pouco") || (volumeNum > 0 && volumeNum <= 1 && !isTonelada && !isMetroCubico))
  ) {
    cacamba = "Sem caçamba (coleta avulsa)";
    justificativa = "Para lotes menores ou retiradas pontuais de menor metragem, a coleta avulsa em fardos, caixas ou pallets é a solução mais ágil e sem custo de aluguel de container.";
  } else if (
    (isMetroCubico && volumeNum > 20) ||
    (isTonelada && volumeNum >= 5) ||
    (isBigBag && volumeNum >= 15) ||
    volumeLower.includes("30") ||
    isFrequente && (isTonelada || isMetroCubico)
  ) {
    cacamba = "Caçamba Rollon 30 m³";
    servico = isFrequente ? "Caçambas e logística" : "Compra de resíduos plásticos pós-industriais";
    justificativa = "Para grandes geradores ou geração contínua em fábrica, a caçamba Rollon de 30 m³ otimiza o espaço físico e reduz o frete por tonelada retirada.";
  } else if (
    (isMetroCubico && volumeNum <= 8) ||
    (isTonelada && volumeNum <= 2) ||
    (isBigBag && volumeNum <= 6) ||
    volumeLower.includes("5 m") ||
    volumeLower.includes("5m")
  ) {
    cacamba = "Caçamba Rollon 5 m³";
    justificativa = "A caçamba Rollon de 5 m³ é perfeita para pátios com restrição de manobra ou volumes intermediários, mantendo a fábrica limpa e organizada.";
  } else {
    cacamba = "Caçamba Rollon 15 m³";
    justificativa = "A caçamba Rollon de 15 m³ é o padrão mais equilibrado para resíduos plásticos volumosos ou compactados, facilitando a rotina de descarte da linha fabril.";
  }

  // Material specific service and tips
  if (tipoLower.includes("borra") || tipoLower.includes("peça pesada") || tipoLower.includes("bloco") || tipoLower.includes("purga")) {
    servico = "Moagem e beneficiamento";
    dicas.push("Separar borras por família de polímero (ex.: PP ou PE) sem misturar compostos.");
    dicas.push("Manter as peças isentas de contaminações metálicas ou terra.");
  } else if (tipoLower.includes("filme") || tipoLower.includes("pebd") || tipoLower.includes("stretch") || tipoLower.includes("termoencolhivel")) {
    dicas.push("Se possível, enfardar ou amarrar os filmes para melhor aproveitamento do espaço na caçamba.");
    dicas.push("Separar filmes transparentes/cristal de filmes impressos para melhor valorização.");
  } else if (tipoLower.includes("pp") || tipoLower.includes("polipropileno") || tipoLower.includes("pead") || tipoLower.includes("injetad")) {
    dicas.push("Manter os lotes identificados por tipo de resina para agilizar a cotação e laudo comercial.");
    dicas.push("Evitar mistura de plásticos de engenharia com commodities.");
  } else {
    dicas.push("Fotografar o material em ângulo aberto e em detalhe para agilizar a proposta.");
    dicas.push("Manter o material protegido de intempéries (sol e chuva excessivos).");
  }

  if (dicas.length < 3) {
    dicas.push("Informar na cotação se a empresa possui doca, empilhadeira ou necessidade de caçamba estacionária.");
  }

  return {
    servico,
    cacamba,
    justificativa,
    dicas: dicas.slice(0, 3),
  };
}

export async function obterRecomendacao(input: RecomendacaoInput): Promise<{ ok: true; data: Recomendacao } | { ok: false; error: string }> {
  const apiKey = typeof process !== "undefined" && process.env ? process.env.GEMINI_API_KEY : undefined;

  // If Gemini API key is available, attempt real AI consultation with strict JSON output
  if (apiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Você é consultor técnico da Plásticos Sallum (São Paulo, fundada em 1976), especialista na compra e logística de resíduos plásticos pós-industriais.
Responda exclusivamente em formato JSON válido com as seguintes chaves:
{
  "servico": "Compra de resíduos plásticos pós-industriais" | "Retirada de materiais" | "Caçambas e logística" | "Moagem e beneficiamento",
  "cacamba": "Sem caçamba (coleta avulsa)" | "Caçamba Rollon 5 m³" | "Caçamba Rollon 15 m³" | "Caçamba Rollon 30 m³",
  "justificativa": string (máximo 3 frases claras e profissionais),
  "dicas": string[] (2 a 3 dicas práticas de separação/armazenamento)
}

Dados da solicitação do cliente:
- Tipo de material: ${input.tipo}
- Volume informado: ${input.volume}
- Frequência: ${input.frequencia || "Não informada / Pontual"}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.2,
        },
      });

      if (response.text) {
        const parsed = JSON.parse(response.text) as Recomendacao;
        if (parsed.servico && parsed.cacamba && parsed.justificativa && Array.isArray(parsed.dicas)) {
          return { ok: true, data: parsed };
        }
      }
    } catch (err) {
      console.warn("Gemini recommendation fallback to heuristic engine:", err);
    }
  }

  // Fallback to our high-fidelity deterministic engine
  try {
    const recomendacao = calcularRecomendacaoLocal(input);
    return { ok: true, data: recomendacao };
  } catch (err) {
    console.error("Local recommendation calculation error:", err);
    return { ok: false, error: "Não conseguimos gerar a recomendação no momento. Entre em contato diretamente pelo WhatsApp." };
  }
}
