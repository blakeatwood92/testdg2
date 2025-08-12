import { SportsbookReview } from "@/components/sportsbook-review"

export default function BetcrisReviewPage() {
  const betcrisData = {
    name: "Betcris",
    rating: 4.7,
    bonus: "$1,500 Risk-Free Bet",
    highlight: "Best Mobile Disc Golf Betting",
    pros: [
      "Outstanding mobile betting platform",
      "Strong coverage of DGPT events",
      "Competitive player prop markets",
      "Fast and secure payment processing",
      "Excellent customer service in multiple languages",
      "Regular promotional offers for disc golf",
    ],
    cons: [
      "Limited live streaming options",
      "Fewer betting markets than some competitors",
      "Geographic restrictions in certain areas",
    ],
    bonusTerms: [
      "Available to new customers only",
      "Minimum deposit of $25 required",
      "Risk-free bet up to $1,500 on first wager",
      "If first bet loses, receive site credit",
      "Site credit must be used within 14 days",
    ],
    bettingMarkets: [
      "Tournament Outright Winners",
      "Top 3/5/10 Finishes",
      "Player vs Player Matchups",
      "First Round Leaders",
      "Cut/Miss Cut Betting",
      "Nationality Props",
    ],
    sampleOdds: [
      { event: "Worlds Championship", player: "Paul McBeth", odds: "+275", market: "Tournament Winner" },
      { event: "Worlds Championship", player: "Kristin Tattar", odds: "+220", market: "FPO Winner" },
      { event: "DGPT Finale", player: "Eagle McMahon", odds: "+400", market: "Tournament Winner" },
      { event: "European Open", player: "Simon Lizotte", odds: "+350", market: "Top 5 Finish" },
    ],
    quickFacts: {
      founded: "1985",
      headquarters: "Costa Rica",
      license: "Costa Rica Gaming License",
      payoutTime: "24-72 hours",
      minDeposit: "$20",
      currencies: "USD, EUR",
    },
  }

  return <SportsbookReview {...betcrisData} />
}
