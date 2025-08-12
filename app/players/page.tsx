import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlayerCard } from "@/components/player-card"
import { Trophy, Users, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

export default function PlayersPage() {
  const mpoPlayers = [
    {
      id: "1",
      name: "Paul McBeth",
      slug: "paul-mcbeth",
      division: "MPO" as const,
      ranking: 1,
      country: "USA",
      age: 34,
      currentOdds: "+450",
      recentForm: "Hot" as const,
      specialties: ["Consistency", "Mental Game", "Clutch Putting"],
      recentWins: 3,
      avatar: "/players/paul-mcbeth.jpg",
    },
    {
      id: "2",
      name: "Ricky Wysocki",
      slug: "ricky-wysocki",
      division: "MPO" as const,
      ranking: 2,
      country: "USA",
      age: 32,
      currentOdds: "+550",
      recentForm: "Good" as const,
      specialties: ["Power", "Forehand", "Wind Play"],
      recentWins: 2,
      avatar: "/players/ricky-wysocki.jpg",
    },
    {
      id: "3",
      name: "Calvin Heimburg",
      slug: "calvin-heimburg",
      division: "MPO" as const,
      ranking: 3,
      country: "USA",
      age: 30,
      currentOdds: "+650",
      recentForm: "Good" as const,
      specialties: ["Accuracy", "Course Management", "Putting"],
      recentWins: 2,
      avatar: "/players/calvin-heimburg.jpg",
    },
    {
      id: "4",
      name: "Eagle McMahon",
      slug: "eagle-mcmahon",
      division: "MPO" as const,
      ranking: 4,
      country: "USA",
      age: 27,
      currentOdds: "+700",
      recentForm: "Good" as const,
      specialties: ["Distance", "Scrambling", "Course Reading"],
      recentWins: 1,
      avatar: "/players/eagle-mcmahon.jpg",
    },
    {
      id: "5",
      name: "Gannon Buhr",
      slug: "gannon-buhr",
      division: "MPO" as const,
      ranking: 5,
      country: "USA",
      age: 22,
      currentOdds: "+800",
      recentForm: "Hot" as const,
      specialties: ["Youth", "Power", "Fearless Play"],
      recentWins: 2,
      avatar: "/players/gannon-buhr.jpg",
    },
    {
      id: "6",
      name: "Simon Lizotte",
      slug: "simon-lizotte",
      division: "MPO" as const,
      ranking: 6,
      country: "Germany",
      age: 31,
      currentOdds: "+900",
      recentForm: "Good" as const,
      specialties: ["Creativity", "Distance", "Entertainment"],
      recentWins: 1,
      avatar: "/players/simon-lizotte.jpg",
    },
  ]

  const fpoPlayers = [
    {
      id: "7",
      name: "Paige Pierce",
      slug: "paige-pierce",
      division: "FPO" as const,
      ranking: 1,
      country: "USA",
      age: 33,
      currentOdds: "+300",
      recentForm: "Hot" as const,
      specialties: ["Consistency", "Putting", "Mental Toughness"],
      recentWins: 4,
      avatar: "/players/paige-pierce.jpg",
    },
    {
      id: "8",
      name: "Kristin Tattar",
      slug: "kristin-tattar",
      division: "FPO" as const,
      ranking: 2,
      country: "Estonia",
      age: 30,
      currentOdds: "+400",
      recentForm: "Good" as const,
      specialties: ["Accuracy", "Course Management", "Consistency"],
      recentWins: 3,
      avatar: "/players/kristin-tattar.jpg",
    },
    {
      id: "9",
      name: "Catrina Allen",
      slug: "catrina-allen",
      division: "FPO" as const,
      ranking: 3,
      country: "USA",
      age: 33,
      currentOdds: "+500",
      recentForm: "Good" as const,
      specialties: ["Power", "Versatility", "Experience"],
      recentWins: 2,
      avatar: "/players/catrina-allen.jpg",
    },
    {
      id: "10",
      name: "Eveliina Salonen",
      slug: "eveliina-salonen",
      division: "FPO" as const,
      ranking: 4,
      country: "Finland",
      age: 26,
      currentOdds: "+600",
      recentForm: "Good" as const,
      specialties: ["Putting", "Mental Game", "Clutch Performance"],
      recentWins: 1,
      avatar: "/players/eveliina-salonen.jpg",
    },
  ]

  const featuredStats = [
    { label: "Active Players", value: "150+", icon: Users },
    { label: "Countries", value: "25", icon: TrendingUp },
    { label: "Total Prize Money", value: "$2.1M", icon: Trophy },
    { label: "Tournaments", value: "24", icon: Award },
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
              <Link href="/sportsbooks" className="text-gray-700 hover:text-green-600 transition-colors">
                Sportsbooks
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
            Disc Golf <span className="text-green-600">Player Profiles</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive profiles of top DGPT players with detailed stats, betting history, and performance analysis.
            Get insights on Paul McBeth, Paige Pierce, and all the top competitors.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Player Stats
            </Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              Betting History
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Performance Analysis
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

        {/* MPO Players */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">MPO (Men's Professional Open)</h2>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {mpoPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>

        {/* FPO Players */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-pink-600" />
            <h2 className="text-2xl font-bold text-gray-900">FPO (Female Professional Open)</h2>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {fpoPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>

        {/* Rankings Table */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Current DGPT Rankings</CardTitle>
            <CardDescription>Top 10 players in each division with current betting odds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* MPO Rankings */}
              <div>
                <h3 className="font-semibold mb-4 text-blue-600">MPO Rankings</h3>
                <div className="space-y-2">
                  {mpoPlayers.slice(0, 6).map((player, index) => (
                    <div key={player.id} className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-sm w-6">#{index + 1}</span>
                        <Link href={`/players/${player.slug}`} className="hover:text-green-600">
                          {player.name}
                        </Link>
                      </div>
                      <Badge variant="outline" className="text-green-600">
                        {player.currentOdds}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* FPO Rankings */}
              <div>
                <h3 className="font-semibold mb-4 text-pink-600">FPO Rankings</h3>
                <div className="space-y-2">
                  {fpoPlayers.map((player, index) => (
                    <div key={player.id} className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-sm w-6">#{index + 1}</span>
                        <Link href={`/players/${player.slug}`} className="hover:text-green-600">
                          {player.name}
                        </Link>
                      </div>
                      <Badge variant="outline" className="text-green-600">
                        {player.currentOdds}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SEO Content */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Disc Golf Player Betting Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-700">Understanding Player Form</h3>
              <p className="text-gray-600 mb-4">
                Player form is crucial for disc golf betting. Look at recent tournament finishes, course-specific
                performance, and playing style matchups. Hot streaks can indicate confidence and momentum.
              </p>
              <h3 className="text-lg font-semibold mb-3 text-green-700">Course Specialization</h3>
              <p className="text-gray-600">
                Different players excel on different course types. Paul McBeth dominates technical courses, while power
                players like Ricky Wysocki thrive on open, distance-heavy layouts.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-700">Betting Value Analysis</h3>
              <p className="text-gray-600 mb-4">
                Don't always bet the favorites. Look for players with good course history, favorable weather conditions
                for their playing style, and recent strong performances that may not be reflected in the odds.
              </p>
              <h3 className="text-lg font-semibold mb-3 text-green-700">Head-to-Head Matchups</h3>
              <p className="text-gray-600">
                Player matchup bets offer great value. Consider playing styles, recent form, and historical head-to-head
                records when evaluating these markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
