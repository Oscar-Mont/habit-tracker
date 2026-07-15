// import Button from "./Button";
import HabitItem from "./HabitItem"

export default function HabitList() {
    const habits = [
        { id: 1, name: "Running" }
    ]
    if (habits.length === 0) {
        return <p>No Habits yet.</p>
    }
    return (
        <div className="flex flex-col gap-3">
            {habits.map(habit => (
                <HabitItem key={habit.id} name={habit.name}></HabitItem>))}
        </div>
    )
}