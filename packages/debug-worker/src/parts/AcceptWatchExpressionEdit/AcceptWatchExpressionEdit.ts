import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getNewWatchExpressionsAccept } from '../GetNewWatchExpressionsAccept/GetNewWatchExpressionsAccept.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const acceptWatchExpressionEdit = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { watchExpressions, editingValue, debugId, debugState, callFrameId } = state
  const newWatchExpressions = await getNewWatchExpressionsAccept(debugId, callFrameId, debugState, watchExpressions, editingValue)
  if (watchExpressions === newWatchExpressions) {
    return state
  }
  const newState: RunAndDebugState = {
    ...state,
    watchExpressions: newWatchExpressions,
    focus: WhenExpression.FocusDebugRow,
    editingValue: '',
    editingselectionstart: 0,
    editingselectionend: 0,
  }
  return updateVisibleRows(newState)
}
