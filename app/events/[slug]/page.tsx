import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WeatherWidget } from "@/components/weather-widget"
import { Calendar, MapPin, Trophy, Users, Target, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// This would normally come from a database or API
async function getEventData(slug: string) {
  // Mock data - in real app this would be fetched from API
  const events: Record<string, any> = {
    "dgpt-championship-2024": {
      id: "1",
      name: "DGPT Championship",
      slug: "dgpt-championship-2024",
      date: "October 24-27, 2024",
      location: "Charlotte, NC",
      venue: "Hornets Nest Park",
      courseType: "Wooded/Technical",
      prizePool: "$75,000",
      status: "upcoming",
      description:
        "The season finale of the Disc Golf Pro Tour, featuring the top 72 players competing for the largest prize pool of the year.",
      courseDetails: {
        holes: 18,
        par: 54,
        length: "7,200 ft",
        elevation: "Moderate",
        difficulty: "Championship Level",
      },
      historicalWinners: [
        { year: "2023", winner: "Paul McBeth", score: "-18" },
        { year: "2022", winner: "Ricky Wysocki", score: "-15" },
        { year: "2021", winner: "Calvin Heimburg", score: "-12" },
      ],
      playerOdds: [
        { player: "Paul McBeth", odds: "+450", form: "Excellent", recentFinishes: ["1st", "2nd", "1st"] },
        { player: "Ricky Wysocki", odds: "+550", form: "Good", recentFinishes: ["3rd", "1st", "4th"] },
        { player: "Calvin Heimburg", odds: "+650", form: "Good", recentFinishes: ["2nd", "3rd", "2nd"] },
        { player: "Eagle McMahon", odds: "+700", form: "Fair", recentFinishes: ["5th", "2nd", "6th"] },
        { player: "Gannon Buhr", odds: "+800", form: "Excellent", recentFinishes: ["1st", "4th", "3rd"] },
        { player: "Simon Lizotte", odds: "+900", form: "Good", recentFinishes: ["4th", "5th", "1st"] },
        { player: "Drew Gibson", odds: "+1000", form: "Fair", recentFinishes: ["6th", "3rd", "8th"] },
        { player: "Anthony Barela", odds: "+1100", form: "Good", recentFinishes: ["2nd", "7th", "5th"] },
      ],
      fpoOdds: [
        { player: "Paige Pierce", odds: "+300", form: "Excellent", recentFinishes: ["1st", "1st", "2nd"] },
        { player: "Kristin Tattar", odds: "+400", form: "Good", recentFinishes: ["2nd", "3rd", "1st"] },
        { player: "Catrina Allen", odds: "+500", form: "Good", recentFinishes: ["3rd", "2nd", "4th"] },
        { player: "Eveliina Salonen", odds: "+600", form: "Fair", recentFinishes: ["4th", "5th", "3rd"] },
      ],
      weather: {
        temp: "72°F",
        condition: "Partly Cloudy",
        humidity: "65%",
        windSpeed: "8-12 mph",
        precipitation: "10%",
        forecast: [
          { day: "Thursday", high: "74", low: "58", condition: "Sunny" },
          { day: "Friday", high: "72", low: "56", condition: "Partly Cloudy" },
          { day: "Saturday", high: "69", low: "54", condition: "Overcast" },
        ],
      },
      bettingTips: [
        "Paul McBeth has won this event twice and excels on technical courses",
        "Weather looks stable - favor consistent, accurate players over big arms",
        "Hornets Nest rewards course management over distance",
        "Look for value in players with strong putting games in windy conditions",
      ],
    },
  }

  return events[slug] || null
}

export default async function EventPage({ params }: { params: { slug: string } }) {
  const event = await getEventData(params.slug)

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <Link href="/events">
            <Button>Back to Events</Button>
          </Link>
        </div>
      </div>
    )
  }

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
                All Events
              </Link>
              <Link href="/sportsbooks" className="text-gray-700 hover:text-green-600 transition-colors">
                Sportsbooks
              </Link>
              <Link href="/players" className="text-gray-700 hover:text-green-600 transition-colors">
                Players
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Event Hero */}
        <div className="relative mb-8">
          <Image
            src={`/disc-golf-tournament.png?height=400&width=1200&query=disc golf tournament ${event.location}`}
            alt={`${event.name} venue`}
            width={1200}
            height={400}
            className="w-full h-64 md:h-80 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-end">
            <div className="p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-green-600">{event.status.toUpperCase()}</Badge>
                <Badge variant="outline" className="border-white text-white">
                  {event.courseType}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{event.name}</h1>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {event.venue}, {event.location}
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  {event.prizePool} Prize Pool
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tournament Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Tournament Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Course Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Holes:</span>
                        <span>{event.courseDetails.holes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Par:</span>
                        <span>{event.courseDetails.par}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Length:</span>
                        <span>{event.courseDetails.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Elevation:</span>
                        <span>{event.courseDetails.elevation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Difficulty:</span>
                        <span>{event.courseDetails.difficulty}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Historical Winners</h4>
                    <div className="space-y-2 text-sm">
                      {event.historicalWinners.map((winner: any, index: number) => (
                        <div key={index} className="flex justify-between">
                          <span>
                            {winner.year}: {winner.winner}
                          </span>
                          <span className="text-green-600">{winner.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* MPO Odds */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  MPO (Men's) Odds
                </CardTitle>
                <CardDescription>Current betting odds for the men's division</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Player</th>
                        <th className="text-left py-3">Odds</th>
                        <th className="text-left py-3">Form</th>
                        <th className="text-left py-3">Recent Finishes</th>
                        <th className="text-left py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {event.playerOdds.map((player: any, index: number) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 font-medium">{player.player}</td>
                          <td className="py-3">
                            <Badge variant="outline" className="font-bold text-green-600">
                              {player.odds}
                            </Badge>
                          </td>
                          <td className="py-3">
                            <Badge
                              variant="secondary"
                              className={
                                player.form === "Excellent"
                                  ? "bg-green-100 text-green-800"
                                  : player.form === "Good"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-800"
                              }
                            >
                              {player.form}
                            </Badge>
                          </td>
                          <td className="py-3 text-xs">{player.recentFinishes.join(", ")}</td>
                          <td className="py-3">
                            <Button size="sm" variant="outline">
                              Bet Now
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* FPO Odds */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  FPO (Women's) Odds
                </CardTitle>
                <CardDescription>Current betting odds for the women's division</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Player</th>
                        <th className="text-left py-3">Odds</th>
                        <th className="text-left py-3">Form</th>
                        <th className="text-left py-3">Recent Finishes</th>
                        <th className="text-left py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {event.fpoOdds.map((player: any, index: number) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 font-medium">{player.player}</td>
                          <td className="py-3">
                            <Badge variant="outline" className="font-bold text-green-600">
                              {player.odds}
                            </Badge>
                          </td>
                          <td className="py-3">
                            <Badge
                              variant="secondary"
                              className={
                                player.form === "Excellent"
                                  ? "bg-green-100 text-green-800"
                                  : player.form === "Good"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-800"
                              }
                            >
                              {player.form}
                            </Badge>
                          </td>
                          <td className="py-3 text-xs">{player.recentFinishes.join(", ")}</td>
                          <td className="py-3">
                            <Button size="sm" variant="outline">
                              Bet Now
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Betting Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Expert Betting Tips
                </CardTitle>
                <CardDescription>Strategic insights for this tournament</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {event.bettingTips.map((tip: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weather Widget */}
            <WeatherWidget location={event.location} date={event.date} weather={event.weather} />

            {/* Quick Bet Card */}
            <Card className="bg-gradient-to-br from-green-50 to-yellow-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-center">Place Your Bets</h3>
                <div className="space-y-3">
                  <Link href="/sportsbooks/betmgm">
                    <Button className="w-full bg-green-600 hover:bg-green-700">BetMGM - $1,500 Risk-Free</Button>
                  </Link>
                  <Link href="/sportsbooks/draftkings">
                    <Button variant="outline" className="w-full bg-transparent">
                      DraftKings - $1,000 Match
                    </Button>
                  </Link>
                  <Link href="/sportsbooks/bet365">
                    <Button variant="outline" className="w-full bg-transparent">
                      Bet365 - $200 Bonus
                    </Button>
                  </Link>
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">18+ Terms Apply</p>
              </CardContent>
            </Card>

            {/* Tournament Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Tournament Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Field Size</span>
                  <span className="font-semibold">72 players</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Cut Line</span>
                  <span className="font-semibold">Top 40</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Rounds</span>
                  <span className="font-semibold">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Winner's Purse</span>
                  <span className="font-semibold text-green-600">$15,000</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
