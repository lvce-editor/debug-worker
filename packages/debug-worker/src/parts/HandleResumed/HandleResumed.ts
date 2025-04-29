import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugPausedReason from '../DebugPausedReason/DebugPausedReason.ts'
import * as DebugState from '../DebugState/DebugState.ts'

export const handleResumed = (state: RunAndDebugState): RunAndDebugState => {
  return {
    ...state,
    debugState: DebugState.Default,
    scopeChain: [],
    callStack: [],
    pausedMessage: '',
    pausedReason: DebugPausedReason.None,
    callFrameId: '',
  }
}
