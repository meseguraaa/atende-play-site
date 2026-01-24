import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atende Play",
  description: "Seu atendimento, no modo play.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen text-white antialiased">{children}</body>
    </html>
  );
}
