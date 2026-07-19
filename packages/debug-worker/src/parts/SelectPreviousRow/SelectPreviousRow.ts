import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { selectIndex } from '../SelectIndex/SelectIndex.ts'

export const selectPreviousRow = (state: RunAndDebugState): RunAndDebugState => {
  const { selectedIndex } = state
  if (selectedIndex === 0) {
    return state
  }
  return selectIndex(state, selectedIndex - 1)
}
