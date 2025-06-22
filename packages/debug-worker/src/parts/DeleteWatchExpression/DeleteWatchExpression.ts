import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const deleteWatchExpression = (state: RunAndDebugState, index: number): RunAndDebugState => {
  if (index < 0 || index >= state.watchExpressions.length) {
    return state
  }
  const newState: RunAndDebugState = {
    ...state,
    watchExpressions: state.watchExpressions.toSpliced(index, 1),
  }
  return updateVisibleRows(newState)
}
