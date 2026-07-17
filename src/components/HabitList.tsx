// import Button from "./Button";
import HabitItem from "./HabitItem"
import { useHabits } from "../context/HabitProvider"


type HabitListProps = {
    visibleDates: Date[]
}

export default function HabitList({ visibleDates }: HabitListProps) {
    const { habits } = useHabits()
    if (habits.length === 0) {
        return <p>No Habits yet.</p>
    }
    return (
        <div className="flex flex-col gap-3">
            {habits.map(habit => (
                <HabitItem key={habit.id} habit={habit} visibleDates={visibleDates}></HabitItem>))}
        </div>
    )
}