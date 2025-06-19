import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const showScope = (state: RunAndDebugState): RunAndDebugState => {
  return {
    ...state,
    scopeVisible: true,
  }
}
