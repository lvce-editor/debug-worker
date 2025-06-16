import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as Debug from '../Debug/Debug.ts'
import { getNewWatchExpressionsEvaluate } from '../GetNewWatchExpressionsEvaluate/GetNewWatchExpressionsEvaluate.ts'

export const evaluateWatchExpression = async (state: RunAndDebugState, expression: string): Promise<RunAndDebugState> => {
  const { debugId, callFrameId, watchExpressions } = state
  if (!debugId) {
    throw new Error('No debug session')
  }
  const result = await Debug.evaluate(debugId, expression, callFrameId)
  return {
    ...state,
    watchExpressions: getNewWatchExpressionsEvaluate(watchExpressions, expression, result.result),
  }
}
