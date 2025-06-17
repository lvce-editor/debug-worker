import { restoreBoolean } from '../RestoreBoolean/RestoreBoolean.ts'

export const restoreBreakPointsExpanded = (savedState: unknown): boolean => {
  return restoreBoolean(savedState, 'breakPointsExpanded')
}
