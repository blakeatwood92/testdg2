"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, X, TrendingUp, Shield, Smartphone } from "lucide-react"
import Image from "next/image"

interface SportsbookReviewProps {
  name: string
  bonus: string
  rating: number
  pros: string[]
  cons: string[]
  bonusTerms: string[]
  markets: string[]
  oddsExample: {
    event: string
    player: string
    odds: string
  }[]
  minDeposit: string
  region: string
  established: string
  license: string
  ctaText: string
  ctaLink: string
}

export function SportsbookReview({
  name,
  bonus,
  rating,
  pros,
  cons,
  bonusTerms,
  markets,
  oddsExample,
  minDeposit,
  region,
  established,
  license,
  ctaText,
  ctaLink,
}: SportsbookReviewProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                <Image
                  src={`/abstract-geometric-shapes.png?height=64&width=64&query=${name} logo`}
                  alt={`${name} logo`}
                  width={64}
                  height={64}
                  className="rounded"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{name} Review</h1>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{rating}/5</span>
                </div>
              </div>
            </div>
            <p className="text-xl font-semibold mb-2">{bonus}</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-white/20 text-white">
                {region}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Est. {established}
              </Badge>
            </div>
          </div>
          <div className="text-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3"
              onClick={() => window.open("https://www.coolbet.com/en/sports/discgolf", "_blank")}
            >
              {ctaText}
            </Button>
            <p className="text-sm mt-2 opacity-90">Min. Deposit: {minDeposit}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Check className="w-5 h-5" />
                  Pros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{pro}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <X className="w-5 h-5" />
                  Cons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{con}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Bonus Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Bonus Terms & Conditions</CardTitle>
              <CardDescription>Important details about the welcome offer</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {bonusTerms.map((term, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{term}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Disc Golf Markets */}
          <Card>
            <CardHeader>
              <CardTitle>Disc Golf Betting Markets</CardTitle>
              <CardDescription>Available betting options for DGPT events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {markets.map((market, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{market}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sample Odds */}
          <Card>
            <CardHeader>
              <CardTitle>Sample Disc Golf Odds</CardTitle>
              <CardDescription>Recent odds from DGPT events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Event</th>
                      <th className="text-left py-2">Player</th>
                      <th className="text-left py-2">Odds</th>
                    </tr>
                  </thead>
                  <tbody>
                    {oddsExample.map((odd, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2">{odd.event}</td>
                        <td className="py-2 font-medium">{odd.player}</td>
                        <td className="py-2 font-bold text-green-600">{odd.odds}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Facts */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">License</p>
                  <p className="text-xs text-gray-600">{license}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Mobile App</p>
                  <p className="text-xs text-gray-600">iOS & Android</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Live Betting</p>
                  <p className="text-xs text-gray-600">Available</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card className="bg-gradient-to-br from-green-50 to-yellow-50 border-green-200">
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Ready to Start?</h3>
              <p className="text-sm text-gray-600 mb-4">Claim your exclusive disc golf betting bonus</p>
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => window.open("https://www.coolbet.com/en/sports/discgolf", "_blank")}
              >
                {ctaText}
              </Button>
              <p className="text-xs text-gray-500 mt-2">18+ Terms Apply</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
