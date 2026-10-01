import React from "react";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export function Breadcrumbs({ items, onNavigate }: { items: BreadcrumbItem[]; onNavigate?: (href: string) => void }) {
  // Schema.org BreadcrumbList structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `https://plasticossallum.com.br${item.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        <li>
          <button
            type="button"
            onClick={() => (onNavigate ? onNavigate("/") : window.location.assign("/"))}
            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition cursor-pointer"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Início</span>
          </button>
        </li>

        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3 text-muted-foreground/60 shrink-0" />
            {item.current || !item.href ? (
              <span className="font-semibold text-foreground" aria-current="page">
                {item.label}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => (onNavigate ? onNavigate(item.href!) : window.location.assign(item.href!))}
                className="hover:text-primary transition cursor-pointer"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
