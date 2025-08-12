import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, TrendingUp, Target, DollarSign, Map, Users } from "lucide-react"
import Link from "next/link"

export default function GuidesPage() {
  const guides = [
    {
      title: "How to Bet on Disc Golf",
      slug: "how-to-bet",
      description: "Complete beginner's guide to disc golf betting with step-by-step instructions and examples.",
      icon: BookOpen,
      difficulty: "Beginner",
      readTime: "8 min read",
      topics: ["Getting Started", "Account Setup", "First Bets", "Basic Markets"],
    },
    {
      title: "Understanding Betting Odds",
      slug: "odds-explained",
      description: "Master American, decimal, and fractional odds formats with practical examples.",
      icon: TrendingUp,
      difficulty: "Beginner",
      readTime: "6 min read",
      topics: ["Odds Formats", "Probability", "Value Betting", "Line Movement"],
    },
    {
      title: "Disc Golf Betting Strategy",
      slug: "betting-strategy",
      description: "Advanced strategies for profitable disc golf betting including player analysis and course factors.",
      icon: Target,
      difficulty: "Advanced",
      readTime: "12 min read",
      topics: ["Player Form", "Course Analysis", "Weather Impact", "Value Identification"],
    },
    {
      title: "Bankroll Management",
      slug: "bankroll-management",
      description:
        "Essential money management techniques to protect your betting funds and maximize long-term profits.",
      icon: DollarSign,
      difficulty: "Intermediate",
      readTime: "10 min read",
      topics: ["Unit Sizing", "Risk Management", "Staking Plans", "Record Keeping"],
    },
    {
      title: "Course Analysis Guide",
      slug: "course-analysis",
      description: "Learn how different course types affect player performance and betting opportunities.",
      icon: Map,
      difficulty: "Intermediate",
      readTime: "9 min read",
      topics: ["Course Types", "Player Matchups", "Historical Data", "Weather Factors"],
    },
    {
      title: "Player Analysis & Research",
      slug: "player-research",
      description: "Deep dive into evaluating player form, strengths, weaknesses, and betting value.",
      icon: Users,
      difficulty: "Advanced",
      readTime: "15 min read",
      topics: ["Form Analysis", "Head-to-Head Records", "Course History", "Mental Game"],
    },
  ]

  const featuredTips = [
    {
      title: "Start Small",
      description:
        "Begin with small bets while learning the ropes. Focus on understanding the sport and betting markets.",
    },
    {
      title: "Track Everything",
      description: "Keep detailed records of all bets including reasoning, outcomes, and lessons learned.",
    },
    {
      title: "Shop for Lines",
      description: "Compare odds across multiple sportsbooks to ensure you're getting the best value on every bet.",
    },
    {
      title: "Weather Matters",
      description:
        "Wind, rain, and temperature significantly impact disc golf performance. Factor weather into all bets.",
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
              <Link href="/events" className="text-gray-700 hover:text-green-600 transition-colors">
                Events
              </Link>
              <Link href="/players" className="text-gray-700 hover:text-green-600 transition-colors">
                Players
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Disc Golf <span className="text-green-600">Betting Guides</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Master disc golf betting with our comprehensive guides and strategies. From beginner basics to advanced
            techniques, learn everything you need to become a profitable disc golf bettor.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Betting Strategy
            </Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              Money Management
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Course Analysis
            </Badge>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Betting Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTips.map((tip, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-green-700">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Betting Guides Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Complete Betting Guides</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <Card key={guide.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <guide.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{guide.title}</CardTitle>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <Badge
                            variant="outline"
                            className={
                              guide.difficulty === "Beginner"
                                ? "border-green-200 text-green-700"
                                : guide.difficulty === "Intermediate"
                                  ? "border-yellow-200 text-yellow-700"
                                  : "border-red-200 text-red-700"
                            }
                          >
                            {guide.difficulty}
                          </Badge>
                          <span>{guide.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 text-sm">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {guide.topics.map((topic, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Link href={`/guides/${guide.slug}`}>
                      <Button className="w-full bg-green-600 hover:bg-green-700">Read Guide</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Recommended Learning Path</CardTitle>
            <CardDescription>Follow this sequence to build your disc golf betting expertise</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Start Here</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Begin with "How to Bet" and "Odds Explained" to understand the fundamentals.
                </p>
                <div className="space-y-2">
                  <Link href="/guides/how-to-bet">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      How to Bet
                    </Button>
                  </Link>
                  <Link href="/guides/odds-explained">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Odds Explained
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Build Skills</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn money management and course analysis to improve your betting approach.
                </p>
                <div className="space-y-2">
                  <Link href="/guides/bankroll-management">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Bankroll Management
                    </Button>
                  </Link>
                  <Link href="/guides/course-analysis">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Course Analysis
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Master Advanced</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Develop advanced strategies and player analysis skills for consistent profits.
                </p>
                <div className="space-y-2">
                  <Link href="/guides/betting-strategy">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Betting Strategy
                    </Button>
                  </Link>
                  <Link href="/guides/player-research">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Player Research
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-yellow-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Betting?</h2>
          <p className="text-lg mb-6 opacity-90">
            Put your knowledge to work with exclusive bonuses from top disc golf sportsbooks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sportsbooks/coolbet">
              <Button className="bg-white text-green-600 hover:bg-gray-100">CoolBet - $2,000 Bonus</Button>
            </Link>
            <Link href="/sportsbooks/bet365">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Bet365 - $200 Bonus
              </Button>
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
