export const isSupportedOpenUri = (uri: string): boolean => {
  return uri.startsWith('file://')
}
