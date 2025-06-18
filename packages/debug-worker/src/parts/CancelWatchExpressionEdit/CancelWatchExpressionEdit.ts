import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getNewWatchExpressionsCancel } from '../GetNewWatchExpressionsCancel/GetNewWatchExpressionsCancel.ts'

export const cancelWatchExpressionEdit = (state: RunAndDebugState): RunAndDebugState => {
  const { watchExpressions } = state
  const newWatchExpressions = getNewWatchExpressionsCancel(watchExpressions)
  return {
    ...state,
    watchExpressions: newWatchExpressions,
    focus: 0,
    editingselectionstart: 0,
    editingselectionend: 0,
  }
}
