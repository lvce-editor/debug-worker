import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleClickSectionWatch = (state: RunAndDebugState): RunAndDebugState => {
  const { watchExpanded } = state
  const newState = {
    ...state,
    watchExpanded: !watchExpanded,
    focusedIndex: 0, // TODO don't hardcode number
  }
  return updateVisibleRows(newState)
}
