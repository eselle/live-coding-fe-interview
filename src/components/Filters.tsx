interface Props {
  isActive: boolean
  onIsActiveChange: (event: any) => void
  roleSelected: string
  onRoleSelect: (event: any) => void
}

export const Filters = ({ isActive, onIsActiveChange, roleSelected, onRoleSelect }: Props) => {
    return (
      <div className="flex gap-x-2">
        <select onChange={onRoleSelect} className="border bg-[#242424] py-2 px-1 rounded" value={roleSelected}>
          <option value="all">All</option>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="viewer">Viewer</option>
        </select>
        <label className="flex gap-x-1 items-center">
          <input onChange={onIsActiveChange} type="checkbox" checked={isActive}></input>
          Only Active
        </label>
      </div>
    )
}