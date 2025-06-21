import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const showCallStack = (state: RunAndDebugState): RunAndDebugState => {
  return {
    ...state,
    callStackVisible: true,
  }
}
