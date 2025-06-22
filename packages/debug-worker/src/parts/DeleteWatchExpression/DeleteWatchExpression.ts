import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const deleteWatchExpression = (state: RunAndDebugState, index: number): RunAndDebugState => {
  const { watchExpressions } = state
  if (index < 0 || index >= watchExpressions.length) {
    return state
  }
  const newState: RunAndDebugState = {
    ...state,
    watchExpressions: watchExpressions.toSpliced(index, 1),
  }
  return updateVisibleRows(newState)
}
