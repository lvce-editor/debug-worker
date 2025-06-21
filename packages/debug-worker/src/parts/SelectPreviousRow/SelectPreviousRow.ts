import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { clamp } from '../Clamp/Clamp.ts'

export const selectPreviousRow = (state: RunAndDebugState): RunAndDebugState => {
  const { selectedIndex, visibleRows } = state
  if (visibleRows.length === 0) {
    return {
      ...state,
      selectedIndex: -1,
    }
  }
  const maxIndex = visibleRows.length - 1
  const clampedIndex = clamp(selectedIndex, -1, maxIndex)
  const newIndex = clamp(clampedIndex - 1, -1, maxIndex)
  return {
    ...state,
    selectedIndex: newIndex,
  }
}
