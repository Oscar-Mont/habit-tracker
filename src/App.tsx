import Header from './components/Header.tsx'
import HabitForm from './components/HabitForm.tsx'
import HabitList from './components/HabitList.tsx'
import { HabitProvider } from './context/HabitProvider.tsx'
import { useState } from 'react'
import { addWeeks, endOfWeek, startOfWeek, eachDayOfInterval } from 'date-fns'

export default function App() {
  const [weekOffset, setWeekOffset] = useState(0)

  const week = addWeeks(new Date(), weekOffset)

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(week, { weekStartsOn: 1 }),
    end: endOfWeek(week, { weekStartsOn: 1 })
  })

  function onNext() {
    setWeekOffset(o => o + 1)
  }

  function onPrev() {
    setWeekOffset(o => o - 1)
  }

  return (
    <div className="max-w-2x1 mx-auto p-4 flex flex-col gap-4">
      <HabitProvider>
        <Header visibleDates={visibleDates} onNext={onNext} onPrev={onPrev} />
        <HabitForm />
        <HabitList visibleDates={visibleDates} />
      </HabitProvider>
    </div>

  )
}