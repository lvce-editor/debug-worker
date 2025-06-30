export const parseIndex = (dataIndex: string): number => {
  const index = Number.parseInt(dataIndex)
  if (isNaN(index)) {
    return -1
  }
  return index
}
