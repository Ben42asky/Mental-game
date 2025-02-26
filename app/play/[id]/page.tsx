"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { use } from "react" // Import the `use` function

import { scenarios } from "@/lib/scenarios"
import { useGame } from "@/contexts/game-context"
import { SceneQuestion } from "@/components/scene-question"

interface PlayPageProps {
  params: {
    id: string
  }
}

export default function PlayPage({ params }: PlayPageProps) {
  const router = useRouter()
  const { state } = useGame()

  // Directly use `params.id`
  const scenarioId = params.id

  useEffect(() => {
    if (!state.currentScenario || !scenarioId || !scenarios[scenarioId]) {
      router.push("/scenarios")
      return
    }
  }, [state.currentScenario, scenarioId, router])

  const scenario = scenarios[scenarioId]

  if (!scenario || state.sceneIndex >= scenario.scenes.length) {
    router.push(`/complete/${scenarioId}`)
    return null
  }

  return (
    <div className="container flex min-h-screen items-center justify-center py-8">
      <div className="w-full max-w-2xl">
        <SceneQuestion scenarioId={scenarioId} scene={scenario.scenes[state.sceneIndex]} />
      </div>
    </div>
  )
}