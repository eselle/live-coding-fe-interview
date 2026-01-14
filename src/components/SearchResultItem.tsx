import { highlightMatch } from "../utils/highlightText"

interface Props {
  user: {
    id: string
    name: string
    role: string
    active: boolean
  }
  searchTerm: string
}

export const SearchResultItem = ({ user, searchTerm }: Props) => {
  return (
    <li key={user.id} className="flex w-full flex-col border rounded py-2">
      <span>Name: {highlightMatch(user.name, searchTerm)}</span>
      <span>Role: {user.role}</span>
      <span>Active: {user.active ? "YES" : "NO" }</span>
    </li>
  )
}