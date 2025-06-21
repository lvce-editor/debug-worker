import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { selectIndex } from '../SelectIndex/SelectIndex.ts'

export const selectNextRow = (state: RunAndDebugState): RunAndDebugState => {
  return selectIndex(state, state.selectedIndex + 1)
}
