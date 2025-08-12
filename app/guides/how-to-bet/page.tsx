import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HowToBetPage() {
  const bettingSteps = [
    {
      step: 1,
      title: "Choose a Sportsbook",
      description: "Select a reputable sportsbook that offers disc golf betting markets.",
      details: [
        "Look for licensed operators with good reputations",
        "Compare welcome bonuses and promotions",
        "Check available disc golf markets and odds",
        "Ensure mobile app availability for live betting",
      ],
    },
    {
      step: 2,
      title: "Create Your Account",
      description: "Sign up and verify your identity to start betting legally.",
      details: [
        "Provide accurate personal information",
        "Verify your identity with required documents",
        "Set up secure login credentials",
        "Enable two-factor authentication for security",
      ],
    },
    {
      step: 3,
      title: "Make Your First Deposit",
      description: "Fund your account to claim bonuses and place bets.",
      details: [
        "Choose from available payment methods",
        "Meet minimum deposit requirements for bonuses",
        "Check for deposit match promotions",
        "Set deposit limits for responsible gambling",
      ],
    },
    {
      step: 4,
      title: "Find Disc Golf Markets",
      description: "Navigate to disc golf betting sections and explore available markets.",
      details: [
        "Look under 'Other Sports' or 'Specialty Sports'",
        "Check for DGPT tournament listings",
        "Explore different bet types available",
        "Compare odds across different events",
      ],
    },
    {
      step: 5,
      title: "Place Your First Bet",
      description: "Select your bet, enter stake amount, and confirm your wager.",
      details: [
        "Start with small amounts while learning",
        "Double-check your selections before confirming",
        "Understand the potential payout",
        "Keep records of all bets placed",
      ],
    },
  ]

  const betTypes = [
    {
      name: "Tournament Winner",
      description: "Bet on which player will win the entire tournament",
      example: "Paul McBeth to win DGPT Championship at +450",
      difficulty: "Beginner",
    },
    {
      name: "Top 3/5/10 Finish",
      description: "Bet on a player to finish in the top positions",
      example: "Ricky Wysocki to finish Top 5 at -110",
      difficulty: "Beginner",
    },
    {
      name: "Head-to-Head Matchup",
      description: "Bet on which player will finish higher between two players",
      example: "Calvin Heimburg vs Eagle McMahon (-120/+100)",
      difficulty: "Intermediate",
    },
    {
      name: "Round Leader",
      description: "Bet on who will lead after a specific round",
      example: "Gannon Buhr to lead after Round 1 at +800",
      difficulty: "Intermediate",
    },
    {
      name: "Prop Bets",
      description: "Special bets on specific outcomes or achievements",
      example: "Will there be a hole-in-one? Yes (+150) / No (-200)",
      difficulty: "Advanced",
    },
    {
      name: "Futures",
      description: "Long-term bets on season-long outcomes",
      example: "Paul McBeth to win Player of the Year at +200",
      difficulty: "Advanced",
    },
  ]

  const commonMistakes = [
    {
      mistake: "Betting Too Much Too Soon",
      solution: "Start with small bets (1-2% of bankroll) while learning the sport and betting markets.",
    },
    {
      mistake: "Ignoring Weather Conditions",
      solution: "Always check weather forecasts as wind and rain significantly impact disc golf performance.",
    },
    {
      mistake: "Betting on Favorites Only",
      solution: "Look for value in underdogs, especially players with good course history or recent form.",
    },
    {
      mistake: "Not Shopping for Best Odds",
      solution: "Compare odds across multiple sportsbooks to maximize potential returns on winning bets.",
    },
  ]

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
              <Link href="/guides" className="text-gray-700 hover:text-green-600 transition-colors">
                All Guides
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-green-600 transition-colors">
                Events
              </Link>
              <Link href="/sportsbooks" className="text-gray-700 hover:text-green-600 transition-colors">
                Sportsbooks
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">Beginner Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to Bet on <span className="text-green-600">Disc Golf</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Complete step-by-step guide for beginners to start betting on disc golf tournaments. Learn the basics,
            understand different bet types, and avoid common mistakes.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span>📖 8 min read</span>
            <span>•</span>
            <span>🎯 Beginner Level</span>
            <span>•</span>
            <span>✅ Step-by-Step</span>
          </div>
        </div>

        {/* Getting Started Steps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Getting Started: 5 Simple Steps</h2>
          <div className="space-y-8">
            {bettingSteps.map((step) => (
              <Card key={step.step} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <CardDescription className="text-base">{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {step.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bet Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Disc Golf Bets</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {betTypes.map((bet, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{bet.name}</CardTitle>
                      <CardDescription className="mt-2">{bet.description}</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        bet.difficulty === "Beginner"
                          ? "border-green-200 text-green-700"
                          : bet.difficulty === "Intermediate"
                            ? "border-yellow-200 text-yellow-700"
                            : "border-red-200 text-red-700"
                      }
                    >
                      {bet.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-700">Example:</p>
                    <p className="text-sm text-gray-600 mt-1">{bet.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Beginner Mistakes to Avoid</h2>
          <div className="space-y-6">
            {commonMistakes.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 text-red-700">{item.mistake}</h3>
                      <p className="text-gray-600">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              What's Next?
            </CardTitle>
            <CardDescription>Continue your disc golf betting education with these guides</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-3">Understand the Odds</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn how to read and calculate betting odds to identify value bets.
                </p>
                <Link href="/guides/odds-explained">
                  <Button className="bg-green-600 hover:bg-green-700">Read Odds Guide</Button>
                </Link>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-3">Manage Your Money</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Essential bankroll management to protect your funds and bet responsibly.
                </p>
                <Link href="/guides/bankroll-management">
                  <Button variant="outline">Bankroll Guide</Button>
                </Link>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-3">Find the Best Sportsbooks</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Compare top sportsbooks offering disc golf betting with exclusive bonuses.
                </p>
                <Link href="/sportsbooks">
                  <Button variant="outline">View Sportsbooks</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-yellow-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Place Your First Bet?</h2>
          <p className="text-lg mb-6 opacity-90">
            Start with these trusted sportsbooks offering exclusive disc golf betting bonuses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sportsbooks/coolbet">
              <Button className="bg-white text-green-600 hover:bg-gray-100">CoolBet - $2,000 Welcome Bonus</Button>
            </Link>
            <Link href="/sportsbooks/bet365">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Bet365 - $200 Bonus Bets
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
