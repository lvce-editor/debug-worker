import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getNewWatchExpressionsAccept } from '../GetNewWatchExpressionsAccept/GetNewWatchExpressionsAccept.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const acceptWatchExpressionEdit = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { callFrameId, debugId, debugState, editingValue, watchExpressions } = state
  const newWatchExpressions = await getNewWatchExpressionsAccept(debugId, callFrameId, debugState, watchExpressions, editingValue)
  if (watchExpressions === newWatchExpressions) {
    return state
  }
  const newState: RunAndDebugState = {
    ...state,
    editingselectionend: 0,
    editingselectionstart: 0,
    editingValue: '',
    focus: WhenExpression.FocusDebugRow,
    watchExpressions: newWatchExpressions,
  }
  return updateVisibleRows(newState)
}
