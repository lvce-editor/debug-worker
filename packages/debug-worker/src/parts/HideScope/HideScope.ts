import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const hideScope = (state: RunAndDebugState): RunAndDebugState => {
  return {
    ...state,
    scopeVisible: false,
  }
}
