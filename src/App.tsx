import { useEffect, useMemo, useState, type ChangeEvent } from 'react'
import './App.css'
import { SearchInput } from './components/SearchInput'
import { Filters } from './components/Filters'
import { useSearch } from './hooks/useSearch'
import { SearchResultItem } from './components/SearchResultItem'
import { debounce } from './utils/debounce'

type User = {
  id: number
  name: string
  role: "admin" | "editor" | "viewer"
  active: boolean
}

const USERS: User[] = [
  { id: 1, name: "Alice", role: "admin", active: true },
  { id: 2, name: "Bob", role: "editor", active: false },
  { id: 3, name: "Charlie", role: "viewer", active: true },
  { id: 4, name: "Diana", role: "editor", active: true },
]

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [isActive, setIsActive] = useState(false)
  const [roleSelected, setRoleSelected] = useState("all")
  const { users, search } = useSearch(USERS)

  const debouncedSearch = useMemo(
    () =>
      debounce(
        (searchInput: string, isActive: boolean, roleSelected: string) => {
          search(searchInput, isActive, roleSelected)
        },
        300
      ),
    [search]
  )

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  const handleIsActiveChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsActive(event.target.checked)
  }

  const handleRoleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setRoleSelected(event.target.value)
  }

  useEffect(() => {
    debouncedSearch(searchInput, isActive, roleSelected)
  }, [searchInput, isActive, roleSelected, debouncedSearch])

  return (
    <div className="min-h-screen w-full flex flex-col align-top">
      <div className="mb-4 flex items-center gap-x-2">
        <Filters isActive={isActive} roleSelected={roleSelected} onIsActiveChange={handleIsActiveChange} onRoleSelect={handleRoleSelect} />
        <SearchInput onChange={handleSearchChange} value={searchInput} />
      </div>
      <ul className="flex flex-col gap-y-2">
        {users.length === 0 && <li>No results</li>}
        {users.map((user) => <SearchResultItem user={user} searchTerm={searchInput} />)}
      </ul>
    </div>
  )
}

export default App
