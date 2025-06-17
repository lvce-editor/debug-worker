import { restoreBoolean } from '../RestoreBoolean/RestoreBoolean.ts'

export const restoreWatchExpanded = (savedState: unknown): boolean => {
  return restoreBoolean(savedState, 'watchExpanded')
}
