import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "DiscGolfBets - #1 Disc Golf Betting Bonuses & DGPT Odds",
  description:
    "Find the best disc golf betting bonuses, DGPT odds, and sportsbook reviews. Expert analysis, player profiles, and winning strategies for Disc Golf Pro Tour betting.",
  generator: "v0.dev",
  keywords: [
    "disc golf betting",
    "DGPT odds",
    "disc golf betting bonuses",
    "disc golf pro tour betting",
    "disc golf sportsbook",
    "best disc golf betting sites",
    "Paul McBeth odds",
    "Paige Pierce betting",
    "DGPT Championship betting",
    "disc golf tournament odds",
    "disc golf betting strategy",
    "disc golf betting guide",
  ].join(", "),
  authors: [{ name: "DiscGolfBets" }],
  creator: "DiscGolfBets",
  publisher: "DiscGolfBets",
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
    locale: "en_US",
    url: "https://discgolfbets.com",
    siteName: "DiscGolfBets",
    title: "DiscGolfBets - #1 Disc Golf Betting Bonuses & DGPT Odds",
    description:
      "Find the best disc golf betting bonuses, DGPT odds, and sportsbook reviews. Expert analysis, player profiles, and winning strategies for Disc Golf Pro Tour betting.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DiscGolfBets - Disc Golf Betting Bonuses & DGPT Odds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@discgolfbets",
    creator: "@discgolfbets",
    title: "DiscGolfBets - #1 Disc Golf Betting Bonuses & DGPT Odds",
    description:
      "Find the best disc golf betting bonuses, DGPT odds, and sportsbook reviews. Expert analysis, player profiles, and winning strategies.",
    images: ["/twitter-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://discgolfbets.com",
  },
  category: "Sports Betting",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E9DG2DJY2N"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E9DG2DJY2N');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://discgolfbets.com/#organization",
                  name: "DiscGolfBets",
                  url: "https://discgolfbets.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://discgolfbets.com/logo.png",
                    width: 512,
                    height: 512,
                  },
                  description: "The #1 destination for disc golf betting bonuses, DGPT odds, and expert analysis.",
                  sameAs: ["https://twitter.com/discgolfbets", "https://facebook.com/discgolfbets"],
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    email: "support@discgolfbets.com",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://discgolfbets.com/#website",
                  url: "https://discgolfbets.com",
                  name: "DiscGolfBets",
                  description: "Find the best disc golf betting bonuses, DGPT odds, and sportsbook reviews.",
                  publisher: {
                    "@id": "https://discgolfbets.com/#organization",
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate: "https://discgolfbets.com/search?q={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://discgolfbets.com/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://discgolfbets.com",
                    },
                  ],
                },
              ],
            }),
          }}
        />

        <meta name="theme-color" content="#16a34a" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
