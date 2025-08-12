import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

export default function OddsExplainedPage() {
  const oddsFormats = [
    {
      format: "American Odds",
      description: "Most common in the US, uses + and - symbols",
      examples: [
        { odds: "+450", meaning: "Bet $100 to win $450", probability: "18.2%" },
        { odds: "-200", meaning: "Bet $200 to win $100", probability: "66.7%" },
        { odds: "+150", meaning: "Bet $100 to win $150", probability: "40%" },
      ],
      calculation: "Positive odds: (Odds/100) x Stake = Profit | Negative odds: (100/Odds) x Stake = Profit",
    },
    {
      format: "Decimal Odds",
      description: "Popular in Europe, shows total return including stake",
      examples: [
        { odds: "5.50", meaning: "Bet $100 to return $550", probability: "18.2%" },
        { odds: "1.50", meaning: "Bet $100 to return $150", probability: "66.7%" },
        { odds: "2.50", meaning: "Bet $100 to return $250", probability: "40%" },
      ],
      calculation: "Decimal Odds x Stake = Total Return | (Decimal Odds - 1) x Stake = Profit",
    },
    {
      format: "Fractional Odds",
      description: "Traditional UK format, shows profit relative to stake",
      examples: [
        { odds: "9/2", meaning: "Win $9 for every $2 bet", probability: "18.2%" },
        { odds: "1/2", meaning: "Win $1 for every $2 bet", probability: "66.7%" },
        { odds: "3/2", meaning: "Win $3 for every $2 bet", probability: "40%" },
      ],
      calculation: "(Numerator/Denominator) x Stake = Profit",
    },
  ]

  const valueExamples = [
    {
      scenario: "Paul McBeth at DGPT Championship",
      bookmakerOdds: "+450 (18.2% implied probability)",
      yourAssessment: "25% chance to win",
      verdict: "Good Value Bet",
      explanation: "Your assessment gives him better odds than the bookmaker, indicating potential value.",
      color: "text-green-600",
    },
    {
      scenario: "Ricky Wysocki at Wooded Course",
      bookmakerOdds: "+300 (25% implied probability)",
      yourAssessment: "20% chance to win",
      verdict: "No Value",
      explanation: "Bookmaker odds are better than your assessment, suggesting the bet lacks value.",
      color: "text-red-600",
    },
    {
      scenario: "Paige Pierce in FPO Field",
      bookmakerOdds: "+200 (33.3% implied probability)",
      yourAssessment: "35% chance to win",
      verdict: "Slight Value",
      explanation: "Small edge in your favor, but consider bet size carefully.",
      color: "text-yellow-600",
    },
  ]

  const lineMovementFactors = [
    {
      factor: "Sharp Money",
      description: "Professional bettors placing large, informed bets",
      impact: "Usually moves lines toward the 'true' odds",
      example: "Paul McBeth odds shorten from +500 to +400 after sharp action",
    },
    {
      factor: "Public Betting",
      description: "Recreational bettors backing popular players",
      impact: "Can create value on less popular but skilled players",
      example: "Simon Lizotte gets heavy public backing, creating value on other players",
    },
    {
      factor: "Injury News",
      description: "Player health updates affecting performance expectations",
      impact: "Immediate and significant line movement",
      example: "Calvin Heimburg injury report moves his odds from +600 to +1200",
    },
    {
      factor: "Weather Updates",
      description: "Forecast changes affecting course conditions",
      impact: "Favors certain playing styles over others",
      example: "Wind forecast benefits forehand specialists like Ricky Wysocki",
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
            Understanding <span className="text-green-600">Betting Odds</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Master the three main odds formats, learn to calculate payouts, and discover how to identify value bets in
            disc golf betting markets.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span>📖 6 min read</span>
            <span>•</span>
            <span>🎯 Beginner Level</span>
            <span>•</span>
            <span>🧮 Includes Calculator</span>
          </div>
        </div>

        {/* Odds Formats */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Three Main Odds Formats</h2>
          <div className="space-y-8">
            {oddsFormats.map((format, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Calculator className="w-6 h-6 text-green-600" />
                    {format.format}
                  </CardTitle>
                  <CardDescription className="text-base">{format.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4">Examples:</h4>
                      <div className="space-y-3">
                        {format.examples.map((example, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-lg text-green-600">{example.odds}</span>
                              <Badge variant="outline">{example.probability}</Badge>
                            </div>
                            <p className="text-sm text-gray-700">{example.meaning}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">How to Calculate:</h4>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700">{format.calculation}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Implied Probability */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="w-6 h-6 text-green-600" />
              Understanding Implied Probability
            </CardTitle>
            <CardDescription>
              Odds represent the bookmaker's assessment of how likely an outcome is to occur
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Quick Conversion Guide:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>+100 (Even odds)</span>
                    <span className="font-semibold">50%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>+200</span>
                    <span className="font-semibold">33.3%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>+400</span>
                    <span className="font-semibold">20%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>-200</span>
                    <span className="font-semibold">66.7%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Calculation Formulas:</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-800 mb-2">Positive Odds (+)</p>
                    <p className="text-sm">Probability = 100 ÷ (Odds + 100)</p>
                    <p className="text-xs text-gray-600 mt-1">Example: +400 = 100 ÷ (400 + 100) = 20%</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-800 mb-2">Negative Odds (-)</p>
                    <p className="text-sm">Probability = |Odds| ÷ (|Odds| + 100)</p>
                    <p className="text-xs text-gray-600 mt-1">Example: -200 = 200 ÷ (200 + 100) = 66.7%</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Value Betting */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Identifying Value Bets</h2>
          <p className="text-gray-600 mb-6">
            A value bet occurs when you believe the true probability of an outcome is higher than what the odds suggest.
            Here are some disc golf examples:
          </p>
          <div className="space-y-6">
            {valueExamples.map((example, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-lg">{example.scenario}</h3>
                    <Badge className={example.color}>{example.verdict}</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Bookmaker Assessment:</p>
                      <p className="font-medium">{example.bookmakerOdds}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Your Assessment:</p>
                      <p className="font-medium">{example.yourAssessment}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{example.explanation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Line Movement */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Line Movement</h2>
          <p className="text-gray-600 mb-6">
            Betting odds change constantly based on various factors. Understanding why lines move can help you time your
            bets better:
          </p>
          <div className="grid lg:grid-cols-2 gap-6">
            {lineMovementFactors.map((factor, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{factor.factor}</CardTitle>
                  <CardDescription>{factor.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Impact:</p>
                      <p className="text-sm text-gray-600">{factor.impact}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-700">Example:</p>
                      <p className="text-sm text-gray-600">{factor.example}</p>
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
              Ready for Advanced Strategies?
            </CardTitle>
            <CardDescription>Now that you understand odds, learn how to use them effectively</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-3">Betting Strategy</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn advanced techniques for finding value and making profitable bets.
                </p>
                <Link href="/guides/betting-strategy">
                  <Button className="bg-green-600 hover:bg-green-700">Strategy Guide</Button>
                </Link>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-3">Bankroll Management</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Protect your funds with proper money management techniques.
                </p>
                <Link href="/guides/bankroll-management">
                  <Button variant="outline">Money Management</Button>
                </Link>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-3">Course Analysis</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Understand how different courses affect player performance and odds.
                </p>
                <Link href="/guides/course-analysis">
                  <Button variant="outline">Course Guide</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-yellow-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Put Your Knowledge to Work</h2>
          <p className="text-lg mb-6 opacity-90">
            Start applying your odds knowledge with these top disc golf sportsbooks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sportsbooks/coolbet">
              <Button className="bg-white text-green-600 hover:bg-gray-100">CoolBet - Best Odds</Button>
            </Link>
            <Link href="/sportsbooks/betcris">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Betcris - $1,500 Risk-Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
