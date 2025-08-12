// Live odds API integration (mock implementation)
export interface PlayerOdds {
  player: string
  odds: string
  impliedProbability: number
  movement: "up" | "down" | "stable"
}

export interface EventOdds {
  eventId: string
  eventName: string
  lastUpdated: string
  mpoOdds: PlayerOdds[]
  fpoOdds: PlayerOdds[]
}

export async function getLiveOdds(eventId: string): Promise<EventOdds | null> {
  try {
    // In production, this would integrate with real sportsbook APIs
    // For now, we'll use mock data with realistic odds movements
    const mockOdds = await getMockOddsData(eventId)
    return mockOdds
  } catch (error) {
    console.error("Odds API error:", error)
    return null
  }
}

async function getMockOddsData(eventId: string): Promise<EventOdds> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  const mockEvents: Record<string, EventOdds> = {
    "dgpt-championship-2024": {
      eventId: "dgpt-championship-2024",
      eventName: "DGPT Championship",
      lastUpdated: new Date().toISOString(),
      mpoOdds: [
        { player: "Paul McBeth", odds: "+450", impliedProbability: 18.2, movement: "down" },
        { player: "Ricky Wysocki", odds: "+550", impliedProbability: 15.4, movement: "up" },
        { player: "Calvin Heimburg", odds: "+650", impliedProbability: 13.3, movement: "stable" },
        { player: "Eagle McMahon", odds: "+700", impliedProbability: 12.5, movement: "up" },
        { player: "Gannon Buhr", odds: "+800", impliedProbability: 11.1, movement: "down" },
        { player: "Simon Lizotte", odds: "+900", impliedProbability: 10.0, movement: "stable" },
      ],
      fpoOdds: [
        { player: "Paige Pierce", odds: "+300", impliedProbability: 25.0, movement: "stable" },
        { player: "Kristin Tattar", odds: "+400", impliedProbability: 20.0, movement: "up" },
        { player: "Catrina Allen", odds: "+500", impliedProbability: 16.7, movement: "down" },
        { player: "Eveliina Salonen", odds: "+600", impliedProbability: 14.3, movement: "stable" },
      ],
    },
  }

  return (
    mockEvents[eventId] || {
      eventId,
      eventName: "Tournament",
      lastUpdated: new Date().toISOString(),
      mpoOdds: [],
      fpoOdds: [],
    }
  )
}

export function calculateImpliedProbability(americanOdds: string): number {
  const odds = Number.parseInt(americanOdds.replace("+", ""))
  if (americanOdds.startsWith("+")) {
    return (100 / (odds + 100)) * 100
  } else {
    return (Math.abs(odds) / (Math.abs(odds) + 100)) * 100
  }
}

export function formatOddsMovement(movement: "up" | "down" | "stable"): {
  icon: string
  color: string
  text: string
} {
  switch (movement) {
    case "up":
      return { icon: "↗", color: "text-red-600", text: "Odds lengthening" }
    case "down":
      return { icon: "↘", color: "text-green-600", text: "Odds shortening" }
    default:
      return { icon: "→", color: "text-gray-600", text: "Stable" }
  }
}
