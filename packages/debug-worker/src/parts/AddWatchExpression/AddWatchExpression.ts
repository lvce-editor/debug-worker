import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import { evaluateWatchExpressions } from '../EvaluateWatchExpressions/EvaluateWatchExpressions.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

const getNewWatchExpressions = async (
  debugId: any,
  callFrameId: any,
  debugState: number,
  watchExpressions: readonly WatchExpression[],
): Promise<readonly WatchExpression[]> => {
  if (debugState === DebugState.Paused) {
    const newWatchExpressions = await evaluateWatchExpressions(debugId, callFrameId, watchExpressions)
    return newWatchExpressions
  }
  return watchExpressions
}

export const addWatchExpression = async (state: RunAndDebugState, expression: string): Promise<RunAndDebugState> => {
  const { watchExpressions, debugId, callFrameId, debugState } = state
  const watchExpression: WatchExpression = {
    expression,
    value: null,
    isEditing: true,
  }
  const newWatchExpressions1 = [...watchExpressions, watchExpression]
  const newWatchExpressions2 = await getNewWatchExpressions(debugId, callFrameId, debugState, newWatchExpressions1)
  return {
    ...state,
    watchExpressions: newWatchExpressions2,
    focus: WhenExpression.FocusDebugWatchInput,
  }
}
