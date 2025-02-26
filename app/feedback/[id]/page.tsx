"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ThumbsDown, ThumbsUp } from "lucide-react"

import { scenarios } from "@/lib/scenarios"
import { useGame } from "@/contexts/game-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeedbackPageProps {
  params: {
    id: string
  }
  searchParams: {
    result: "positive" | "negative"
    option: string
  }
}

export default function FeedbackPage({ params, searchParams }: FeedbackPageProps) {
  const router = useRouter()
  const { state } = useGame()
  const scenarioId = params?.id

  if (!scenarioId || !scenarios[scenarioId]) {
    router.push("/scenarios")
    return null
  }

  const scenario = scenarios[scenarioId]
  const scene = scenario.scenes[state.sceneIndex - 1]

  if (!scene) {
    router.push("/scenarios")
    return null
  }

  const selectedOption = scene.options[Number.parseInt(searchParams.option)]
  const isLastScene = state.sceneIndex >= scenario.scenes.length

  return (
    <div className="container flex min-h-screen items-center justify-center py-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            {searchParams.result === "positive" ? (
              <ThumbsUp className="text-green-500" />
            ) : (
              <ThumbsDown className="text-red-500" />
            )}
            Feedback
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg bg-muted p-4">
            <p className="font-medium">Your choice:</p>
            <p className="mt-2 text-muted-foreground">{selectedOption.text}</p>
          </div>
          <div className="space-y-4">
            <p className="font-medium">{selectedOption.feedback}</p>
            <p className="text-muted-foreground">{selectedOption.consequences}</p>
          </div>
          <div className="pt-4">
            {isLastScene ? (
              <Button asChild className="w-full">
                <Link href={`/complete/${scenarioId}`}>Complete Scenario</Link>
              </Button>
            ) : (
              <Button asChild className="w-full">
                <Link href={`/play/${scenarioId}`}>
                  {searchParams.result === "positive" ? "Next Scene" : "Try Again"}
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

