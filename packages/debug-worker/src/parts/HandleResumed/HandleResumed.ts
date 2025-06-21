import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugPausedReason from '../DebugPausedReason/DebugPausedReason.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleResumed = (state: RunAndDebugState): RunAndDebugState => {
  const newState = {
    ...state,
    debugState: DebugState.Default,
    scopeChain: [],
    callStack: [],
    pausedMessage: '',
    pausedReason: DebugPausedReason.None,
    callFrameId: '',
  }
  return updateVisibleRows(newState)
}
