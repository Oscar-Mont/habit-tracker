import Button from "./Button";
import { useState, type SubmitEvent } from "react";

type HabitFormProps = {
    addHabit: (name: string) => void
}

export default function HabitForm({ addHabit }: HabitFormProps) {
    const [habitName, setHabitName] = useState("")

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault()

        if (habitName.trim() === "") {
            return
        }
        setHabitName("")
        addHabit(habitName)
    }

    return (
        <form className="flex gap-2" action="" onSubmit={handleSubmit}>
            <input className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-purple-500" type="text" placeholder="New Habit ..." value={habitName} onChange={e => setHabitName(e.target.value)} />
            <Button disabled={habitName.trim() === ""}>Add habit</Button>
        </form>
    )
}