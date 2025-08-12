import { type NextRequest, NextResponse } from "next/server"
import { getLiveOdds } from "@/lib/api/odds"

export async function GET(request: NextRequest, { params }: { params: { eventId: string } }) {
  try {
    const { eventId } = params

    if (!eventId) {
      return NextResponse.json({ error: "Event ID is required" }, { status: 400 })
    }

    const oddsData = await getLiveOdds(eventId)

    if (!oddsData) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 })
    }

    return NextResponse.json(oddsData, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60", // 5 min cache, 1 min stale
      },
    })
  } catch (error) {
    console.error("Odds API route error:", error)
    return NextResponse.json({ error: "Failed to fetch odds data" }, { status: 500 })
  }
}
