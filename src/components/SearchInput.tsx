import type { ChangeEvent } from "react"

interface Props {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ value, onChange }: Props) => {
  return (
    <input 
      type="text"
      className="p-2 border rounded"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  )
}