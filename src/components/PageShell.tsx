import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { NavKey } from "@/data/site";

type PageShellProps = {
  active: NavKey;
  children: ReactNode;
  surface?: "white" | "soft";
};

export function PageShell({ active, children, surface = "white" }: PageShellProps) {
  return (
    <div className={`site ${surface === "soft" ? "site-soft" : ""}`}>
      <Header active={active} />
      {children}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
