import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const selectNextRow = (state: RunAndDebugState): RunAndDebugState => {
  const { selectedIndex } = state
  const newIndex = selectedIndex + 1
  return {
    ...state,
    selectedIndex: newIndex,
  }
}
