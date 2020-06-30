export const range = (start, end, increment = 1) => {
  const items = []

  for (let i = start; i <= end; i += increment) {
    items.push(i)
  }

  return items
}
