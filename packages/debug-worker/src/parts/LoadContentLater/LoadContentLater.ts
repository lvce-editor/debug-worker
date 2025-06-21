import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as Debug from '../Debug/Debug.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import * as ExtensionHostDebug from '../ExtensionHostDebug/ExtensionHostDebug.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const loadContentLater = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId } = state
  await Debug.start(debugId)
  const status = await ExtensionHostDebug.getPausedStatus(debugId)
  if (status && status.status === 'unavailable') {
    const newState: RunAndDebugState = {
      ...state,
      debugState: DebugState.Unavailable,
    }
    return updateVisibleRows(newState)
  }
  return state
}
