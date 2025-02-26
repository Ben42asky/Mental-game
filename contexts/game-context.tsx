"use client"

import type React from "react"

import { createContext, useContext, useReducer } from "react"

interface GameState {
  currentScenario: string | null
  sceneIndex: number
  score: number
  completed: boolean
}

type GameAction =
  | { type: "START_SCENARIO"; payload: string }
  | { type: "NEXT_SCENE" }
  | { type: "ADD_SCORE"; payload: number }
  | { type: "RESET_GAME" }

const initialState: GameState = {
  currentScenario: null,
  sceneIndex: 0,
  score: 0,
  completed: false,
}

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "START_SCENARIO":
      return {
        ...initialState,
        currentScenario: action.payload,
      }
    case "NEXT_SCENE":
      return {
        ...state,
        sceneIndex: state.sceneIndex + 1,
      }
    case "ADD_SCORE":
      return {
        ...state,
        score: state.score + action.payload,
      }
    case "RESET_GAME":
      return initialState
    default:
      return state
  }
}

const GameContext = createContext<{
  state: GameState
  dispatch: React.Dispatch<GameAction>
} | null>(null)

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>
}

export function useGame() {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error("useGame must be used within a GameProvider")
  }
  return context
}

