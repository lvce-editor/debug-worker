import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import * as InputName from '../InputName/InputName.ts'

export const addWatchExpression = (state: RunAndDebugState, expression: string): RunAndDebugState => {
  const { watchExpressions } = state
  const watchExpression: WatchExpression = {
    expression,
    value: null,
  }
  return {
    ...state,
    watchExpressions: [...watchExpressions, watchExpression],
    focus: InputName.AddWatchExpression,
  }
}
