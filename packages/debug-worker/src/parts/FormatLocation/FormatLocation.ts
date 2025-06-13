export const formatLocation = (url: string, rowIndex: number, columnIndex: number): string => {
  const lastSlashIndex = url.lastIndexOf('/')
  if (lastSlashIndex === -1) {
    return `${url}:${rowIndex}:${columnIndex}`
  }
  const part = url.slice(lastSlashIndex + 1)
  return `${part}:${rowIndex}:${columnIndex}`
}
