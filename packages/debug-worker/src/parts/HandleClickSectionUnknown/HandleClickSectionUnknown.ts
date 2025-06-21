import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleClickSectionUnkown = (state: RunAndDebugState): RunAndDebugState => {
  const { callStackExpanded } = state
  const newState = {
    ...state,
    callStackExpanded: !callStackExpanded,
  }
  return updateVisibleRows(newState)
}
