import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Dr. Victor Venâncio | Método EmaCrescer® — Reposição Hormonal e Emagrecimento em São Paulo",
  description:
    "Médico especialista em reposição hormonal com implantes e medicina metabólica feminina em São Paulo. Tratamento individualizado para mulheres no climatério: emagrecimento, energia, libido e qualidade de vida. Consultório na Bela Vista, SP.",
  keywords: [
    "reposição hormonal feminina",
    "implante hormonal São Paulo",
    "pellet hormonal",
    "médico climatério São Paulo",
    "emagrecimento hormonal",
    "medicina metabólica feminina",
    "Dr. Victor Venâncio",
    "Método EmaCrescer",
    "hormônios femininos",
    "menopausa tratamento",
    "climatério tratamento",
    "endocrinologista São Paulo",
    "tirzepatida emagrecimento",
    "reposição hormonal bioidêntica",
    "implante subcutâneo hormônio",
    "médico Bela Vista SP",
  ],
  authors: [{ name: "Dr. Victor Venâncio" }],
  creator: "Dr. Victor Venâncio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Dr. Victor Venâncio — Método EmaCrescer®",
    title: "Dr. Victor Venâncio | Reposição Hormonal e Emagrecimento para Mulheres",
    description:
      "Tratamento hormonal e metabólico especializado para mulheres no climatério. Método EmaCrescer® — protocolos individualizados com implantes hormonais em São Paulo.",
    images: [
      {
        url: "/foto profissional em pé.webp",
        width: 800,
        height: 1200,
        alt: "Dr. Victor Venâncio — Especialista em Reposição Hormonal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Victor Venâncio | Método EmaCrescer®",
    description:
      "Reposição hormonal com implantes e medicina metabólica feminina. Tratamento individualizado para mulheres no climatério em São Paulo.",
    images: ["/foto profissional em pé.webp"],
  },
  alternates: {
    canonical: "https://drvictorvenancio.com.br",
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "São Paulo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${jost.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
