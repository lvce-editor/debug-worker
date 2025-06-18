import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import { evaluateWatchExpressions } from '../EvaluateWatchExpressions/EvaluateWatchExpressions.ts'
import { getPausedInfo2 } from '../GetPausedInfo2/GetPausedInfo2.ts'

export const handlePaused2 = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId, watchExpressions } = state
  try {
    const { callFrameId, callStack, scopeChain, pausedMessage, pausedReason, expandedIds, scriptMap } = await getPausedInfo2(debugId)
    // TODO move this to getPausedInfo2
    const newWatchExpressions = await evaluateWatchExpressions(debugId, callFrameId, watchExpressions)
    return {
      ...state,
      debugState: DebugState.Paused,
      scopeChain,
      scopeExpanded: true,
      callStack,
      pausedReason,
      pausedMessage,
      callFrameId,
      expandedIds,
      parsedScripts: scriptMap,
      watchExpressions: newWatchExpressions,
    }
  } catch {
    return state
  }
}
