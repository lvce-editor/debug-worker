import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const addWatchExpression = async (state: RunAndDebugState, expression: string = ''): Promise<RunAndDebugState> => {
  const { watchExpressions } = state
  const watchExpression: WatchExpression = {
    expression,
    value: null,
    isEditing: true,
  }
  const newWatchExpressions1 = [...watchExpressions, watchExpression]
  const newState: RunAndDebugState = {
    ...state,
    watchExpressions: newWatchExpressions1,
    focus: WhenExpression.FocusDebugWatchInput,
    editingselectionstart: 0,
    editingselectionend: expression.length,
  }
  return updateVisibleRows(newState)
}
