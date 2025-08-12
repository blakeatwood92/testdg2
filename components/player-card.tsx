import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface PlayerCardProps {
  player: {
    id: string
    name: string
    slug: string
    division: "MPO" | "FPO"
    ranking: number
    country: string
    age: number
    currentOdds: string
    recentForm: "Hot" | "Good" | "Cold"
    specialties: string[]
    recentWins: number
    avatar: string
  }
}

export function PlayerCard({ player }: PlayerCardProps) {
  const getFormColor = (form: string) => {
    switch (form) {
      case "Hot":
        return "bg-red-100 text-red-800"
      case "Good":
        return "bg-green-100 text-green-800"
      case "Cold":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={`/disc-golf-player.png?height=200&width=300&query=${player.name} disc golf player`}
          alt={`${player.name} profile`}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-gray-900">#{player.ranking}</Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className={getFormColor(player.recentForm)}>{player.recentForm}</Badge>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-1">{player.name}</CardTitle>
            <CardDescription className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {player.division}
                </Badge>
                <span className="text-sm">{player.country}</span>
                <span className="text-sm">Age {player.age}</span>
              </div>
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Current Odds */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Current Odds</span>
            <Badge variant="outline" className="font-bold text-green-600">
              {player.currentOdds}
            </Badge>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-sm font-medium mb-2">Specialties</h4>
            <div className="flex flex-wrap gap-1">
              {player.specialties.map((specialty, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          {/* Recent Performance */}
          <div className="flex items-center justify-between text-sm">
            <span>Recent Wins</span>
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="font-semibold">{player.recentWins}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Link href={`/players/${player.slug}`} className="flex-1">
              <Button className="w-full bg-green-600 hover:bg-green-700">View Profile</Button>
            </Link>
            <Button variant="outline" className="px-4 bg-transparent">
              <TrendingUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
