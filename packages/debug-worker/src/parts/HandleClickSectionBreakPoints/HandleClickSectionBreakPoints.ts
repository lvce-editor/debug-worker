import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleClickSectionBreakPoints = (state: RunAndDebugState): RunAndDebugState => {
  const { breakPointsExpanded } = state
  const newState = {
    ...state,
    breakPointsExpanded: !breakPointsExpanded,
    selectedIndex: 1, // Set to first row when section is expanded
  }
  return updateVisibleRows(newState)
}
