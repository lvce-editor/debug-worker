import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getNewWatchExpressionsCancel } from '../GetNewWatchExpressionsCancel/GetNewWatchExpressionsCancel.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const cancelWatchExpressionEdit = (state: RunAndDebugState): RunAndDebugState => {
  const { watchExpressions } = state
  const newWatchExpressions = getNewWatchExpressionsCancel(watchExpressions)
  const newState: RunAndDebugState = {
    ...state,
    watchExpressions: newWatchExpressions,
    focus: 0,
    editingselectionstart: 0,
    editingselectionend: 0,
    editingValue: '',
  }
  return updateVisibleRows(newState)
}
