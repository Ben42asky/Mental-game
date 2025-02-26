"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import type { Scene } from "@/types"
import { useGame } from "@/contexts/game-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface SceneQuestionProps {
  scenarioId: string
  scene: Scene
}

export function SceneQuestion({ scenarioId, scene }: SceneQuestionProps) {
  const router = useRouter()
  const { dispatch } = useGame()
  const [selected, setSelected] = useState<number | null>(null)

  if (!scene) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selected === null) return

    if (selected === scene.positive) {
      dispatch({ type: "ADD_SCORE", payload: 5 })
      router.push(`/feedback/${scenarioId}?result=positive&option=${selected}`)
    } else {
      router.push(`/feedback/${scenarioId}?result=negative&option=${selected}`)
    }
    dispatch({ type: "NEXT_SCENE" })
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{scene.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={scene.image || "/placeholder.svg"}
            alt="Scene"
            width={600}
            height={300}
            className="aspect-[2/1] object-cover"
          />
        </div>
        <p className="text-muted-foreground">{scene.description}</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <RadioGroup value={selected?.toString()} onValueChange={(value) => setSelected(Number.parseInt(value))}>
            <div className="space-y-3">
              {scene.options.map((option, index) => (
                <div key={index}>
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} className="peer sr-only" />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex cursor-pointer items-center rounded-lg border p-4 peer-data-[state=checked]:border-primary peer-data-[state=checked]:ring-1 peer-data-[state=checked]:ring-primary hover:bg-muted"
                  >
                    {option.text}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
          <Button type="submit" className="w-full" disabled={selected === null}>
            Submit Answer
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

