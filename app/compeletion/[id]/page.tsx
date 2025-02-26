import Link from "next/link"
import { Trophy } from "lucide-react"

import { scenarios } from "../../../lib/scenarios"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CompletionPage({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { score: string }
}) {
  const scenario = scenarios[params.id]
  const score = Number.parseInt(searchParams.score)

  return (
    <main className="container flex min-h-[50vh] max-w-2xl items-center py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Trophy className="text-yellow-500" />
            Scenario Complete
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <p className="text-lg">
            Congratulations! You have successfully completed the <strong>{scenario.title}</strong> scenario.
          </p>
          <div className="rounded-lg bg-muted p-4">
            <h2 className="text-xl font-semibold">Your Score: {score} Points</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="flex-1">
              <Link href="/select">Choose Another Scenario</Link>
            </Button>
            <Button asChild className="flex-1">
              <Link href="/">Go to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

