import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import { getSectionIndex } from '../GetSectionIndex/GetSectionIndex.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handleClickSectionScope = (state: RunAndDebugState): RunAndDebugState => {
  const { scopeExpanded } = state
  const newState: RunAndDebugState = {
    ...state,
    scopeExpanded: !scopeExpanded,
    selectedIndex: getSectionIndex(state, DebugRowName.Scope),
    focus: WhenExpression.FocusDebugRow,
  }
  return updateVisibleRows(newState)
}
