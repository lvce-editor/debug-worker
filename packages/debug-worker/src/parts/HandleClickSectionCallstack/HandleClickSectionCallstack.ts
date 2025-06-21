import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import { getSectionIndex } from '../GetSectionIndex/GetSectionIndex.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handleClickSectionCallstack = (state: RunAndDebugState): RunAndDebugState => {
  const { callStackExpanded } = state
  const newState: RunAndDebugState = {
    ...state,
    callStackExpanded: !callStackExpanded,
    selectedIndex: getSectionIndex(state, DebugRowName.CallStack),
    focus: WhenExpression.FocusDebugRow,
  }
  return updateVisibleRows(newState)
}
