import { restoreBoolean } from '../RestoreBoolean/RestoreBoolean.ts'

export const restoreScopeExpanded = (savedState: unknown): boolean => {
  return restoreBoolean(savedState, 'scopeExpanded')
}
