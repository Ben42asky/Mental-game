"use client"

import { use } from "react" // Import the `use` function
import Link from "next/link"
import { Trophy } from "lucide-react"

import { scenarios } from "../../../lib/scenarios"
import { useGame } from "../../../contexts/game-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CompletePage({ params }: { params: { id: string } }) {
  const { state, dispatch } = useGame()

  // Unwrap the `params` Promise using `React.use()`
  const scenarioId = params.id

  // Access the scenario using the unwrapped `scenarioId`
  const scenario = scenarios[scenarioId]

  return (
    <div className="container flex min-h-screen items-center justify-center py-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Trophy className="text-yellow-500" />
            Congratulations!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <p className="text-lg">
            You have successfully completed the <strong>{scenario.title}</strong> scenario.
          </p>
          <div className="rounded-lg bg-muted p-4">
            <h2 className="text-xl font-semibold">Final Score: {state.score} Points</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="flex-1" onClick={() => dispatch({ type: "RESET_GAME" })}>
              <Link href="/scenarios">Try Another Scenario</Link>
            </Button>
            <Button asChild className="flex-1" onClick={() => dispatch({ type: "RESET_GAME" })}>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}