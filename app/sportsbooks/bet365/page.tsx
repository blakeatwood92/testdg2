import { SportsbookReview } from "@/components/sportsbook-review"
import Link from "next/link"

export default function Bet365ReviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full"></div>
              <h1 className="text-xl font-bold text-green-800">
                DiscGolf<span className="text-yellow-600">Bets</span>
              </h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/sportsbooks" className="text-gray-700 hover:text-green-600 transition-colors">
                All Sportsbooks
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-green-600 transition-colors">
                Events
              </Link>
              <Link href="/players" className="text-gray-700 hover:text-green-600 transition-colors">
                Players
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <SportsbookReview
          name="Bet365"
          bonus="$200 Bonus Bets"
          rating={4.6}
          pros={[
            "Excellent live betting platform with real-time updates",
            "Cash Out feature available on most disc golf bets",
            "Early payout promotions for tournament leaders",
            "Comprehensive international coverage including European events",
            "Strong mobile platform with live streaming",
            "Competitive odds across all disc golf markets",
            "Established reputation with decades of experience",
          ]}
          cons={[
            "Smaller welcome bonus compared to newer competitors",
            "Interface can feel cluttered for new users",
            "Limited disc golf-specific promotions",
            "Withdrawal processing can take 3-5 business days",
          ]}
          bonusTerms={[
            "Available to new customers aged 21+ in eligible regions",
            "Bet $1 and receive $200 in bonus bets",
            "Bonus bets credited within 72 hours of qualifying bet settlement",
            "Bonus bets valid for 7 days from issue date",
            "Minimum qualifying bet odds of -500 or longer",
            "Bonus bets stake not returned with winnings",
          ]}
          markets={[
            "Tournament Outright Winner",
            "Each-Way Betting (Top 3/5)",
            "Live In-Play Betting",
            "Player Matchups",
            "Nationality Betting",
            "Margin of Victory",
            "Playoff Betting",
            "Course Record Props",
            "Weather-Affected Scoring",
            "First Round Leader",
            "Amateur vs Pro Props",
            "Team Event Betting",
          ]}
          oddsExample={[
            { event: "European Open", player: "Eagle McMahon", odds: "+500" },
            { event: "European Open", player: "Simon Lizotte", odds: "+650" },
            { event: "European Open", player: "Ricky Wysocki", odds: "+700" },
            { event: "European Open", player: "Kristin Tattar (FPO)", odds: "+350" },
            { event: "European Open", player: "Eveliina Salonen (FPO)", odds: "+500" },
          ]}
          minDeposit="$10"
          region="Canadian"
          established="2000"
          license="UK Gambling Commission & Multiple Jurisdictions"
          ctaText="Claim $200 Bonus Bets"
          ctaLink="https://www.coolbet.com/en/sports/discgolf"
        />
      </div>
    </div>
  )
}
