import { createContext, type ReactNode, useState, useContext } from "react"
import { isSameDay } from "date-fns"

//Types
export type Habit = {
    id: string,
    name: string,
    completions: Date[]
}

type HabitContextType = {
    habits: Habit[]
    addHabit: (name: string) => void
    deleteHabit: (id: string) => void
    toggleHabit: (id: string, date: Date) => void
}

type HabitProviderProps = {
    children: ReactNode
}

export const HabitContext = createContext<null | HabitContextType>(null)

//Context Provider
export function HabitProvider({ children }: HabitProviderProps) {
    const [habits, setHabits] = useState<Habit[]>([])

    function addHabit(name: string) {
        setHabits([...habits, { id: crypto.randomUUID(), name, completions: [] }])
    }

    function deleteHabit(id: string) {
        setHabits(curr => curr.filter(habit => habit.id !== id))
    }

    function toggleHabit(id: string, date: Date) {
        setHabits(curr => (
            curr.map(
                h => {
                    if (h.id !== id) return h
                    const alreadyDone = h.completions.some(c => isSameDay(c, date))
                    const completions = alreadyDone ? h.completions.filter(c => !isSameDay(c, date)) : [...h.completions, date]
                    return { ...h, completions }
                }
            )
        ))
    }

    return <HabitContext value={{ habits, addHabit, toggleHabit, deleteHabit }}>{children}</HabitContext>
}

//Custom Hook: useHabit
export function useHabits() {
    const habitContext = useContext(HabitContext)
    if (habitContext == null) throw new Error("Null Context")
    return habitContext
}