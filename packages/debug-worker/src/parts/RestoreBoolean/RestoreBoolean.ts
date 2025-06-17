export const restoreBoolean = (savedState: unknown, key: any): boolean => {
  // TODO try to fix typedscript
  if (savedState && typeof savedState === 'object' && key in savedState && typeof savedState[key as keyof typeof savedState] === 'boolean') {
    return savedState[key as keyof typeof savedState]
  }
  return false
}
