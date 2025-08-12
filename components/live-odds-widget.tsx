"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Minus, RefreshCw } from "lucide-react"
import type { EventOdds, PlayerOdds } from "@/lib/api/odds"
import { generateAffiliateUrl, trackAffiliateClick } from "@/lib/api/affiliate"

interface LiveOddsWidgetProps {
  eventId: string
  division: "mpo" | "fpo"
  maxPlayers?: number
}

export function LiveOddsWidget({ eventId, division, maxPlayers = 6 }: LiveOddsWidgetProps) {
  const [odds, setOdds] = useState<EventOdds | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchOdds = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/odds/${eventId}`)
      if (response.ok) {
        const data = await response.json()
        setOdds(data)
        setLastUpdated(new Date())
      }
    } catch (error) {
      console.error("Failed to fetch odds:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOdds()
    // Refresh odds every 5 minutes
    const interval = setInterval(fetchOdds, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [eventId])

  if (loading && !odds) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <RefreshCw className="w-6 h-6 animate-spin text-green-600" />
            <span className="ml-2">Loading live odds...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!odds) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-center text-gray-600">Unable to load odds data</p>
        </CardContent>
      </Card>
    )
  }

  const playerOdds = division === "mpo" ? odds.mpoOdds : odds.fpoOdds
  const displayOdds = playerOdds.slice(0, maxPlayers)

  const getMovementIcon = (movement: PlayerOdds["movement"]) => {
    switch (movement) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-red-600" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-green-600" />
      default:
        return <Minus className="w-4 h-4 text-gray-400" />
    }
  }

  const handleBetClick = (player: string, sportsbook: string) => {
    trackAffiliateClick(sportsbook, "live-odds-widget", `${player}-${eventId}`)
    const url = generateAffiliateUrl(sportsbook, "live-odds", "widget", player)
    window.open(url, "_blank")
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Live Odds - {division.toUpperCase()}
          </CardTitle>
          <Button variant="outline" size="sm" onClick={fetchOdds} disabled={loading}>
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </Button>
        </div>
        {lastUpdated && <p className="text-sm text-gray-600">Last updated: {lastUpdated.toLocaleTimeString()}</p>}
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {displayOdds.map((player, index) => (
            <div key={player.player} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="font-bold text-sm w-6">#{index + 1}</span>
                <div>
                  <p className="font-medium">{player.player}</p>
                  <p className="text-xs text-gray-600">{player.impliedProbability.toFixed(1)}% implied</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {getMovementIcon(player.movement)}
                  <Badge variant="outline" className="font-bold text-green-600">
                    {player.odds}
                  </Badge>
                </div>
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => handleBetClick(player.player, "coolbet")}
                >
                  Bet Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t">
          <p className="text-xs text-gray-500 text-center">
            Odds provided by partner sportsbooks. Click "Bet Now" to place wagers.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
