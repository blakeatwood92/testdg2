"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Trophy, TrendingUp, Cloud } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface EventCardProps {
  event: {
    id: string
    name: string
    slug: string
    date: string
    endDate: string
    location: string
    venue: string
    prizePool: string
    status: "upcoming" | "live" | "completed"
    featuredOdds: {
      player: string
      odds: string
    }[]
    weather: {
      temp: string
      condition: string
    }
  }
}

export function EventCard({ event }: EventCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-red-100 text-red-800"
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "live":
        return "LIVE NOW"
      case "upcoming":
        return "UPCOMING"
      case "completed":
        return "COMPLETED"
      default:
        return status.toUpperCase()
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={`/disc-golf-course.png?height=200&width=400&query=disc golf course ${event.location}`}
          alt={`${event.name} course`}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge className={getStatusColor(event.status)}>{getStatusText(event.status)}</Badge>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="flex items-center gap-2 text-sm">
            <Cloud className="w-4 h-4" />
            <span>{event.weather.temp}</span>
            <span className="text-gray-600">{event.weather.condition}</span>
          </div>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{event.name}</CardTitle>
            <CardDescription className="space-y-1">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {event.date}
                  {event.endDate && ` - ${event.endDate}`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>
                  {event.venue}, {event.location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>{event.prizePool} Prize Pool</span>
              </div>
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Featured Odds */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Featured Odds
            </h4>
            <div className="space-y-2">
              {event.featuredOdds.slice(0, 3).map((odd, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="font-medium">{odd.player}</span>
                  <Badge variant="outline" className="font-bold text-green-600">
                    {odd.odds}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Link href={`/events/${event.slug}`} className="flex-1">
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={(e) => {
                  e.preventDefault()
                  window.open("https://www.coolbet.com/en/sports/discgolf", "_blank")
                }}
              >
                View Event & Odds
              </Button>
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
