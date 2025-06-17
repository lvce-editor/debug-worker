import type { RestoredState } from '../RestoredState/RestoredState.ts'
import { restoreBreakPointsExpanded } from '../RestoreBreakPointsExpanded/RestoreBreakPointsExpanded.ts'
import { restoreScopeExpanded } from '../RestoreScopeExpanded/RestoreScopeExpanded.ts'
import { restoreWatchExpanded } from '../RestoreWatchExpanded/RestoreWatchExpanded.ts'
import { restoreWatchExpressions } from '../RestoreWatchExpressions/RestoreWatchExpressions.ts'

export const restoreState = (savedState: unknown): RestoredState => {
  const watchExpressions = restoreWatchExpressions(savedState)
  const watchExpanded = restoreWatchExpanded(savedState)
  const scopeExpanded = restoreScopeExpanded(savedState)
  const breakPointsExpanded = restoreBreakPointsExpanded(savedState)
  return {
    watchExpressions,
    watchExpanded,
    scopeExpanded,
    breakPointsExpanded,
  }
}
