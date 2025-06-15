import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as InputName from '../InputName/InputName.ts'

export const handleInputFieldChange = (state: RunAndDebugState, name: string, value: string): RunAndDebugState => {
  if (name === InputName.NewWatchExpression) {
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
  }
  return state
}
