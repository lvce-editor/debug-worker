import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getNewWatchExpressionsAccept } from '../GetNewWatchExpressionsAccept/GetNewWatchExpressionsAccept.ts'

export const acceptWatchExpressionEdit = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { watchExpressions, editingValue, debugId, debugState, callFrameId } = state
  const newWatchExpressions = await getNewWatchExpressionsAccept(debugId, callFrameId, debugState, watchExpressions, editingValue)
  return {
    ...state,
    watchExpressions: newWatchExpressions,
    focus: 0,
    editingValue: '',
    editingselectionstart: 0,
    editingselectionend: 0,
  }
}
