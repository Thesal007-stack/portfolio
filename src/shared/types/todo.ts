export interface Todo {
    id: string
    text: string
    completed: boolean
    startTime: string // e.g., "09:00" (HH:MM format)
    endTime: string // e.g., "10:00" (HH:MM format)
    day: string // e.g., "Monday", "Tuesday", etc.
  }