## Live Coding Exercise: Searchable & Filterable List

### Context

You are building a small UI component for an internal dashboard. The component displays a list of users and allows basic interaction.

---

## Requirements

### 1. Display a List

You are given a list of users:

```tsx
type User = {
  id:number
  name:string
  role:"admin" |"editor" |"viewer"
  active:boolean
}

const USERS:User[] = [
  {id:1,name:"Alice",role:"admin",active:true },
  {id:2,name:"Bob",role:"editor",active:false },
  {id:3,name:"Charlie",role:"viewer",active:true },
  {id:4,name:"Diana",role:"editor",active:true },
]

```

Render the list showing:

- Name
    - Role
- Active status

---

### 2. Search

Add a text input that:

- Filters users by **name**
- Is **case-insensitive**
- Updates results as the user types

---

### 3. Filter

Add:

- A dropdown to filter by **role** (`All`, `admin`, `editor`, `viewer`)
- A checkbox to show **only active users**

Filters should be combinable with search.

---

### 4. Performance & UX

- Avoid unnecessary re-renders
- Show a “No results found” state when applicable
- Keep the code readable and well-structured

---

## Constraints

- React + TypeScript
- No external libraries
- Functional components only

---

## Bonus (If Time Allows)

Pick **one**:

- Debounce the search input
- Highlight matching text in names
- Extract logic into a reusable hook
- Make filters controlled via URL query params