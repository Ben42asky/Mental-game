"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import type { Scenario } from "@/types"
import { useGame } from "../contexts/game-context"
import { Card } from "@/components/ui/card"
import { scenarios } from "@/lib/scenarios"

interface ScenarioCardProps {
  id: string
  scenario: Scenario
}

export async function generateStaticParams() {
  return Object.keys(scenarios).map((id) => ({
    id,
  }))
}
export function ScenarioCard({ id, scenario }: ScenarioCardProps) {
  const router = useRouter()
  const { dispatch } = useGame()

  const handleSelect = () => {
    dispatch({ type: "START_SCENARIO", payload: id })
    router.push(`/play/${id}`)
  }

  return (
    <Card
      className="group relative cursor-pointer overflow-hidden transition-all hover:ring-2 hover:ring-primary hover:ring-offset-2"
      onClick={handleSelect}
    >
      <div className="relative aspect-[2/1]">
        <Image
          src={scenario.image || "/placeholder.svg"}
          alt={scenario.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
          <h2 className="text-xl font-semibold text-white">{scenario.title}</h2>
        </div>
      </div>
    </Card>
  )
}

