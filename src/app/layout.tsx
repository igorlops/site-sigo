import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import FloatingChat from "@/components/ui/items/FloatingChat";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sigowebsolutions.com.br'), // Ajuste para o domínio final de produção
  title: {
    default: "SIGO Web Solutions | Desenvolvimento de Sites e Sistemas Web",
    template: "%s | SIGO Web Solutions"
  },
  description: "Transforme sua presença digital com a SIGO Web Solutions. Criação de sites de alta performance, sistemas web, e-commerce e landing pages com design moderno e exclusivo.",
  keywords: [
    "desenvolvimento de sites",
    "criação de sites",
    "web design",
    "sistemas web",
    "landing page",
    "e-commerce",
    "loja virtual",
    "SEO",
    "marketing digital",
    "programação web",
    "next.js",
    "react",
    "soluções digitais",
    "design responsivo",
    "consultoria web"
  ],
  authors: [{ name: "SIGO Web Solutions", url: "https://sigowebsolutions.com.br" }],
  creator: "SIGO Web Solutions",
  publisher: "SIGO Web Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://sigowebsolutions.com.br",
    title: "SIGO Web Solutions | Soluções Digitais Premium",
    description: "Especialistas em desenvolvimento web. Entregamos performance, design e resultados para o seu negócio.",
    siteName: "SIGO Web Solutions",
    images: [
      {
        url: "/og-image.jpg", // Certifique-se de ter uma imagem og-image.jpg em public/
        width: 1200,
        height: 630,
        alt: "SIGO Web Solutions - Soluções Digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIGO Web Solutions",
    description: "Desenvolvimento de sites e sistemas web de alta performance.",
    images: ["/og-image.jpg"],
  },
  verification: {
    other: {
      "facebook-domain-verification": "m6185l0gc16c3ofcld5p6e3dqmmiuf",
    },
  },
  alternates: {
    canonical: "./",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17487945963"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17487945963');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased z-50 relative selection:bg-amber-300 selection:text-black`}
      >
        {children}
        <FloatingChat />
        <Script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></Script>
      </body>
    </html>
  );
}
