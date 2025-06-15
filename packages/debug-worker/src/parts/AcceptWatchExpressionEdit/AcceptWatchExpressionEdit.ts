import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const acceptWatchExpressionEdit = (state: RunAndDebugState): RunAndDebugState => {
  const { watchExpressions } = state
  const lastExpression = watchExpressions[watchExpressions.length - 1]
  if (lastExpression && lastExpression.expression === '') {
    return {
      ...state,
      watchExpressions: watchExpressions.toSpliced(-1, 1),
      focus: 0,
    }
  }
  return {
    ...state,
    focus: 0,
  }
}
