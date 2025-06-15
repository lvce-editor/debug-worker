import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const isEqual = (oldState: RunAndDebugState, newState: RunAndDebugState): boolean => {
  if (!newState.focus) {
    return true
  }
  return oldState.focus === newState.focus
}
