import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugPausedReason from '../DebugPausedReason/DebugPausedReason.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleResumed = (state: RunAndDebugState): RunAndDebugState => {
  const newState = {
    ...state,
    callFrameId: '',
    callStack: [],
    debugState: DebugState.Default,
    pausedMessage: '',
    pausedReason: DebugPausedReason.None,
    scopeChain: [],
  }
  return updateVisibleRows(newState)
}
