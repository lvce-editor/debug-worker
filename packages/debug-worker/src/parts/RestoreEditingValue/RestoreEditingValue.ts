import { hasProperty } from '../HasProperty/HasProperty.ts'

export const restoreEditingValue = (savedState: unknown): string => {
  if (hasProperty(savedState, 'editingValue') && typeof savedState.editingValue === 'string') {
    return savedState.editingValue
  }
  return ''
}
