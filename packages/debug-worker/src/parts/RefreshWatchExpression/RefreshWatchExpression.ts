import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import { evaluateWatchExpressions } from '../EvaluateWatchExpressions/EvaluateWatchExpressions.ts'

export const refreshWatchExpression = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId, callFrameId, debugState, watchExpressions } = state

  if (debugState !== DebugState.Paused) {
    return state
  }

  const newWatchExpressions = await evaluateWatchExpressions(debugId, callFrameId, watchExpressions)

  return {
    ...state,
    watchExpressions: newWatchExpressions,
  }
}
