export const formatLocation = (url: string, rowIndex: number, columnIndex: number): string => {
  return `${url}:${rowIndex}:${columnIndex}`
}
