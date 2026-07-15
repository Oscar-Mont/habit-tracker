import Header from './components/Header.tsx'
import HabitForm from './components/HabitForm.tsx'
import HabitList from './components/HabitList.tsx'

export default function App() {
  return (
    <div className="max-w-2x1 mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm />
      <HabitList />
    </div>

  )
}