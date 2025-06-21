import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const selectIndex = (state: RunAndDebugState, index: number): RunAndDebugState => {
  const { visibleRows } = state
  const maxIndex = visibleRows.length - 1
  const clampedIndex = Math.max(-1, Math.min(index, maxIndex))

  return {
    ...state,
    selectedIndex: clampedIndex,
  }
}
