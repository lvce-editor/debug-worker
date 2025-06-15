import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'

const getNewWatchExpressions = (watchExpressions: readonly WatchExpression[], expression: string): readonly WatchExpression[] => {
  const watchExpression: WatchExpression = {
    expression,
    value: null,
  }
  const newWatchExpressions = [...watchExpressions, watchExpression]
  return newWatchExpressions
}

export const addWatchExpression = (state: RunAndDebugState, expression: string): RunAndDebugState => {
  const { watchExpressions } = state
  const newWatchExpressions = getNewWatchExpressions(watchExpressions, expression)
  return {
    ...state,
    watchExpressions: newWatchExpressions,
  }
}
