import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { selectIndex } from '../SelectIndex/SelectIndex.ts'

export const selectFirstIndex = (state: RunAndDebugState): RunAndDebugState => {
  return selectIndex(state, 0)
}
