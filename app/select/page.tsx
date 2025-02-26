import Image from "next/image"
import Link from "next/link"

import { scenarios } from "@/lib/scenarios"

export default function SelectPage() {
  return (
    <main className="container max-w-4xl py-8">
      <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-primary">Select a Scenario</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(scenarios).map(([id, scenario]) => (
          <Link
            key={id}
            href={`/scene/${id}`}
            className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-colors hover:border-primary"
          >
            <Image
              src={scenario.image || "/placeholder.svg"}
              alt={scenario.title}
              width={400}
              height={200}
              className="aspect-[2/1] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
              <h2 className="text-xl font-semibold text-white">{scenario.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

