import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'
import { getSectionIndex } from '../GetSectionIndex/GetSectionIndex.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'

export const handleClickSectionBreakPoints = (state: RunAndDebugState): RunAndDebugState => {
  const { breakPointsExpanded } = state
  const newState = {
    ...state,
    breakPointsExpanded: !breakPointsExpanded,
    focusedIndex: getSectionIndex(state, DebugSectionId.BreakPoints),
  }
  return updateVisibleRows(newState)
}
