import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="container flex min-h-screen max-w-2xl flex-col items-center justify-center gap-8 py-8">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary">Mental Rehearsal</h1>
        <p className="text-lg text-muted-foreground">
          Practice decision-making in challenging situations through guided scenarios.
        </p>
      </div>
      <Button asChild size="lg">
        <Link href="/scenarios">Start Training</Link>
      </Button>
    </main>
  )
}
