import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names and merges Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a score number with leading zeros
 */
export function formatScore(score: number): string {
  return score.toString().padStart(3, "0")
}

/**
 * Checks if it's the last scene in a scenario
 */
export function isLastScene(currentSceneIndex: number, totalScenes: number): boolean {
  return currentSceneIndex >= totalScenes - 1
}

/**
 * Calculates the percentage of correct answers
 */
export function calculateProgress(score: number, totalScenes: number): number {
  const maxScore = totalScenes * 5 // 5 points per correct answer
  return Math.round((score / maxScore) * 100)
}

/**
 * Gets feedback based on the final score percentage
 */
export function getFinalFeedback(percentage: number): string {
  if (percentage >= 80) {
    return "Excellent! You've shown great decision-making skills!"
  } else if (percentage >= 60) {
    return "Good job! Keep practicing to improve your responses."
  } else {
    return "Keep practicing! Learning from each scenario will help you improve."
  }
}

/**
 * Shuffles an array using Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

/**
 * Generates a random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9)
}

/**
 * Delays execution for a specified time
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Truncates text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

/**
 * Validates if a scenario exists
 */
export function isValidScenario(scenarioId: string, scenarios: Record<string, any>): boolean {
  return scenarioId in scenarios
}

