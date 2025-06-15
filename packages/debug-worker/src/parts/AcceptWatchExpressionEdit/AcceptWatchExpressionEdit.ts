import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const acceptWatchExpressionEdit = (state: RunAndDebugState, editingValue: string): RunAndDebugState => {
  const { watchExpressions } = state
  const lastExpression = watchExpressions[watchExpressions.length - 1]
  if (lastExpression && lastExpression.expression === '') {
    if (editingValue === '') {
      return {
        ...state,
        watchExpressions: watchExpressions.toSpliced(-1, 1),
        focus: 0,
      }
    }
    return {
      ...state,
      watchExpressions: watchExpressions.toSpliced(-1, 1, {
        expression: editingValue,
        value: null,
      }),
      focus: 0,
    }
  }
  return {
    ...state,
    focus: 0,
  }
}
