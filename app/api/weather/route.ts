import { type NextRequest, NextResponse } from "next/server"
import { getWeatherData } from "@/lib/api/weather"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get("location")
    const date = searchParams.get("date")

    if (!location) {
      return NextResponse.json({ error: "Location parameter is required" }, { status: 400 })
    }

    const weatherData = await getWeatherData(location, date || undefined)

    return NextResponse.json(weatherData, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
      },
    })
  } catch (error) {
    console.error("Weather API route error:", error)
    return NextResponse.json({ error: "Failed to fetch weather data" }, { status: 500 })
  }
}
