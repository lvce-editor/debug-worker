import type { ChangeParams } from '../ChangeParams/ChangeParams.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { handlePaused2 } from '../HandlePaused2/HandlePaused2.ts'
import * as HandleResumed from '../HandleResumed/HandleResumed.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleChange = async (state: RunAndDebugState, params: ChangeParams): Promise<RunAndDebugState> => {
  let newState = state

  if (params.type === 'resumed') {
    newState = HandleResumed.handleResumed(state)
  } else if (params.type === 'paused') {
    newState = await handlePaused2(state)
  }

  return updateVisibleRows(newState)
}
