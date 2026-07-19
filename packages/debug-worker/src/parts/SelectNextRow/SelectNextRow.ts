import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { selectIndex } from '../SelectIndex/SelectIndex.ts'

export const selectNextRow = (state: RunAndDebugState): RunAndDebugState => {
  const { selectedIndex } = state
  return selectIndex(state, selectedIndex + 1)
}
