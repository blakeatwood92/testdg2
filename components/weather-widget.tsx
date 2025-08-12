"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Sun, CloudRain, Wind, Droplets, RefreshCw } from "lucide-react"
import { getWeatherBettingInsight } from "@/lib/api/weather"

interface WeatherData {
  temp: string
  condition: string
  humidity: string
  windSpeed: string
  precipitation: string
  forecast: {
    day: string
    high: string
    low: string
    condition: string
  }[]
}

interface WeatherWidgetProps {
  location: string
  date: string
  weather?: WeatherData // Optional fallback data
}

export function WeatherWidget({ location, date, weather: fallbackWeather }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(fallbackWeather || null)
  const [loading, setLoading] = useState(!fallbackWeather)
  const [error, setError] = useState<string | null>(null)

  const fetchWeather = async () => {
    try {
      setLoading(true)
      setError(null)
      const params = new URLSearchParams({ location })
      if (date) params.set("date", date)

      const response = await fetch(`/api/weather?${params}`)
      if (!response.ok) {
        throw new Error("Failed to fetch weather data")
      }

      const data = await response.json()
      setWeather(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
      // Use fallback weather if available
      if (fallbackWeather) {
        setWeather(fallbackWeather)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!fallbackWeather) {
      fetchWeather()
    }
  }, [location, date])

  const getWeatherIcon = (condition: string) => {
    const lowerCondition = condition.toLowerCase()
    if (lowerCondition.includes("rain")) return CloudRain
    if (lowerCondition.includes("cloud")) return Cloud
    return Sun
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <RefreshCw className="w-6 h-6 animate-spin text-blue-600" />
            <span className="ml-2">Loading weather...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error && !weather) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-center text-red-600">Unable to load weather data</p>
          <button onClick={fetchWeather} className="mt-2 text-sm text-blue-600 hover:underline block mx-auto">
            Try again
          </button>
        </CardContent>
      </Card>
    )
  }

  if (!weather) return null

  const WeatherIcon = getWeatherIcon(weather.condition)
  const bettingInsight = getWeatherBettingInsight(weather)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <WeatherIcon className="w-5 h-5" />
          Weather Forecast - {location}
        </CardTitle>
        <p className="text-sm text-gray-600">{date}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Current Weather */}
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-1">{weather.temp}</div>
            <div className="text-sm text-gray-600">{weather.condition}</div>
          </div>

          {/* Weather Details */}
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <Wind className="w-4 h-4 mx-auto mb-1 text-gray-500" />
              <div className="font-medium">{weather.windSpeed}</div>
              <div className="text-gray-600">Wind</div>
            </div>
            <div className="text-center">
              <Droplets className="w-4 h-4 mx-auto mb-1 text-gray-500" />
              <div className="font-medium">{weather.humidity}</div>
              <div className="text-gray-600">Humidity</div>
            </div>
            <div className="text-center">
              <CloudRain className="w-4 h-4 mx-auto mb-1 text-gray-500" />
              <div className="font-medium">{weather.precipitation}</div>
              <div className="text-gray-600">Rain</div>
            </div>
          </div>

          {/* 3-Day Forecast */}
          <div>
            <h4 className="font-medium mb-2">3-Day Forecast</h4>
            <div className="space-y-2">
              {weather.forecast.map((day, index) => {
                const DayIcon = getWeatherIcon(day.condition)
                return (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="font-medium">{day.day}</span>
                    <div className="flex items-center gap-2">
                      <DayIcon className="w-4 h-4" />
                      <span>
                        {day.high}°/{day.low}°
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-yellow-50 p-3 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-1">Betting Impact</h4>
            <p className="text-sm text-yellow-700">{bettingInsight}</p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={fetchWeather}
              disabled={loading}
              className="text-sm text-blue-600 hover:underline disabled:opacity-50"
            >
              {loading ? "Updating..." : "Refresh Weather"}
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
