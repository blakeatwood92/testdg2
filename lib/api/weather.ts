// Weather API integration using OpenWeatherMap
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

interface WeatherResponse {
  current: {
    temp_f: number
    condition: {
      text: string
    }
    humidity: number
    wind_mph: number
    precip_in: number
  }
  forecast: {
    forecastday: Array<{
      date: string
      day: {
        maxtemp_f: number
        mintemp_f: number
        condition: {
          text: string
        }
      }
    }>
  }
}

export async function getWeatherData(location: string, date?: string): Promise<WeatherData> {
  try {
    // Use WeatherAPI.com (free tier available)
    const apiKey = process.env.WEATHER_API_KEY
    if (!apiKey) {
      console.warn("Weather API key not found, using mock data")
      return getMockWeatherData(location)
    }

    const baseUrl = "https://api.weatherapi.com/v1"
    const endpoint = date ? "forecast.json" : "current.json"
    const params = new URLSearchParams({
      key: apiKey,
      q: location,
      days: "3",
      aqi: "no",
      alerts: "no",
    })

    const response = await fetch(`${baseUrl}/${endpoint}?${params}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`)
    }

    const data: WeatherResponse = await response.json()

    return {
      temp: `${Math.round(data.current.temp_f)}°F`,
      condition: data.current.condition.text,
      humidity: `${data.current.humidity}%`,
      windSpeed: `${Math.round(data.current.wind_mph)} mph`,
      precipitation: `${Math.round(data.current.precip_in * 100)}%`,
      forecast: data.forecast.forecastday.slice(0, 3).map((day, index) => ({
        day:
          index === 0
            ? "Today"
            : index === 1
              ? "Tomorrow"
              : new Date(day.date).toLocaleDateString("en-US", { weekday: "short" }),
        high: Math.round(day.day.maxtemp_f).toString(),
        low: Math.round(day.day.mintemp_f).toString(),
        condition: day.day.condition.text,
      })),
    }
  } catch (error) {
    console.error("Weather API error:", error)
    return getMockWeatherData(location)
  }
}

function getMockWeatherData(location: string): WeatherData {
  // Fallback mock data when API is unavailable
  const mockData: Record<string, WeatherData> = {
    "Charlotte, NC": {
      temp: "72°F",
      condition: "Partly Cloudy",
      humidity: "65%",
      windSpeed: "8 mph",
      precipitation: "10%",
      forecast: [
        { day: "Today", high: "74", low: "58", condition: "Sunny" },
        { day: "Tomorrow", high: "72", low: "56", condition: "Partly Cloudy" },
        { day: "Sat", high: "69", low: "54", condition: "Overcast" },
      ],
    },
    "Las Vegas, NV": {
      temp: "78°F",
      condition: "Sunny",
      humidity: "25%",
      windSpeed: "12 mph",
      precipitation: "0%",
      forecast: [
        { day: "Today", high: "82", low: "65", condition: "Sunny" },
        { day: "Tomorrow", high: "79", low: "63", condition: "Sunny" },
        { day: "Sat", high: "76", low: "61", condition: "Partly Cloudy" },
      ],
    },
  }

  return (
    mockData[location] || {
      temp: "70°F",
      condition: "Partly Cloudy",
      humidity: "50%",
      windSpeed: "10 mph",
      precipitation: "15%",
      forecast: [
        { day: "Today", high: "72", low: "58", condition: "Partly Cloudy" },
        { day: "Tomorrow", high: "70", low: "56", condition: "Cloudy" },
        { day: "Sat", high: "68", low: "54", condition: "Light Rain" },
      ],
    }
  )
}

export function getWeatherBettingInsight(weather: WeatherData): string {
  const condition = weather.condition.toLowerCase()
  const windSpeed = Number.parseInt(weather.windSpeed)
  const precipitation = Number.parseInt(weather.precipitation)

  if (condition.includes("rain") || precipitation > 50) {
    return "Wet conditions favor experienced players with strong mental games. Consider backing consistent performers over big arms."
  }

  if (windSpeed > 15) {
    return "Windy conditions can level the playing field. Look for players with strong forehand shots and wind experience."
  }

  if (condition.includes("sunny") && windSpeed < 10) {
    return "Ideal conditions favor consistent, accurate players. Top seeds have a significant advantage."
  }

  return "Mixed conditions create opportunities for value bets on players who adapt well to changing weather."
}
