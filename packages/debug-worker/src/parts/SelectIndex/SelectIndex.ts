import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { clamp } from '../Clamp/Clamp.ts'

export const selectIndex = (state: RunAndDebugState, index: number): RunAndDebugState => {
  const { visibleRows } = state
  const maxIndex = visibleRows.length - 1
  const clampedIndex = clamp(index, -1, maxIndex)

  return {
    ...state,
    selectedIndex: clampedIndex,
  }
}
