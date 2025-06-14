export const getDebugUri = (key: number, scriptId: string): string => {
  const uri = `debug:///${key}/${scriptId}`
  return uri
}
