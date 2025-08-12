"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Calendar, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const topSportsbooks = [
    {
      name: "CoolBet",
      bonus: "$2,000 Welcome Bonus",
      rating: 4.9,
      features: ["Live DGPT Odds", "Player Props", "Tournament Futures"],
      region: "Global",
      ctaText: "Claim Bonus",
      highlight: "Best Overall",
    },
    {
      name: "Bet365",
      bonus: "$200 Bonus Bets",
      rating: 4.6,
      features: ["Early Payouts", "Cash Out", "Live Streaming"],
      region: "International",
      ctaText: "Join Now",
      highlight: "Best Live Betting",
    },
    {
      name: "Betcris",
      bonus: "$1,500 Risk-Free Bet",
      rating: 4.7,
      features: ["Same Game Parlays", "Mobile App", "Fast Payouts"],
      region: "Americas",
      ctaText: "Get Started",
      highlight: "Best Mobile",
    },
  ]

  const quickLinks = [
    { title: "Best Odds", icon: TrendingUp, href: "/odds", description: "Compare live DGPT odds" },
    { title: "Events Calendar", icon: Calendar, href: "/events", description: "Upcoming tournaments" },
    { title: "Player Profiles", icon: Users, href: "/players", description: "Stats & betting history" },
    { title: "How to Bet", icon: BookOpen, href: "/guides", description: "Betting tutorials" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full"></div>
              <h1 className="text-xl font-bold text-green-800">
                DiscGolf<span className="text-yellow-600">Bets</span>
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/sportsbooks" className="text-gray-700 hover:text-green-600 transition-colors">
                Sportsbooks
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-green-600 transition-colors">
                Events
              </Link>
              <Link href="/players" className="text-gray-700 hover:text-green-600 transition-colors">
                Players
              </Link>
              <Link href="/guides" className="text-gray-700 hover:text-green-600 transition-colors">
                Guides
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              #1 Disc Golf <span className="text-green-600">Betting Bonuses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find the best disc golf betting bonuses, DGPT odds, and exclusive sportsbook offers. Your ultimate
              resource for Disc Golf Pro Tour betting with expert analysis, player stats, and winning strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Disc Golf Betting
              </Badge>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                DGPT Odds
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Pro Tour Betting
              </Badge>
            </div>
          </div>

          {/* Featured Sportsbooks */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Top Disc Golf Sportsbooks</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {topSportsbooks.map((sportsbook, index) => (
                <Card
                  key={sportsbook.name}
                  className={`relative overflow-hidden transition-all hover:shadow-xl ${index === 0 ? "ring-2 ring-green-500 scale-105" : ""}`}
                >
                  {sportsbook.highlight && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-green-500 to-yellow-500 text-white px-3 py-1 text-sm font-semibold">
                      {sportsbook.highlight}
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{sportsbook.name}</CardTitle>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{sportsbook.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-lg font-semibold text-green-600">
                      {sportsbook.bonus}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Key Features:</p>
                        <ul className="space-y-1">
                          {sportsbook.features.map((feature) => (
                            <li key={feature} className="text-sm flex items-center">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{sportsbook.region}</Badge>
                        <Button
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => window.open("https://www.coolbet.com/en/sports/discgolf", "_blank")}
                        >
                          {sportsbook.ctaText}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore Disc Golf Betting</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {quickLinks.map((link) => (
                <Link key={link.title} href={link.href}>
                  <Card className="h-full transition-all hover:shadow-lg hover:scale-105 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <link.icon className="w-12 h-12 mx-auto mb-4 text-green-600" />
                      <h3 className="font-semibold text-lg mb-2">{link.title}</h3>
                      <p className="text-sm text-gray-600">{link.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* SEO Content Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Choose Our Disc Golf Betting Platform?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-700">Exclusive Bonuses & Offers</h3>
                <p className="text-gray-600 mb-4">
                  Access exclusive disc golf betting bonuses from top-rated sportsbooks. Our partnerships ensure you get
                  the best welcome offers, deposit matches, and risk-free bets available for DGPT betting.
                </p>
                <h3 className="text-lg font-semibold mb-3 text-green-700">Live DGPT Odds & Analysis</h3>
                <p className="text-gray-600">
                  Stay ahead with real-time Disc Golf Pro Tour odds, expert predictions, and comprehensive tournament
                  analysis. From Paul McBeth to Paige Pierce, get insights on all top players.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-700">Expert Betting Strategies</h3>
                <p className="text-gray-600 mb-4">
                  Learn winning disc golf betting strategies from our expert analysts. Understand course conditions,
                  weather impacts, and player form to make informed betting decisions.
                </p>
                <h3 className="text-lg font-semibold mb-3 text-green-700">Complete Tournament Coverage</h3>
                <p className="text-gray-600">
                  Full coverage of every DGPT event with detailed player profiles, historical performance data, and live
                  weather conditions for tournament locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full"></div>
                <span className="font-bold">DiscGolfBets</span>
              </div>
              <p className="text-gray-400 text-sm">The #1 destination for disc golf betting bonuses and DGPT odds.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sportsbooks</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/sportsbooks/coolbet" className="hover:text-white">
                    CoolBet Review
                  </Link>
                </li>
                <li>
                  <Link href="/sportsbooks/bet365" className="hover:text-white">
                    Bet365 Review
                  </Link>
                </li>
                <li>
                  <Link href="/sportsbooks/betcris" className="hover:text-white">
                    Betcris Review
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/guides/how-to-bet" className="hover:text-white">
                    How to Bet
                  </Link>
                </li>
                <li>
                  <Link href="/guides/betting-strategy" className="hover:text-white">
                    Betting Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/guides/odds-explained" className="hover:text-white">
                    Odds Explained
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/responsible-gambling" className="hover:text-white">
                    Responsible Gambling
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p className="mb-2">18+ Only. Gambling Problem? Call 1-800-GAMBLER. Please gamble responsibly.</p>
            <p>© 2024 DiscGolfBets. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
