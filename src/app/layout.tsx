import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutOps[IA] | Automatización Inteligente de Operaciones",
  description:
    "Escala tus operaciones con agentes de IA autónomos. Eficiencia sin precedentes, desplegada en semanas. Auditoría IA, Arquitectura y Despliegue.",
  keywords: [
    "IA",
    "Automatización",
    "Agentes Autónomos",
    "Eficiencia Operativa",
    "Inteligencia Artificial",
    "Next.js",
  ],
  authors: [{ name: "AutOps[IA] Team" }],
  openGraph: {
    title: "AutOps[IA] | Automatización Inteligente",
    description:
      "Revolucionando la eficiencia operativa mediante inteligencia artificial avanzada.",
    url: "https://autops-ia.vercel.app",
    siteName: "AutOps[IA]",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AutOps[IA] - Operational Intelligence",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutOps[IA] | Automatización Inteligente",
    description: "Escala tus operaciones con agentes de IA autónomos.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-primary text-brand-background px-md py-sm rounded-md font-bold z-[100]"
        >
          Saltar al contenido principal
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
