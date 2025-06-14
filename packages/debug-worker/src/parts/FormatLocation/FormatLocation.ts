export const formatLocation = (url: string, rowIndex: number, columnIndex: number): string => {
  const lastSlashIndex = url.lastIndexOf('/')
  const adjustedRowIndex = rowIndex + 1
  if (lastSlashIndex === -1) {
    return `${url}:${adjustedRowIndex}`
  }
  const part = url.slice(lastSlashIndex + 1)
  return `${part}:${adjustedRowIndex}`
}
