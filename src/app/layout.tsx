import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurora Luxe Travel | Beyond First Class",
  description:
    "Your personal gateway to the world's most extraordinary destinations. Ultra-premium concierge travel with white-glove service and curated experiences.",
  keywords: [
    "luxury travel",
    "private jet",
    "yacht charter",
    "concierge travel",
    "premium destinations",
    "exclusive experiences",
  ],
  openGraph: {
    title: "Aurora Luxe Travel | Beyond First Class",
    description:
      "Your personal gateway to the world's most extraordinary destinations. Ultra-premium concierge travel.",
    url: "https://aurora-luxe.travel",
    siteName: "Aurora Luxe Travel",
    images: [
      {
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Aurora Luxe Travel - Luxury Destinations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Luxe Travel | Beyond First Class",
    description:
      "Your personal gateway to the world's most extraordinary destinations.",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%2300d4ff'/><stop offset='50%' style='stop-color:%23a855f7'/><stop offset='100%' style='stop-color:%23ff00aa'/></linearGradient></defs><rect width='100' height='100' rx='20' fill='url(%23grad)'/><text x='50' y='70' font-family='system-ui' font-size='60' font-weight='bold' fill='white' text-anchor='middle'>A</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-aurora-dark text-aurora-text font-body">
        {children}
      </body>
    </html>
  );
}
