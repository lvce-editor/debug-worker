import { hasProperty } from '../HasProperty/HasProperty.ts'

export const restoreFocus = (savedState: unknown): number => {
  if (hasProperty(savedState, 'focus') && typeof savedState.focus === 'number') {
    return savedState.focus
  }
  return 0
}
