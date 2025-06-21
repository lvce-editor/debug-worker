import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import { getSectionIndex } from '../GetSectionIndex/GetSectionIndex.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleClickSectionBreakPoints = (state: RunAndDebugState): RunAndDebugState => {
  const { breakPointsExpanded } = state
  const newState = {
    ...state,
    breakPointsExpanded: !breakPointsExpanded,
    selectedIndex: getSectionIndex(state, DebugSectionId.BreakPoints),
  }
  return updateVisibleRows(newState)
}
