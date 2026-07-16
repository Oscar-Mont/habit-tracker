import { isToday } from "date-fns"
import { useHabits } from "../context/HabitProvider"
import Button from "./Button"

export default function Header() {
    const { habits } = useHabits()

    const doneToday = habits.filter(h => h.completions.some(c => isToday(c))).length
    return (
        <header className="flex items-center justify-between p-2">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold">Habit Tracker</h1>
                <span className="text-zinc-400 text-sm">{doneToday} / {habits.length}</span>
            </div>

            <div className="flex flex-col gap-1 items-end">
                <span>Apr 6 - Apr 10</span>
                <div className="flex items-center gap-3">
                    <Button >Previous</Button>
                    <Button >Next</Button>
                </div>
            </div>
        </header>
    )
}