export const isSupportedOpenUri = (uri: string): boolean => {
  if (uri.startsWith('file://')) {
    return true
  }
  return false
}
