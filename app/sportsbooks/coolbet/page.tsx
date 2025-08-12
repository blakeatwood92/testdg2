import { SportsbookReview } from "@/components/sportsbook-review"

export default function CoolBetReviewPage() {
  const coolbetData = {
    name: "CoolBet",
    rating: 4.9,
    bonus: "$2,000 Welcome Bonus",
    highlight: "Best Overall Disc Golf Betting Experience",
    pros: [
      "Extensive DGPT tournament coverage",
      "Competitive odds on all major events",
      "Excellent mobile app with live betting",
      "Fast withdrawal processing",
      "24/7 customer support",
      "Wide range of player prop bets",
    ],
    cons: [
      "Limited availability in some regions",
      "Bonus wagering requirements can be high",
      "Live streaming not available for all events",
    ],
    bonusTerms: [
      "New customers only",
      "Minimum deposit of $20 required",
      "30x wagering requirement on bonus funds",
      "Valid for 30 days from account opening",
      "Maximum bet of $5 while bonus is active",
    ],
    bettingMarkets: [
      "Tournament Winners",
      "Top 5/10 Finishes",
      "Head-to-Head Matchups",
      "Round Leader Betting",
      "Hole-in-One Props",
      "Weather-Related Props",
    ],
    sampleOdds: [
      { event: "DGPT Championship", player: "Paul McBeth", odds: "+250", market: "Tournament Winner" },
      { event: "DGPT Championship", player: "Ricky Wysocki", odds: "+300", market: "Tournament Winner" },
      { event: "DGPT Championship", player: "Paige Pierce", odds: "+180", market: "FPO Winner" },
      { event: "World Championships", player: "Calvin Heimburg", odds: "+450", market: "Top 5 Finish" },
    ],
    quickFacts: {
      founded: "2009",
      headquarters: "Estonia",
      license: "Estonian Tax and Customs Board",
      payoutTime: "24-48 hours",
      minDeposit: "$10",
      currencies: "USD, EUR, GBP",
    },
  }

  return <SportsbookReview {...coolbetData} />
}
