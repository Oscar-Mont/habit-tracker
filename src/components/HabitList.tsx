// import Button from "./Button";
import HabitItem from "./HabitItem"

export type Habit = {
    id: string,
    name: string
}

type HabitListProps = {
    habits: Habit[];
    deleteHabit: (id: string) => void
}

export default function HabitList({ habits, deleteHabit }: HabitListProps) {

    if (habits.length === 0) {
        return <p>No Habits yet.</p>
    }
    return (
        <div className="flex flex-col gap-3">
            {habits.map(habit => (
                <HabitItem key={habit.id} habit={habit} deleteHabit={deleteHabit}></HabitItem>))}
        </div>
    )
}