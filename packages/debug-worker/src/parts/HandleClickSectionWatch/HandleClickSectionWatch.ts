import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleClickSectionWatch = (state: RunAndDebugState): RunAndDebugState => {
  const { watchExpanded } = state
  const newState = {
    ...state,
    watchExpanded: !watchExpanded,
    selectedIndex: 0, // Set to first row when section is expanded
  }
  return updateVisibleRows(newState)
}
