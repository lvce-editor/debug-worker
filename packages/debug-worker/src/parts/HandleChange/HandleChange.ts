import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const handleChange = async (state: RunAndDebugState, params: any): Promise<RunAndDebugState> => {
  // TODO query status, then callstack, scopechain
  return {
    ...state,
  }
}
