"use client";

import { LanguageProvider } from "@/context/LanguageContext";

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
