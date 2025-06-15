import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getNewWatchExpressionsAccept } from '../GetNewWatchExpressionsAccept/GetNewWatchExpressionsAccept.ts'

export const acceptWatchExpressionEdit = (state: RunAndDebugState): RunAndDebugState => {
  const { watchExpressions, editingValue } = state
  const newWatchExpressions = getNewWatchExpressionsAccept(watchExpressions, editingValue)
  return {
    ...state,
    watchExpressions: newWatchExpressions,
    focus: 0,
  }
}
