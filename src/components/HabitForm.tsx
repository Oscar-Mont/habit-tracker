import Button from "./Button";
// import { useState } from "react";

export default function HabitForm() {
    // const [name, setName] = useState("")
    return (
        <form className="flex gap-2" action="">
            <input className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-purple-500" type="text" placeholder="New Habit ..." />
            <Button>Add habit</Button>
        </form>
    )
}