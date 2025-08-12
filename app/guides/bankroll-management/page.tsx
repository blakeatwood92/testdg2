import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, Shield, TrendingUp, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function BankrollManagementPage() {
  const stakingPlans = [
    {
      name: "Fixed Unit Staking",
      description: "Bet the same amount on every wager regardless of confidence",
      pros: ["Simple to implement", "Protects against big losses", "Good for beginners"],
      cons: ["Doesn't maximize value bets", "Slower bankroll growth"],
      example: "Always bet $25 per wager with a $1,000 bankroll (2.5% units)",
      bestFor: "Conservative bettors and beginners",
    },
    {
      name: "Percentage Staking",
      description: "Bet a fixed percentage of current bankroll on each wager",
      pros: ["Adjusts to bankroll changes", "Compounds growth", "Natural risk management"],
      cons: ["Can be volatile", "Requires discipline during losing streaks"],
      example: "Always bet 3% of current bankroll - $30 on $1,000, $36 on $1,200",
      bestFor: "Experienced bettors with good discipline",
    },
    {
      name: "Confidence-Based Staking",
      description: "Vary bet size based on confidence level and perceived value",
      pros: ["Maximizes value opportunities", "Higher potential returns", "Flexible approach"],
      cons: ["Requires excellent judgment", "Higher risk of large losses", "Emotional decisions"],
      example: "1 unit on standard bets, 2-3 units on high-confidence plays",
      bestFor: "Expert bettors with proven track record",
    },
    {
      name: "Kelly Criterion",
      description: "Mathematical formula to determine optimal bet size based on edge",
      pros: ["Mathematically optimal", "Maximizes long-term growth", "Objective approach"],
      cons: ["Complex calculations", "Requires accurate probability estimates", "Can suggest large bets"],
      example: "If you have 10% edge on +200 odds, Kelly suggests 3.33% of bankroll",
      bestFor: "Advanced bettors with statistical knowledge",
    },
  ]

  const bankrollRules = [
    {
      rule: "Never Risk More Than 5%",
      explanation: "No single bet should exceed 5% of your total bankroll, regardless of confidence level.",
      reasoning: "Protects against catastrophic losses that could end your betting career.",
    },
    {
      rule: "Set Stop-Loss Limits",
      explanation: "If you lose 20-25% of your bankroll, take a break and reassess your strategy.",
      reasoning: "Prevents emotional betting and gives time to analyze what went wrong.",
    },
    {
      rule: "Separate Betting Money",
      explanation: "Keep your betting bankroll completely separate from living expenses and savings.",
      reasoning: "Ensures you never bet money you can't afford to lose.",
    },
    {
      rule: "Track Every Bet",
      explanation: "Record all bets with date, amount, odds, reasoning, and outcome.",
      reasoning: "Essential for analyzing performance and identifying profitable patterns.",
    },
    {
      rule: "Regular Bankroll Reviews",
      explanation: "Reassess your bankroll size and unit amounts monthly or quarterly.",
      reasoning: "Allows for adjustments based on performance and changing financial situation.",
    },
  ]

  const commonMistakes = [
    {
      mistake: "Chasing Losses",
      description: "Increasing bet sizes after losses to try to recover quickly",
      consequence: "Often leads to even bigger losses and bankroll destruction",
      solution: "Stick to your predetermined staking plan regardless of recent results",
    },
    {
      mistake: "Betting Too Big",
      description: "Risking large percentages of bankroll on 'sure things'",
      consequence: "One bad beat can wipe out weeks or months of profits",
      solution: "Never exceed 5% of bankroll on any single bet, no matter how confident",
    },
    {
      mistake: "No Record Keeping",
      description: "Failing to track bets and analyze performance",
      consequence: "Can't identify profitable strategies or learn from mistakes",
      solution: "Use a spreadsheet or app to record every bet with full details",
    },
    {
      mistake: "Emotional Betting",
      description: "Making bets based on feelings rather than analysis",
      consequence: "Leads to poor decision-making and unprofitable betting",
      solution: "Always have a logical reason for every bet and stick to your process",
    },
  ]

  const sampleBankrolls = [
    {
      size: "$500 Beginner",
      unitSize: "$10-15 (2-3%)",
      strategy: "Fixed unit staking with conservative approach",
      monthlyGoal: "5-10% growth with focus on learning",
      riskLevel: "Low",
    },
    {
      size: "$1,000 Intermediate",
      unitSize: "$20-30 (2-3%)",
      strategy: "Percentage staking with occasional confidence plays",
      monthlyGoal: "8-15% growth with moderate risk",
      riskLevel: "Medium",
    },
    {
      size: "$5,000 Advanced",
      unitSize: "$100-150 (2-3%)",
      strategy: "Kelly Criterion with sophisticated analysis",
      monthlyGoal: "12-20% growth with calculated risks",
      riskLevel: "Medium-High",
    },
  ]

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
              <Link href="/guides" className="text-gray-700 hover:text-green-600 transition-colors">
                All Guides
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

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-yellow-100 text-yellow-800">Intermediate Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bankroll <span className="text-green-600">Management</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Master the art of money management in disc golf betting. Learn proven staking strategies, risk management
            techniques, and how to protect your betting funds for long-term success.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span>📖 10 min read</span>
            <span>•</span>
            <span>🎯 Intermediate Level</span>
            <span>•</span>
            <span>💰 Money Management</span>
          </div>
        </div>

        {/* Staking Plans */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Staking Strategies</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {stakingPlans.map((plan, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-green-700">Pros:</h4>
                        <ul className="space-y-1">
                          {plan.pros.map((pro, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-red-700">Cons:</h4>
                        <ul className="space-y-1">
                          {plan.cons.map((con, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-blue-800 mb-1">Example:</p>
                      <p className="text-sm text-gray-700">{plan.example}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-green-800">Best For: {plan.bestFor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bankroll Rules */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Bankroll Rules</h2>
          <div className="space-y-6">
            {bankrollRules.map((rule, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 text-green-700">{rule.rule}</h3>
                      <p className="text-gray-700 mb-3">{rule.explanation}</p>
                      <p className="text-sm text-gray-600 italic">{rule.reasoning}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sample Bankrolls */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sample Bankroll Strategies</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {sampleBankrolls.map((bankroll, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{bankroll.size}</CardTitle>
                  <Badge
                    variant="outline"
                    className={
                      bankroll.riskLevel === "Low"
                        ? "border-green-200 text-green-700"
                        : bankroll.riskLevel === "Medium"
                          ? "border-yellow-200 text-yellow-700"
                          : "border-red-200 text-red-700"
                    }
                  >
                    {bankroll.riskLevel} Risk
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Unit Size:</p>
                      <p className="text-sm text-gray-600">{bankroll.unitSize}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Strategy:</p>
                      <p className="text-sm text-gray-600">{bankroll.strategy}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Monthly Goal:</p>
                      <p className="text-sm text-gray-600">{bankroll.monthlyGoal}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Bankroll Mistakes</h2>
          <div className="space-y-6">
            {commonMistakes.map((mistake, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 text-red-700">{mistake.mistake}</h3>
                      <p className="text-gray-700 mb-2">{mistake.description}</p>
                      <div className="bg-red-50 rounded-lg p-3 mb-3">
                        <p className="text-sm font-medium text-red-800 mb-1">Consequence:</p>
                        <p className="text-sm text-gray-700">{mistake.consequence}</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-sm font-medium text-green-800 mb-1">Solution:</p>
                        <p className="text-sm text-gray-700">{mistake.solution}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bankroll Calculator */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              Quick Bankroll Calculator
            </CardTitle>
            <CardDescription>Determine your optimal unit size based on bankroll and risk tolerance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-3">Conservative (1-2%)</h3>
                <p className="text-sm text-gray-600 mb-4">Low risk, steady growth approach for beginners</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>$500 Bankroll:</span>
                    <span className="font-semibold">$5-10 units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>$1,000 Bankroll:</span>
                    <span className="font-semibold">$10-20 units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>$2,500 Bankroll:</span>
                    <span className="font-semibold">$25-50 units</span>
                  </div>
                </div>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold mb-3">Moderate (2-3%)</h3>
                <p className="text-sm text-gray-600 mb-4">Balanced approach for experienced bettors</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>$500 Bankroll:</span>
                    <span className="font-semibold">$10-15 units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>$1,000 Bankroll:</span>
                    <span className="font-semibold">$20-30 units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>$2,500 Bankroll:</span>
                    <span className="font-semibold">$50-75 units</span>
                  </div>
                </div>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <h3 className="font-semibold mb-3">Aggressive (3-5%)</h3>
                <p className="text-sm text-gray-600 mb-4">Higher risk, higher reward for experts only</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>$500 Bankroll:</span>
                    <span className="font-semibold">$15-25 units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>$1,000 Bankroll:</span>
                    <span className="font-semibold">$30-50 units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>$2,500 Bankroll:</span>
                    <span className="font-semibold">$75-125 units</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              Build Your Complete Strategy
            </CardTitle>
            <CardDescription>Combine bankroll management with other essential skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-3">Betting Strategy</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn advanced techniques for finding value and making profitable bets.
                </p>
                <Link href="/guides/betting-strategy">
                  <Button className="bg-green-600 hover:bg-green-700">Strategy Guide</Button>
                </Link>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-3">Course Analysis</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Understand how different courses affect player performance and betting value.
                </p>
                <Link href="/guides/course-analysis">
                  <Button variant="outline">Course Guide</Button>
                </Link>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-3">Player Research</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Master the art of evaluating player form, strengths, and betting value.
                </p>
                <Link href="/guides/player-research">
                  <Button variant="outline">Research Guide</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-yellow-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Start Building Your Bankroll</h2>
          <p className="text-lg mb-6 opacity-90">
            Apply proper bankroll management with these trusted disc golf sportsbooks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sportsbooks/coolbet">
              <Button className="bg-white text-green-600 hover:bg-gray-100">CoolBet - $2,000 Bonus</Button>
            </Link>
            <Link href="/sportsbooks/betcris">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Betcris - Risk-Free Bet
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
