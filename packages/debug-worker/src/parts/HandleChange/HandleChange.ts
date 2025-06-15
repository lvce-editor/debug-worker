import type { ChangeParams } from '../ChangeParams/ChangeParams.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import { getPausedInfo2 } from '../GetPausedInfo2/GetPausedInfo2.ts'
import * as HandleResumed from '../HandleResumed/HandleResumed.ts'

const handlePaused = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId } = state
  try {
    const { callFrameId, callStack, scopeChain, pausedMessage, pausedReason, expandedIds, scriptMap } = await getPausedInfo2(debugId)
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
    }
  } catch {
    return state
  }
}

export const handleChange = async (state: RunAndDebugState, params: ChangeParams): Promise<RunAndDebugState> => {
  if (params.type === 'resumed') {
    return HandleResumed.handleResumed(state)
  }
  if (params.type === 'paused') {
    return handlePaused(state)
  }
  return state
}
