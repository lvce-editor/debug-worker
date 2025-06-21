import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const selectPreviousRow = (state: RunAndDebugState): RunAndDebugState => {
  const { selectedIndex, visibleRows } = state
  const maxIndex = visibleRows.length - 1
  const newIndex = Math.max(-1, selectedIndex - 1)

  return {
    ...state,
    selectedIndex: newIndex,
  }
}
