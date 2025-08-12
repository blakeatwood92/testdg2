"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Shield, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SportsbooksPage() {
  const sportsbooks = [
    {
      name: "CoolBet",
      slug: "coolbet",
      bonus: "$500 Welcome Bonus",
      rating: 4.8,
      highlights: ["Best Overall Choice", "Excellent DGPT Coverage", "Top Mobile App"],
      region: "Global",
      established: "2017",
      minDeposit: "$10",
    },
    {
      name: "Bet365",
      slug: "bet365",
      bonus: "$200 Bonus Bets",
      rating: 4.7,
      highlights: ["Best Live Betting", "Early Payouts", "Cash Out Options"],
      region: "International",
      established: "2000",
      minDeposit: "$10",
    },
    {
      name: "Betcris",
      slug: "betcris",
      bonus: "$300 First Bet Bonus",
      rating: 4.6,
      highlights: ["Best Mobile Experience", "Competitive Odds", "Fast Payouts"],
      region: "Americas",
      established: "1985",
      minDeposit: "$20",
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
              <Link href="/guides" className="text-gray-700 hover:text-green-600 transition-colors">
                Guides
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Best Disc Golf <span className="text-green-600">Sportsbooks</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compare the top-rated sportsbooks for disc golf betting. Find exclusive bonuses, comprehensive DGPT
            coverage, and the best odds for Disc Golf Pro Tour events.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Exclusive Bonuses
            </Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              DGPT Coverage
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Expert Reviews
            </Badge>
          </div>
        </div>

        {/* Sportsbook Reviews */}
        <div className="space-y-8 mb-16">
          {sportsbooks.map((sportsbook, index) => (
            <Card key={sportsbook.name} className="overflow-hidden">
              <div className="grid lg:grid-cols-4 gap-6 p-6">
                {/* Logo & Basic Info */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Image
                      src={`/abstract-geometric-shapes.png?height=80&width=80&query=${sportsbook.name} logo`}
                      alt={`${sportsbook.name} logo`}
                      width={80}
                      height={80}
                      className="rounded"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{sportsbook.name}</h2>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(sportsbook.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{sportsbook.rating}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-center lg:justify-start">
                    <Badge variant="outline" className="text-xs">
                      {sportsbook.region}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Est. {sportsbook.established}
                    </Badge>
                  </div>
                </div>

                {/* Bonus & Features */}
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-green-600 mb-2">{sportsbook.bonus}</h3>
                    <p className="text-sm text-gray-600 mb-3">Minimum Deposit: {sportsbook.minDeposit}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {sportsbook.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      Licensed
                    </div>
                    <div className="flex items-center gap-1">
                      <Smartphone className="w-4 h-4" />
                      Mobile App
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Live Betting
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col justify-center gap-4">
                  <Link href={`/sportsbooks/${sportsbook.slug}`}>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Read Full Review</Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                    onClick={() => window.open("https://www.coolbet.com/en/sports/discgolf", "_blank")}
                  >
                    Claim Bonus
                  </Button>
                  <p className="text-xs text-gray-500 text-center">18+ Terms Apply</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Quick Comparison</CardTitle>
            <CardDescription>Compare key features across all sportsbooks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Sportsbook</th>
                    <th className="text-left py-3">Bonus</th>
                    <th className="text-left py-3">Min Deposit</th>
                    <th className="text-left py-3">Rating</th>
                    <th className="text-left py-3">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {sportsbooks.map((book) => (
                    <tr key={book.name} className="border-b">
                      <td className="py-3 font-medium">{book.name}</td>
                      <td className="py-3 text-green-600">{book.bonus}</td>
                      <td className="py-3">{book.minDeposit}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {book.rating}
                        </div>
                      </td>
                      <td className="py-3">{book.highlights[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* SEO Content */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">How to Choose the Best Disc Golf Sportsbook</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-700">Bonus Value & Terms</h3>
              <p className="text-gray-600 mb-4">
                Look beyond the headline bonus amount. Consider wagering requirements, minimum odds, and time limits.
                Our reviews break down the real value of each welcome offer.
              </p>
              <h3 className="text-lg font-semibold mb-3 text-green-700">DGPT Market Coverage</h3>
              <p className="text-gray-600">
                The best disc golf sportsbooks offer comprehensive Disc Golf Pro Tour coverage with competitive odds on
                tournament winners, top finishes, and player matchups.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-700">Mobile Experience</h3>
              <p className="text-gray-600 mb-4">
                A quality mobile app is essential for live betting during tournaments. Look for fast loading times, easy
                navigation, and live streaming capabilities.
              </p>
              <h3 className="text-lg font-semibold mb-3 text-green-700">Payment Options</h3>
              <p className="text-gray-600">
                Choose sportsbooks with multiple deposit and withdrawal methods, fast payout processing, and low minimum
                deposit requirements to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
