import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleClickSectionBreakPoints = (state: RunAndDebugState): RunAndDebugState => {
  const { breakPointsExpanded } = state
  const newState = {
    ...state,
    breakPointsExpanded: !breakPointsExpanded,
    focusedIndex: 1, // TODO don't hardcode number
  }
  return updateVisibleRows(newState)
}
