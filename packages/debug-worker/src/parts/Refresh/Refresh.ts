import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const refresh = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  return {
    ...state,
  }
}
