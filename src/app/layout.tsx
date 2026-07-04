import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientProvider } from "@/components/ClientProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mecânica Alnajar | Especialistas em Câmbios (Manuais e Automáticos) e Mecânica Geral",
  description: "Oficina especializada em câmbios (manuais e automáticos), PowerShift, CVT e mecânica geral em São Bernardo do Campo. Diagnóstico preciso, transparência e garantia.",
  keywords: "Oficina Mecânica em São Bernardo do Campo, Oficina Mecânica ABC, Câmbio Automático, Câmbio Manual, Oficina PowerShift, Oficina CVT, Mecânico em São Bernardo, Oficina especializada, Mecânica Geral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col font-sans">
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
