

import Button from "./Button"
import { endOfWeek, startOfWeek, eachDayOfInterval, format, isFuture } from "date-fns"

interface HabitItemProps {
    // key: string,
    name: string
}

export default function HabitItem({ name }: HabitItemProps) {
    const visibleDates = eachDayOfInterval({
        start: startOfWeek(new Date()),
        end: endOfWeek(new Date())
    })
    return (

        <div className="rounded-xl bg-zinc-800 p-4 flex-col gap-3">
            {/*top section*/}
            <div className="flex items-center justify-between ">
                <div className="flex gap-3 items-center">
                    <span className="font-medium">{name}</span>
                    <span className="text-sm text-amber-400">3</span>
                </div>
                <Button variant="ghost-destructive">Delete</Button>
            </div>
            {/*bottom section*/}
            <div className="flex gap-1.5">
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