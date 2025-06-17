import type { SavedState } from '../SavedState/SavedState.ts'
import { hasProperty } from '../HasProperty/HasProperty.ts'

export const restoreBoolean = (savedState: unknown, key: keyof SavedState): boolean => {
  if (hasProperty(savedState, key) && typeof savedState[key] === 'boolean') {
    return savedState[key]
  }
  return false
}
