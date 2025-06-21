import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const selectNextRow = (state: RunAndDebugState): RunAndDebugState => {
  const { selectedIndex, visibleRows } = state
  const maxIndex = visibleRows.length - 1
  const newIndex = Math.min(maxIndex, selectedIndex + 1)

  return {
    ...state,
    selectedIndex: newIndex,
  }
}
