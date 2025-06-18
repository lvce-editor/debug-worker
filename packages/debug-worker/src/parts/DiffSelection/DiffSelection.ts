import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const isEqual = (oldState: RunAndDebugState, newState: RunAndDebugState): boolean => {
  return oldState.editingselectionstart === newState.editingselectionstart && oldState.editingselectionend === newState.editingselectionend
}
