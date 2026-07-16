import Header from './components/Header.tsx'
import HabitForm from './components/HabitForm.tsx'
import HabitList from './components/HabitList.tsx'
import { HabitProvider } from './context/HabitProvider.tsx'

export default function App() {

  return (
    <div className="max-w-2x1 mx-auto p-4 flex flex-col gap-4">
      <HabitProvider>
        <Header />
        <HabitForm />
        <HabitList />
      </HabitProvider>
    </div>

  )
}