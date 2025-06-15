import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const addWatchExpression = (state: RunAndDebugState, expression: string): RunAndDebugState => {
  const { watchExpressions } = state
  const watchExpression: WatchExpression = {
    expression,
    value: null,
  }
  return {
    ...state,
    watchExpressions: [...watchExpressions, watchExpression],
    focus: WhenExpression.FocusDebugWatchInput,
  }
}
