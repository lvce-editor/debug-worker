import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const hideCallStack = (state: RunAndDebugState): RunAndDebugState => {
  return {
    ...state,
    callStackVisible: false,
  }
}
