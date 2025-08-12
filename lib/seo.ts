import type { Metadata } from "next"

export interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = "/og-image.png",
  noIndex = false,
}: SEOProps): Metadata {
  const fullTitle = title.includes("DiscGolfBets") ? title : `${title} | DiscGolfBets`

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    robots: noIndex ? "noindex,nofollow" : "index,follow",
    openGraph: {
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: canonical ? { canonical } : undefined,
  }
}

// Schema markup generators for different content types
export function generateEventSchema(event: {
  name: string
  startDate: string
  endDate?: string
  location: string
  venue: string
  description: string
  prizePool: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.location,
      },
    },
    sport: "Disc Golf",
    organizer: {
      "@type": "Organization",
      name: "Disc Golf Pro Tour",
    },
    offers: {
      "@type": "Offer",
      description: `Prize Pool: ${event.prizePool}`,
      url: event.url,
    },
  }
}

export function generatePlayerSchema(player: {
  name: string
  description: string
  nationality: string
  sport: string
  achievements: string[]
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: player.name,
    description: player.description,
    nationality: player.nationality,
    sport: player.sport,
    url: player.url,
    knowsAbout: player.achievements,
    additionalType: "https://schema.org/Athlete",
  }
}

export function generateSportsbookReviewSchema(review: {
  name: string
  description: string
  rating: number
  bonus: string
  pros: string[]
  cons: string[]
  url: string
  reviewUrl: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: review.name,
      description: review.description,
      url: review.url,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      "@type": "Organization",
      name: "DiscGolfBets",
    },
    reviewBody: `${review.description} Bonus: ${review.bonus}. Pros: ${review.pros.join(", ")}. Cons: ${review.cons.join(", ")}.`,
    url: review.reviewUrl,
    positiveNotes: review.pros,
    negativeNotes: review.cons,
  }
}

export function generateGuideSchema(guide: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  url: string
  keywords: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.title,
    description: guide.description,
    author: {
      "@type": "Organization",
      name: guide.author,
    },
    datePublished: guide.datePublished,
    dateModified: guide.dateModified || guide.datePublished,
    url: guide.url,
    about: {
      "@type": "Thing",
      name: "Disc Golf Betting",
    },
    keywords: guide.keywords.join(", "),
    inLanguage: "en-US",
  }
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

// Internal linking suggestions based on content type
export function getInternalLinks(contentType: string, currentSlug?: string) {
  const baseLinks = {
    sportsbooks: [
      { text: "Best Disc Golf Sportsbooks", url: "/sportsbooks" },
      { text: "CoolBet Review", url: "/sportsbooks/coolbet" },
      { text: "Bet365 Review", url: "/sportsbooks/bet365" },
      { text: "Betcris Review", url: "/sportsbooks/betcris" },
    ],
    events: [
      { text: "DGPT Events & Odds", url: "/events" },
      { text: "DGPT Championship Betting", url: "/events/dgpt-championship-2024" },
      { text: "Live Tournament Odds", url: "/events" },
    ],
    players: [
      { text: "Disc Golf Player Profiles", url: "/players" },
      { text: "Paul McBeth Betting", url: "/players/paul-mcbeth" },
      { text: "Paige Pierce Odds", url: "/players/paige-pierce" },
    ],
    guides: [
      { text: "Disc Golf Betting Guides", url: "/guides" },
      { text: "How to Bet on Disc Golf", url: "/guides/how-to-bet" },
      { text: "Betting Strategy Guide", url: "/guides/betting-strategy" },
      { text: "Bankroll Management", url: "/guides/bankroll-management" },
    ],
  }

  switch (contentType) {
    case "homepage":
      return [
        ...baseLinks.sportsbooks.slice(0, 2),
        ...baseLinks.events.slice(0, 2),
        ...baseLinks.players.slice(0, 2),
        ...baseLinks.guides.slice(0, 2),
      ]
    case "sportsbook":
      return [
        ...baseLinks.sportsbooks.filter((link) => !link.url.includes(currentSlug || "")),
        ...baseLinks.guides.slice(0, 2),
        ...baseLinks.events.slice(0, 1),
      ]
    case "event":
      return [
        ...baseLinks.events.filter((link) => !link.url.includes(currentSlug || "")),
        ...baseLinks.players.slice(0, 2),
        ...baseLinks.sportsbooks.slice(0, 2),
      ]
    case "player":
      return [
        ...baseLinks.players.filter((link) => !link.url.includes(currentSlug || "")),
        ...baseLinks.events.slice(0, 2),
        ...baseLinks.guides.slice(1, 3),
      ]
    case "guide":
      return [
        ...baseLinks.guides.filter((link) => !link.url.includes(currentSlug || "")),
        ...baseLinks.sportsbooks.slice(0, 2),
        ...baseLinks.players.slice(0, 1),
      ]
    default:
      return baseLinks.sportsbooks.slice(0, 2)
  }
}
