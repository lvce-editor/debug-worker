import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import { getSectionIndex } from '../GetSectionIndex/GetSectionIndex.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handleClickSectionBreakPoints = (state: RunAndDebugState): RunAndDebugState => {
  const { breakPointsExpanded } = state
  const newState: RunAndDebugState = {
    ...state,
    breakPointsExpanded: !breakPointsExpanded,
    selectedIndex: getSectionIndex(state, DebugRowName.BreakPoints),
    focus: WhenExpression.FocusDebugRow,
  }
  return updateVisibleRows(newState)
}
