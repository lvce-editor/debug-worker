import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleClickSectionCallstack = (state: RunAndDebugState): RunAndDebugState => {
  const { callStackExpanded } = state
  const newState = {
    ...state,
    callStackExpanded: !callStackExpanded,
    focusedIndex: 1, // TODO don't hardcode number
  }
  return updateVisibleRows(newState)
}
