import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const handleWatchValueChange = (state: RunAndDebugState, value: string): RunAndDebugState => {
  const { watchExpressions } = state
  const lastExpression = watchExpressions[watchExpressions.length - 1]
  if (lastExpression && lastExpression.expression === '') {
    return {
      ...state,
      watchExpressions: watchExpressions.toSpliced(-1, 1, {
        expression: value,
        value: null,
      }),
    }
  }
  return state
}
