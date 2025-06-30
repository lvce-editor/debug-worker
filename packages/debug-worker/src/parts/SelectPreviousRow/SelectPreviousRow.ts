import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { selectIndex } from '../SelectIndex/SelectIndex.ts'

export const selectPreviousRow = (state: RunAndDebugState): RunAndDebugState => {
  if (state.selectedIndex === 0) {
    return state
  }
  return selectIndex(state, state.selectedIndex - 1)
}
