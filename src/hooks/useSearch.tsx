import { useState } from "react"

export const useSearch = (USERS) => {
  const [users, setUsers] = useState(USERS)

  const search = (searchTerm: string, isOnlyActive: boolean, roleSelected: string) => {
    const matchedResults = USERS.filter(user => {
      const activeResult = isOnlyActive ? user.active : true
      const roleResult = roleSelected === "all" ? true : roleSelected === user.role

      return activeResult && roleResult && user.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    })

    if (matchedResults.length > 0) { 
      setUsers(matchedResults)
    } else {
      setUsers([])
    }
  }

  return {
    users,
    search
  }
}