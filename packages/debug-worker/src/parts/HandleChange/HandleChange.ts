import type { ChangeParams } from '../ChangeParams/ChangeParams.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as HandleResumed from '../HandleResumed/HandleResumed.ts'

export const handleChange = async (state: RunAndDebugState, params: ChangeParams): Promise<RunAndDebugState> => {
  if (params.type === 'resumed') {
    return HandleResumed.handleResumed(state)
  }
  if (params.type === 'paused') {
    // TODO query status, then callstack, scopechain
    return {
      ...state,
    }
  }
  return {
    ...state,
  }
}
