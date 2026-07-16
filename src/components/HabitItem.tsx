import type { Habit } from "../context/HabitProvider"
import Button from "./Button"
import { endOfWeek, startOfWeek, eachDayOfInterval, format, isFuture, isSameDay } from "date-fns"
import { useHabits } from "../context/HabitProvider"

interface HabitItemProps {
    habit: Habit
}

export default function HabitItem({ habit }: HabitItemProps) {
    const { deleteHabit, toggleHabit } = useHabits()

    const visibleDates = eachDayOfInterval({
        start: startOfWeek(new Date()),
        end: endOfWeek(new Date())
    })
    return (

        <div className="rounded-xl bg-zinc-800 p-4 flex-col gap-3">
            {/*top section*/}
            <div className="flex items-center justify-between ">
                <div className="flex gap-3 items-center">
                    <span className="font-medium">{habit.name}</span>
                    <span className="text-sm text-amber-400">3 days streak</span>
                </div>
                <Button onClick={() => deleteHabit(habit.id)} variant="ghost-destructive">Delete</Button>
            </div>
            {/*bottom section*/}
            <div className="flex gap-1.5 m-5">
                {visibleDates.map(date => (
                    <Button key={date.toISOString()} variant={habit.completions.some(d => isSameDay(date, d)) ? "date-success" : "date"} disabled={isFuture(date)} onClick={() => toggleHabit(habit.id, date)}>
                        <span className="font-medium">{format(date, "EEE")}</span>
                        <span>{format(date, "d")}</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}