import type { RestoredState } from '../RestoredState/RestoredState.ts'
import { restoreBreakPointsExpanded } from '../RestoreBreakPointsExpanded/RestoreBreakPointsExpanded.ts'
import { restoreEditingValue } from '../RestoreEditingValue/RestoreEditingValue.ts'
import { restoreFocus } from '../RestoreFocus/RestoreFocus.ts'
import { restoreScopeExpanded } from '../RestoreScopeExpanded/RestoreScopeExpanded.ts'
import { restoreWatchExpanded } from '../RestoreWatchExpanded/RestoreWatchExpanded.ts'
import { restoreWatchExpressions } from '../RestoreWatchExpressions/RestoreWatchExpressions.ts'

export const restoreState = (savedState: unknown): RestoredState => {
  const watchExpressions = restoreWatchExpressions(savedState)
  const watchExpanded = restoreWatchExpanded(savedState)
  const scopeExpanded = restoreScopeExpanded(savedState)
  const breakPointsExpanded = restoreBreakPointsExpanded(savedState)
  const focus = restoreFocus(savedState)
  const editingValue = restoreEditingValue(savedState)
  return {
    watchExpressions,
    watchExpanded,
    scopeExpanded,
    breakPointsExpanded,
    focus,
    editingValue,
  }
}
