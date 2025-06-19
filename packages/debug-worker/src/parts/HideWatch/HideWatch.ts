import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const hideWatch = (state: RunAndDebugState): RunAndDebugState => {
  return {
    ...state,
    watchVisible: false,
  }
}
