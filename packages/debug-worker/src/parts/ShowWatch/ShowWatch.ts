import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const showWatch = (state: RunAndDebugState): RunAndDebugState => {
  return {
    ...state,
    watchVisible: true,
  }
}
