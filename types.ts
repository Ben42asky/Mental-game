export interface Option {
    text: string
    feedback: string
    consequences: string
  }
  
  export interface Scene {
    question: string
    description: string
    image: string
    options: Option[]
    positive: number
  }
  
  export interface Scenario {
    title: string
    image: string
    scenes: Scene[]
    feedback: {
      positive: string
      negative: string
    }
  }
  
  export interface Scenarios {
    [key: string]: Scenario
  }