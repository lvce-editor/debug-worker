import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleClickSectionCallstack = (state: RunAndDebugState): RunAndDebugState => {
  const { callStackExpanded } = state
  const newState = {
    ...state,
    callStackExpanded: !callStackExpanded,
    selectedIndex: 1, // Set to first row when section is expanded
  }
  return updateVisibleRows(newState)
}
