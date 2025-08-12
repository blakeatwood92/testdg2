import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlayerStats } from "@/components/player-stats"
import { Calendar, Trophy, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// This would normally come from a database or API
async function getPlayerData(slug: string) {
  // Mock data - in real app this would be fetched from API
  const players: Record<string, any> = {
    "paul-mcbeth": {
      id: "1",
      name: "Paul McBeth",
      slug: "paul-mcbeth",
      division: "MPO",
      ranking: 1,
      country: "USA",
      age: 34,
      height: "5'11\"",
      weight: "175 lbs",
      hometown: "Huntington Beach, CA",
      turnedPro: "2008",
      sponsor: "Discraft",
      bio: "Paul McBeth is widely considered the greatest disc golfer of all time. With 6 World Championships and over 150 professional wins, McBeth has dominated the sport for over a decade. Known for his incredible consistency, mental toughness, and clutch putting, he remains the player to beat in any tournament he enters.",
      playingStyle:
        "McBeth is known for his exceptional consistency and course management. He rarely makes big mistakes and has an uncanny ability to perform under pressure. His putting is among the best in the world, and he excels at reading courses and making smart shot selections.",
      stats: {
        dgptRanking: 1,
        totalWins: 156,
        top3Finishes: 89,
        top10Finishes: 142,
        averageScore: "-8.2",
        bestRound: "-18",
        coursesPlayed: 87,
        winRate: "32%",
        earnings2024: "$125,000",
        careerEarnings: "$850,000",
      },
      recentResults: [
        { event: "DGPT Championship", finish: "1st", score: "-15", date: "Oct 2024" },
        { event: "MVP Open", finish: "2nd", score: "-12", date: "Sep 2024" },
        { event: "World Championships", finish: "1st", score: "-18", date: "Aug 2024" },
        { event: "European Open", finish: "3rd", score: "-10", date: "Jul 2024" },
        { event: "Ledgestone Insurance Open", finish: "1st", score: "-14", date: "Jun 2024" },
      ],
      bettingHistory: {
        favoriteWins: 12,
        underdogWins: 3,
        averageOdds: "+425",
        bestValue: "+800 (Las Vegas Challenge 2023)",
        roi: "+15.2%",
      },
      upcomingEvents: [
        { event: "Winter Classic", date: "Dec 15-17", odds: "+400" },
        { event: "Memorial Championship", date: "Jan 20-22", odds: "+350" },
      ],
      strengths: ["Consistency", "Mental Game", "Putting", "Course Management", "Clutch Performance"],
      weaknesses: ["Age Factor", "Power vs Youth"],
    },
    "paige-pierce": {
      id: "7",
      name: "Paige Pierce",
      slug: "paige-pierce",
      division: "FPO",
      ranking: 1,
      country: "USA",
      age: 33,
      height: "5'6\"",
      weight: "140 lbs",
      hometown: "Plano, TX",
      turnedPro: "2011",
      sponsor: "Discraft",
      bio: "Paige Pierce is the most dominant female disc golfer in the world. With 5 World Championships and over 80 professional wins, she has set the standard for excellence in the FPO division. Known for her incredible putting and mental toughness, Pierce continues to push the boundaries of women's disc golf.",
      playingStyle:
        "Pierce combines power with precision, making her dangerous on any course type. Her putting is legendary, and she has an exceptional ability to perform under pressure. She's known for her aggressive style and willingness to take risks when needed.",
      stats: {
        dgptRanking: 1,
        totalWins: 84,
        top3Finishes: 67,
        top10Finishes: 78,
        averageScore: "-6.8",
        bestRound: "-12",
        coursesPlayed: 52,
        winRate: "45%",
        earnings2024: "$85,000",
        careerEarnings: "$425,000",
      },
      recentResults: [
        { event: "DGPT Championship", finish: "1st", score: "-12", date: "Oct 2024" },
        { event: "MVP Open", finish: "1st", score: "-10", date: "Sep 2024" },
        { event: "World Championships", finish: "2nd", score: "-8", date: "Aug 2024" },
        { event: "European Open", finish: "1st", score: "-9", date: "Jul 2024" },
        { event: "Ledgestone Insurance Open", finish: "1st", score: "-11", date: "Jun 2024" },
      ],
      bettingHistory: {
        favoriteWins: 18,
        underdogWins: 2,
        averageOdds: "+285",
        bestValue: "+450 (European Open 2023)",
        roi: "+22.8%",
      },
      upcomingEvents: [
        { event: "Winter Classic", date: "Dec 15-17", odds: "+250" },
        { event: "Memorial Championship", date: "Jan 20-22", odds: "+200" },
      ],
      strengths: ["Putting", "Mental Toughness", "Consistency", "Pressure Performance", "Course Reading"],
      weaknesses: ["Power vs Field", "Windy Conditions"],
    },
  }

  return players[slug] || null
}

export default async function PlayerPage({ params }: { params: { slug: string } }) {
  const player = await getPlayerData(params.slug)

  if (!player) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Player Not Found</h1>
          <Link href="/players">
            <Button>Back to Players</Button>
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
              <Link href="/players" className="text-gray-700 hover:text-green-600 transition-colors">
                All Players
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

      <div className="container mx-auto px-4 py-8">
        {/* Player Hero */}
        <div className="relative mb-8">
          <Image
            src={`/disc-golf-action.png?height=400&width=1200&query=${player.name} disc golf action shot`}
            alt={`${player.name} in action`}
            width={1200}
            height={400}
            className="w-full h-64 md:h-80 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-end">
            <div className="p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-green-600">
                  #{player.ranking} {player.division}
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  {player.country}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{player.name}</h1>
              <div className="flex flex-wrap gap-6 text-sm">
                <div>Age: {player.age}</div>
                <div>Height: {player.height}</div>
                <div>Hometown: {player.hometown}</div>
                <div>Pro Since: {player.turnedPro}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <Card>
              <CardHeader>
                <CardTitle>Biography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{player.bio}</p>
                <div>
                  <h4 className="font-semibold mb-3">Playing Style</h4>
                  <p className="text-gray-600">{player.playingStyle}</p>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Career Statistics</CardTitle>
                <CardDescription>Comprehensive performance metrics and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <PlayerStats stats={player.stats} />
              </CardContent>
            </Card>

            {/* Recent Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Recent Tournament Results
                </CardTitle>
                <CardDescription>Last 5 tournament performances</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Event</th>
                        <th className="text-left py-3">Finish</th>
                        <th className="text-left py-3">Score</th>
                        <th className="text-left py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {player.recentResults.map((result: any, index: number) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 font-medium">{result.event}</td>
                          <td className="py-3">
                            <Badge
                              variant={result.finish === "1st" ? "default" : "secondary"}
                              className={result.finish === "1st" ? "bg-yellow-500" : ""}
                            >
                              {result.finish}
                            </Badge>
                          </td>
                          <td className="py-3 font-bold text-green-600">{result.score}</td>
                          <td className="py-3 text-gray-600">{result.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Betting Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Betting Performance Analysis
                </CardTitle>
                <CardDescription>Historical betting value and ROI data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Wins as Favorite</span>
                      <span className="font-semibold">{player.bettingHistory.favoriteWins}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Underdog Wins</span>
                      <span className="font-semibold">{player.bettingHistory.underdogWins}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Average Odds</span>
                      <span className="font-semibold">{player.bettingHistory.averageOdds}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Best Value Win</span>
                      <span className="font-semibold text-green-600">{player.bettingHistory.bestValue}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Betting ROI</span>
                      <span className="font-semibold text-green-600">{player.bettingHistory.roi}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Strengths & Weaknesses */}
            <Card>
              <CardHeader>
                <CardTitle>Player Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3 text-green-700">Strengths</h4>
                  <div className="space-y-2">
                    {player.strengths.map((strength: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-red-700">Areas to Watch</h4>
                  <div className="space-y-2">
                    {player.weaknesses.map((weakness: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">{weakness}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {player.upcomingEvents.map((event: any, index: number) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="font-medium mb-1">{event.event}</div>
                    <div className="text-sm text-gray-600 mb-2">{event.date}</div>
                    <Badge variant="outline" className="text-green-600">
                      {event.odds}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Bet Card */}
            <Card className="bg-gradient-to-br from-green-50 to-yellow-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-center">Bet on {player.name}</h3>
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
          </div>
        </div>
      </div>
    </div>
  )
}
