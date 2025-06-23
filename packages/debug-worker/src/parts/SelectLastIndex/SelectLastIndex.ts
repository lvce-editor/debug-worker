import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { selectIndex } from '../SelectIndex/SelectIndex.ts'

export const selectLastIndex = (state: RunAndDebugState): RunAndDebugState => {
  const { visibleRows } = state
  const lastIndex = visibleRows.length - 1
  return selectIndex(state, lastIndex)
}
