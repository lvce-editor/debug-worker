export const removeElement = (array: readonly any[], element: any): readonly any[] => {
  const index = array.indexOf(element)
  if (index === -1) {
    return array
  }
  return [...array.slice(0, index), ...array.slice(index + 1)]
}
