import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const handleWatchValueChange = (state: RunAndDebugState, value: string): RunAndDebugState => {
  return {
    ...state,
    editingValue: value,
  }
}
