import type { ChangeParams } from '../ChangeParams/ChangeParams.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { handlePaused2 } from '../HandlePaused2/HandlePaused2.ts'
import * as HandleResumed from '../HandleResumed/HandleResumed.ts'

export const handleChange = async (state: RunAndDebugState, params: ChangeParams): Promise<RunAndDebugState> => {
  if (params.type === 'resumed') {
    return HandleResumed.handleResumed(state)
  }
  if (params.type === 'paused') {
    return handlePaused2(state)
  }
  return state
}
