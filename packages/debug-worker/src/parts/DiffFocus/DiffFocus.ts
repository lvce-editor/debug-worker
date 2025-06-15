import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const diffFocus = (oldState: RunAndDebugState, newState: RunAndDebugState): boolean => {
  return oldState.focus !== newState.focus
}
