import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const hideSection = (state: RunAndDebugState, visibilityKey: keyof RunAndDebugState): RunAndDebugState => {
  return {
    ...state,
    [visibilityKey]: false,
  }
}
