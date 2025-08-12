import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EventCard } from "@/components/event-card"
import { Calendar, TrendingUp, Trophy, MapPin } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: "1",
      name: "DGPT Championship",
      slug: "dgpt-championship-2024",
      date: "Oct 24-27, 2024",
      endDate: "",
      location: "Charlotte, NC",
      venue: "Hornets Nest Park",
      prizePool: "$75,000",
      status: "upcoming" as const,
      featuredOdds: [
        { player: "Paul McBeth", odds: "+450" },
        { player: "Ricky Wysocki", odds: "+550" },
        { player: "Calvin Heimburg", odds: "+650" },
      ],
      weather: {
        temp: "72°F",
        condition: "Partly Cloudy",
      },
    },
    {
      id: "2",
      name: "MVP Open",
      slug: "mvp-open-2024",
      date: "Nov 8-10, 2024",
      endDate: "",
      location: "Maple Hill, MA",
      venue: "Maple Hill Disc Golf Course",
      prizePool: "$50,000",
      status: "upcoming" as const,
      featuredOdds: [
        { player: "Eagle McMahon", odds: "+400" },
        { player: "Simon Lizotte", odds: "+500" },
        { player: "Drew Gibson", odds: "+700" },
      ],
      weather: {
        temp: "58°F",
        condition: "Overcast",
      },
    },
    {
      id: "3",
      name: "Las Vegas Challenge",
      slug: "las-vegas-challenge-2024",
      date: "Mar 14-17, 2024",
      endDate: "",
      location: "Las Vegas, NV",
      venue: "Wildhorse Golf Club",
      prizePool: "$60,000",
      status: "completed" as const,
      featuredOdds: [
        { player: "Gannon Buhr", odds: "+800" },
        { player: "Anthony Barela", odds: "+650" },
        { player: "Adam Hammes", odds: "+750" },
      ],
      weather: {
        temp: "78°F",
        condition: "Sunny",
      },
    },
  ]

  const liveEvents = [
    {
      id: "4",
      name: "European Open",
      slug: "european-open-2024",
      date: "Oct 15-18, 2024",
      endDate: "",
      location: "Nokia, Finland",
      venue: "Nokia Disc Golf Course",
      prizePool: "$45,000",
      status: "live" as const,
      featuredOdds: [
        { player: "Kristin Tattar", odds: "+300" },
        { player: "Eveliina Salonen", odds: "+450" },
        { player: "Paige Pierce", odds: "+500" },
      ],
      weather: {
        temp: "45°F",
        condition: "Light Rain",
      },
    },
  ]

  const featuredStats = [
    { label: "Total Prize Money", value: "$2.1M", icon: Trophy },
    { label: "DGPT Events", value: "24", icon: Calendar },
    { label: "Active Players", value: "150+", icon: TrendingUp },
    { label: "Countries", value: "12", icon: MapPin },
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
              <Link href="/sportsbooks" className="text-gray-700 hover:text-green-600 transition-colors">
                Sportsbooks
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
            DGPT Events & <span className="text-green-600">Live Odds</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Complete coverage of Disc Golf Pro Tour events with live odds, weather forecasts, and expert betting
            analysis. Never miss a tournament with our comprehensive DGPT schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Live Odds
            </Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              Weather Forecasts
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Expert Analysis
            </Badge>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {featuredStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Events */}
        {liveEvents.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-bold text-gray-900">Live Events</h2>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {liveEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingEvents
              .filter((event) => event.status === "upcoming")
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </div>
        </div>

        {/* Recent Results */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Results</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingEvents
              .filter((event) => event.status === "completed")
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </div>
        </div>

        {/* DGPT Schedule Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>2024 DGPT Schedule Highlights</CardTitle>
            <CardDescription>Key tournaments and betting opportunities throughout the season</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3 text-green-700">Major Championships</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>DGPT Championship</span>
                    <span className="text-gray-600">Oct 24-27</span>
                  </li>
                  <li className="flex justify-between">
                    <span>World Championships</span>
                    <span className="text-gray-600">Aug 14-17</span>
                  </li>
                  <li className="flex justify-between">
                    <span>European Open</span>
                    <span className="text-gray-600">Jul 11-14</span>
                  </li>
                  <li className="flex justify-between">
                    <span>MVP Open</span>
                    <span className="text-gray-600">Nov 8-10</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-green-700">High-Value Events</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Las Vegas Challenge</span>
                    <span className="text-green-600">$60,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Jonesboro Open</span>
                    <span className="text-green-600">$55,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Ledgestone Insurance Open</span>
                    <span className="text-green-600">$50,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Delaware Disc Golf Challenge</span>
                    <span className="text-green-600">$45,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SEO Content */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">DGPT Betting Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-700">Understanding DGPT Events</h3>
              <p className="text-gray-600 mb-4">
                The Disc Golf Pro Tour features the world's best players competing in elite-level tournaments across
                multiple countries. Each event offers unique betting opportunities based on course layout, weather
                conditions, and player form.
              </p>
              <h3 className="text-lg font-semibold mb-3 text-green-700">Weather Impact on Betting</h3>
              <p className="text-gray-600">
                Weather conditions significantly affect disc golf performance. Wind favors players with strong forehand
                shots, while rain can level the playing field between favorites and underdogs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-700">Course Analysis</h3>
              <p className="text-gray-600 mb-4">
                Different course types favor different playing styles. Wooded courses reward accuracy, while open
                courses favor big arms. Our event pages provide detailed course breakdowns for informed betting.
              </p>
              <h3 className="text-lg font-semibold mb-3 text-green-700">Live Betting Opportunities</h3>
              <p className="text-gray-600">
                DGPT events offer excellent live betting opportunities with round-by-round odds updates. Monitor
                leaderboards and weather changes for the best value bets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
