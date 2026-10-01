import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface AccordionContextType {
  openItem: string | null;
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType>({
  openItem: null,
  toggleItem: () => {},
});

export function Accordion({
  children,
  className,
}: {
  type?: "single";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  const toggleItem = React.useCallback((value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  }, []);

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div className={cn("divide-y divide-border border-y border-border", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

const AccordionItemContext = React.createContext<{ value: string; isOpen: boolean }>({
  value: "",
  isOpen: false,
});

export function AccordionItem({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { openItem } = React.useContext(AccordionContext);
  const isOpen = openItem === value;

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={cn("py-2", className)}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { toggleItem } = React.useContext(AccordionContext);
  const { value, isOpen } = React.useContext(AccordionItemContext);

  return (
    <button
      type="button"
      onClick={() => toggleItem(value)}
      aria-expanded={isOpen}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-semibold text-foreground transition-colors hover:text-primary cursor-pointer",
        className
      )}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn(
          "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
          isOpen && "rotate-180 text-primary"
        )}
      />
    </button>
  );
}

export function AccordionContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { isOpen } = React.useContext(AccordionItemContext);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "pb-4 pt-1 text-sm leading-relaxed text-muted-foreground transition-all duration-200 animate-in fade-in-50",
        className
      )}
    >
      {children}
    </div>
  );
}
