import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const handleWatchValueChange = (state: RunAndDebugState, value: string): RunAndDebugState => {
  const { watchExpressions } = state
  const lastIndex = watchExpressions.length - 1
  const lastExpression = watchExpressions[lastIndex]
  if (lastExpression && lastExpression.expression === '') {
    return {
      ...state,
      watchExpressions: watchExpressions.toSpliced(lastIndex, 1, {
        expression: value,
        value: null,
      }),
    }
  }
  return state
}
