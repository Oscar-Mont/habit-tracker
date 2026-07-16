import Header from './components/Header.tsx'
import HabitForm from './components/HabitForm.tsx'
import HabitList from './components/HabitList.tsx'
import { useState } from 'react'
import type { Habit } from './components/HabitList.tsx'
import { isSameDay } from 'date-fns'



export default function App() {

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

  return (
    <div className="max-w-2x1 mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} deleteHabit={deleteHabit} toggleHabit={toggleHabit} />
    </div>

  )
}