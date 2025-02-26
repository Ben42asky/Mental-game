import { scenarios } from "@/lib/scenarios"
import { ScenarioCard } from "@/components/scenario-card"

export default function ScenariosPage() {
  return (
    <div className="container flex min-h-screen flex-col items-center py-8">
      <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-[#0d3c26]">Choose Your Scenario</h1>
      <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-2">
        {Object.entries(scenarios).map(([id, scenario]) => (
          <ScenarioCard key={id} id={id} scenario={scenario} />
        ))}
      </div>
    </div>
  )
}

