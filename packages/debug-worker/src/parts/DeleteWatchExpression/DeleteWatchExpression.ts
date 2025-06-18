import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const deleteWatchExpression = (state: RunAndDebugState, index: number): RunAndDebugState => {
  if (index < 0 || index >= state.watchExpressions.length) {
    return state
  }
  return {
    ...state,
    watchExpressions: state.watchExpressions.toSpliced(index, 1),
  }
}
