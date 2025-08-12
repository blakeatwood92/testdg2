// Affiliate tracking and link management
export interface AffiliateLink {
  sportsbook: string
  baseUrl: string
  affiliateCode: string
  campaign?: string
}

const affiliateLinks: Record<string, AffiliateLink> = {
  coolbet: {
    sportsbook: "CoolBet",
    baseUrl: "https://coolbet.com",
    affiliateCode: "DISCGOLF2024",
    campaign: "disc-golf-betting",
  },
  bet365: {
    sportsbook: "Bet365",
    baseUrl: "https://bet365.com",
    affiliateCode: "DGBETS365",
    campaign: "dgpt-betting",
  },
  betcris: {
    sportsbook: "Betcris",
    baseUrl: "https://betcris.com",
    affiliateCode: "DGBETCRIS",
    campaign: "disc-golf-bonus",
  },
}

export function generateAffiliateUrl(
  sportsbook: string,
  source = "website",
  medium = "referral",
  content?: string,
): string {
  const affiliate = affiliateLinks[sportsbook.toLowerCase()]
  if (!affiliate) {
    console.warn(`No affiliate link configured for ${sportsbook}`)
    return "#"
  }

  const params = new URLSearchParams({
    ref: affiliate.affiliateCode,
    utm_source: source,
    utm_medium: medium,
    utm_campaign: affiliate.campaign || "disc-golf-betting",
  })

  if (content) {
    params.set("utm_content", content)
  }

  return `${affiliate.baseUrl}?${params.toString()}`
}

export function trackAffiliateClick(sportsbook: string, source: string, content?: string) {
  // In production, this would send tracking data to analytics
  if (typeof window !== "undefined") {
    // Client-side tracking
    console.log("Affiliate click tracked:", {
      sportsbook,
      source,
      content,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
    })

    // Send to analytics service (Google Analytics, etc.)
    if (window.gtag) {
      window.gtag("event", "affiliate_click", {
        sportsbook,
        source,
        content,
      })
    }
  }
}

export function getSportsbookInfo(sportsbook: string) {
  const info = {
    coolbet: {
      name: "CoolBet",
      bonus: "$2,000 Welcome Bonus",
      rating: 4.9,
      highlight: "Best Overall",
      features: ["Live DGPT Odds", "Player Props", "Tournament Futures"],
    },
    bet365: {
      name: "Bet365",
      bonus: "$200 Bonus Bets",
      rating: 4.6,
      highlight: "Best Live Betting",
      features: ["Early Payouts", "Cash Out", "Live Streaming"],
    },
    betcris: {
      name: "Betcris",
      bonus: "$1,500 Risk-Free Bet",
      rating: 4.7,
      highlight: "Best Mobile",
      features: ["Same Game Parlays", "Mobile App", "Fast Payouts"],
    },
  }

  return info[sportsbook.toLowerCase() as keyof typeof info]
}
