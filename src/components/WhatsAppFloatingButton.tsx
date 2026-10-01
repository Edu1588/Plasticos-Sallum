import React, { useState } from "react";

interface WhatsAppFloatingButtonProps {
  numero?: string;
  mensagemPadrao?: string;
}

export function WhatsAppFloatingButton({
  numero = "551156220348",
  mensagemPadrao = "Olá! Gostaria de falar com um especialista da Plásticos Sallum sobre avaliação de resíduos plásticos.",
}: WhatsAppFloatingButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagemPadrao)}`;

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Balão de atendimento rápido no hover em desktop */}
      <div
        className={`hidden sm:flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xs font-semibold text-gray-800 shadow-xl border border-gray-100 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3 pointer-events-none"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Atendimento Comercial Online</span>
      </div>

      {/* Botão de WhatsApp */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex h-13 w-13 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] active:scale-95 cursor-pointer"
        aria-label="Falar no WhatsApp com a Plásticos Sallum"
      >
        {/* Indicador de status online pulsante */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-lime border-2 border-white"></span>
        </span>

        {/* Ícone oficial do WhatsApp em SVG */}
        <svg
          className="h-8 w-8 sm:h-9 sm:w-9 fill-current transition-transform group-hover:rotate-6"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.184 1.564 5.938l-1.564 5.714 5.86-1.537c1.7 1.002 3.684 1.579 5.805 1.579 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.84c-1.895 0-3.66-.549-5.147-1.493l-.369-.234-3.483.914.93-3.398-.256-.407c-1.042-1.658-1.597-3.582-1.597-5.556 0-5.421 4.41-9.831 9.831-9.831s9.831 4.41 9.831 9.831c0 5.422-4.41 9.831-9.831 9.831z" />
        </svg>
      </a>
    </div>
  );
}
