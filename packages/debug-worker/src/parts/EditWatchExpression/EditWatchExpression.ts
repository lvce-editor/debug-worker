import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import * as InputSource from '../InputSource/InputSource.ts'
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
  return {
    ...state,
    watchExpressions: newWatchExpressions,
    focus: WhenExpression.FocusDebugWatchInput,
    inputSource: InputSource.Script,
    editingValue: item.expression,
    editingselectionstart: 0,
    editingselectionend: item.expression.length,
  }
}
