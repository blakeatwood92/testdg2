import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, TrendingUp, Users, Cloud } from "lucide-react"
import Link from "next/link"

export default function BettingStrategyPage() {
  const strategies = [
    {
      title: "Player Form Analysis",
      icon: Users,
      description: "Evaluate recent performance trends and momentum",
      techniques: [
        "Track last 5 tournament finishes",
        "Look for improving or declining trends",
        "Consider confidence and mental state",
        "Analyze performance in similar conditions",
      ],
      example: "Gannon Buhr showing consistent top-5 finishes suggests good form despite longer odds",
    },
    {
      title: "Course Matchup Analysis",
      icon: Target,
      description: "Match player strengths to specific course characteristics",
      techniques: [
        "Identify course type (wooded, open, mixed)",
        "Consider elevation changes and terrain",
        "Match to player throwing preferences",
        "Review historical performance at venue",
      ],
      example: "Simon Lizotte excels on open, distance-heavy courses but struggles on tight, wooded layouts",
    },
    {
      title: "Weather Impact Assessment",
      icon: Cloud,
      description: "Factor weather conditions into betting decisions",
      techniques: [
        "Check wind speed and direction forecasts",
        "Consider rain impact on course conditions",
        "Evaluate temperature effects on disc flight",
        "Assess player adaptability to conditions",
      ],
      example: "Strong winds favor forehand specialists like Ricky Wysocki over primarily backhand players",
    },
    {
      title: "Value Line Shopping",
      icon: TrendingUp,
      description: "Find the best odds across multiple sportsbooks",
      techniques: [
        "Compare odds at 3+ sportsbooks",
        "Track line movements and timing",
        "Identify soft lines from recreational books",
        "Consider different bet types for same outcome",
      ],
      example: "Paul McBeth at +450 vs +400 - the extra 50 points significantly impacts long-term profitability",
    },
  ]

  const advancedTechniques = [
    {
      category: "Contrarian Betting",
      description: "Bet against public sentiment when value exists",
      examples: [
        "Fade overhyped players with inflated odds",
        "Back consistent performers getting overlooked",
        "Target players with recent bad luck but good fundamentals",
      ],
    },
    {
      category: "Situational Spots",
      description: "Identify specific scenarios that create betting value",
      examples: [
        "Players returning from injury with deflated odds",
        "Course specialists at their favorite venues",
        "Revenge spots after poor previous performances",
      ],
    },
    {
      category: "Correlated Betting",
      description: "Combine related bets for increased value",
      examples: [
        "Bet tournament winner + top nationality if same player",
        "Combine head-to-head with outright winner bets",
        "Weather-dependent player props with game totals",
      ],
    },
  ]

  const commonScenarios = [
    {
      scenario: "Favorite in Poor Weather",
      analysis: "Heavy favorites often struggle in difficult conditions as the field becomes more level",
      strategy: "Look for value on mid-tier players who handle adversity well",
      example: "Paul McBeth at -200 in 25mph winds - consider backing Calvin Heimburg at +600 instead",
    },
    {
      scenario: "Course Debut",
      analysis: "Players competing at a venue for the first time face unknown challenges",
      strategy: "Favor experienced players with course history over talented newcomers",
      example: "New DGPT venue - back players who've played the course in other events",
    },
    {
      scenario: "Back-to-Back Tournaments",
      analysis: "Physical and mental fatigue can impact performance in consecutive events",
      strategy: "Consider rest advantage and travel factors between tournaments",
      example: "Players traveling cross-country between weekend events may underperform",
    },
    {
      scenario: "Playoff Race Implications",
      analysis: "End-of-season positioning can motivate or pressure players differently",
      strategy: "Identify players with everything to play for vs those already qualified",
      example: "Bubble players fighting for DGPT Championship spots often overperform",
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
          <Badge className="mb-4 bg-red-100 text-red-800">Advanced Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Disc Golf <span className="text-green-600">Betting Strategy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Advanced strategies for profitable disc golf betting. Learn to analyze player form, course matchups, weather
            impact, and identify value opportunities that casual bettors miss.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span>📖 12 min read</span>
            <span>•</span>
            <span>🎯 Advanced Level</span>
            <span>•</span>
            <span>💡 Pro Strategies</span>
          </div>
        </div>

        {/* Core Strategies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Betting Strategies</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <strategy.icon className="w-6 h-6 text-green-600" />
                    </div>
                    {strategy.title}
                  </CardTitle>
                  <CardDescription className="text-base">{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Key Techniques:</h4>
                      <ul className="space-y-2">
                        {strategy.techniques.map((technique, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{technique}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-blue-800 mb-1">Example:</p>
                      <p className="text-sm text-gray-700">{strategy.example}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advanced Techniques */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Techniques</h2>
          <div className="space-y-6">
            {advancedTechniques.map((technique, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{technique.category}</CardTitle>
                  <CardDescription className="text-base">{technique.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {technique.examples.map((example, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700">{example}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Common Scenarios */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Betting Scenarios</h2>
          <div className="space-y-6">
            {commonScenarios.map((scenario, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-green-700">{scenario.scenario}</h3>
                      <p className="text-sm text-gray-600">{scenario.analysis}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Strategy:</h4>
                      <p className="text-sm text-gray-700">{scenario.strategy}</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2 text-yellow-800">Example:</h4>
                      <p className="text-sm text-gray-700">{scenario.example}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategy Checklist */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Pre-Bet Strategy Checklist</CardTitle>
            <CardDescription>Run through this checklist before placing any disc golf bet</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-green-700">Player Analysis</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Reviewed last 5 tournament results</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Checked recent form and momentum</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Analyzed course history at venue</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Considered playing style vs course type</span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-green-700">Market Analysis</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Compared odds at multiple sportsbooks</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Checked weather forecast for tournament</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Identified value vs implied probability</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Confirmed bet size fits bankroll plan</span>
                  </label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              Master the Fundamentals
            </CardTitle>
            <CardDescription>Combine strategy with solid fundamentals for long-term success</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-3">Bankroll Management</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Protect your funds with proper money management and unit sizing.
                </p>
                <Link href="/guides/bankroll-management">
                  <Button className="bg-green-600 hover:bg-green-700">Money Management</Button>
                </Link>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-3">Course Analysis</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Deep dive into how different course types affect player performance.
                </p>
                <Link href="/guides/course-analysis">
                  <Button variant="outline">Course Guide</Button>
                </Link>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-3">Player Research</h3>
                <p className="text-sm text-gray-600 mb-4">Advanced techniques for evaluating player form and value.</p>
                <Link href="/guides/player-research">
                  <Button variant="outline">Research Guide</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-yellow-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Apply Your Strategy</h2>
          <p className="text-lg mb-6 opacity-90">
            Use these advanced strategies with the best disc golf betting sites.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sportsbooks/coolbet">
              <Button className="bg-white text-green-600 hover:bg-gray-100">CoolBet - Best Overall</Button>
            </Link>
            <Link href="/events">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                View Live Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
