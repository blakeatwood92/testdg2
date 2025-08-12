import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target } from "lucide-react"

interface PlayerStatsProps {
  stats: {
    dgptRanking: number
    totalWins: number
    top3Finishes: number
    top10Finishes: number
    averageScore: string
    bestRound: string
    coursesPlayed: number
    winRate: string
    earnings2024: string
    careerEarnings: string
  }
}

export function PlayerStats({ stats }: PlayerStatsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Tournament Performance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">DGPT Ranking</span>
            <Badge className="bg-green-600">#{stats.dgptRanking}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Total Wins</span>
            <span className="font-semibold">{stats.totalWins}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Top 3 Finishes</span>
            <span className="font-semibold">{stats.top3Finishes}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Top 10 Finishes</span>
            <span className="font-semibold">{stats.top10Finishes}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Win Rate</span>
            <span className="font-semibold text-green-600">{stats.winRate}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-500" />
            Scoring Statistics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Average Score</span>
            <span className="font-semibold">{stats.averageScore}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Best Round</span>
            <span className="font-semibold text-green-600">{stats.bestRound}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Courses Played</span>
            <span className="font-semibold">{stats.coursesPlayed}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">2024 Earnings</span>
            <span className="font-semibold">{stats.earnings2024}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Career Earnings</span>
            <span className="font-semibold text-green-600">{stats.careerEarnings}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
