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
    markets: [
      "Tournament Outright Winners",
      "Top 3/5/10 Finishes",
      "Player vs Player Matchups",
      "First Round Leaders",
      "Cut/Miss Cut Betting",
      "Nationality Props",
    ],
    oddsExample: [
      { event: "Worlds Championship", player: "Paul McBeth", odds: "+275" },
      { event: "Worlds Championship", player: "Kristin Tattar", odds: "+220" },
      { event: "DGPT Finale", player: "Eagle McMahon", odds: "+400" },
      { event: "European Open", player: "Simon Lizotte", odds: "+350" },
    ],
    minDeposit: "$20",
    region: "Costa Rica",
    established: "1985",
    license: "Costa Rica Gaming License",
    ctaText: "Claim $1,500 Bonus",
    ctaLink: "https://www.coolbet.com/en/sports/discgolf",
  }

  return <SportsbookReview {...betcrisData} />
}
