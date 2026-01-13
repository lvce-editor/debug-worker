import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import * as InputSource from '../InputSource/InputSource.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const editWatchExpression = (state: RunAndDebugState, index: number): RunAndDebugState => {
  const { watchExpressions } = state
  const item = watchExpressions[index]
  if (!item) {
    return state
  }
  const newItem: WatchExpression = {
    ...item,
    isEditing: true,
  }
  const newWatchExpressions = watchExpressions.toSpliced(index, 1, newItem)
  const newState: RunAndDebugState = {
    ...state,
    editingselectionend: item.expression.length,
    editingselectionstart: 0,
    editingValue: item.expression,
    focus: WhenExpression.FocusDebugWatchInput,
    inputSource: InputSource.Script,
    watchExpressions: newWatchExpressions,
  }
  return updateVisibleRows(newState)
}
