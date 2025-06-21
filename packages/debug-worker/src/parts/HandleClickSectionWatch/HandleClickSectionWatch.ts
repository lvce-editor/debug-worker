import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import { getSectionIndex } from '../GetSectionIndex/GetSectionIndex.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handleClickSectionWatch = (state: RunAndDebugState): RunAndDebugState => {
  const { watchExpanded } = state
  const newState: RunAndDebugState = {
    ...state,
    watchExpanded: !watchExpanded,
    selectedIndex: getSectionIndex(state, DebugRowName.Watch),
    focus: WhenExpression.FocusDebugRow,
  }
  return updateVisibleRows(newState)
}
