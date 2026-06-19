import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Teixeira | Desenvolvedor Full Stack",
  description: "Portfólio de Gabriel Teixeira, Desenvolvedor Full Stack focado em React, Node e PostgreSQL.",
  keywords: ["Desenvolvedor", "Full Stack", "React", "Node.js", "PostgreSQL", "Portfólio", "Programador"],
  openGraph: {
    title: "Gabriel Teixeira | Desenvolvedor Full Stack",
    description: "Portfólio de Gabriel Teixeira",
    url: "https://seusitedeportfolio.com",
    siteName: "Portfólio de Gabriel",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-[#111] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
