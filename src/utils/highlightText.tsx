export const highlightMatch = (text: string, query: string) => {
  if (!query) return text

  const escapedQuery = query.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  )

  const regex = new RegExp(`(${escapedQuery})`, "gi")

  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <mark key={index}>{part}</mark>
    ) : (
      <span key={index}>{part}</span>
    )
  )
}