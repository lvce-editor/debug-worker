import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const removeWatchExpression = (state: RunAndDebugState, index: number): RunAndDebugState => {
  const { watchExpressions } = state
  return {
    ...state,
    watchExpressions: watchExpressions.toSpliced(index, 1),
  }
}
