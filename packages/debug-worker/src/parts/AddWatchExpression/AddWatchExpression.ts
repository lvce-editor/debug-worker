import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const addWatchExpression = async (state: RunAndDebugState, expression = ''): Promise<RunAndDebugState> => {
  const { watchExpressions } = state
  const watchExpression: WatchExpression = {
    expression,
    isEditing: true,
    value: null,
  }
  const newWatchExpressions1 = [...watchExpressions, watchExpression]
  const newState: RunAndDebugState = {
    ...state,
    editingselectionend: expression.length,
    editingselectionstart: 0,
    focus: WhenExpression.FocusDebugWatchInput,
    watchExpressions: newWatchExpressions1,
  }
  return updateVisibleRows(newState)
}
