import type { Habit } from "./HabitList"
import Button from "./Button"
import { endOfWeek, startOfWeek, eachDayOfInterval, format, isFuture } from "date-fns"

interface HabitItemProps {
    habit: Habit,
    deleteHabit: (id: string) => void
}

export default function HabitItem({ habit, deleteHabit }: HabitItemProps) {
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
                    <Button key={date.toISOString()} variant="date" disabled={isFuture(date)}>
                        <span className="font-medium">{format(date, "EEE")}</span>
                        <span>{format(date, "d")}</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}