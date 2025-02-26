"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { RadioGroup } from "@headlessui/react"

import { scenarios } from "../../../lib/scenarios"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label" // Update this path to the correct one if necessary

export default function ScenePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [sceneIndex, setSceneIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const scenario = scenarios[params.id]
  const scene = scenario.scenes[sceneIndex]

  useEffect(() => {
    if (sceneIndex >= scenario.scenes.length) {
      router.push(`/completion/${params.id}?score=${score}`)
    }
  }, [sceneIndex, scenario.scenes.length, router, params.id, score])

  if (!scenario || !scene) {
    return null
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (selectedOption === null) return

    if (selectedOption === scene.positive) {
      setScore((prev) => prev + 5)
      router.push(`/feedback/${params.id}?result=positive&scene=${sceneIndex}`)
    } else {
      router.push(`/feedback/${params.id}?result=negative&scene=${sceneIndex}`)
    }
    setSceneIndex((prev) => prev + 1)
    setSelectedOption(null)
  }

  return (
    <main className="container max-w-2xl py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{scene.question}</CardTitle>
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
            <RadioGroup value={selectedOption} onChange={setSelectedOption}>
              <div className="space-y-3">
                {scene.options.map((option, index) => (
                  <Label
                    key={index}
                    className={`flex cursor-pointer items-center rounded-lg border p-4 transition-colors hover:bg-muted ${
                      selectedOption === index ? "border-primary" : ""
                    }`}
                  >
                    <RadioGroup.Option value={index} className="sr-only" />
                    <span>{option.toString()}</span>
                  </Label>
                ))}
              </div>
            </RadioGroup>
            <Button type="submit" className="w-full" disabled={selectedOption === null}>
              Submit Advice
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

