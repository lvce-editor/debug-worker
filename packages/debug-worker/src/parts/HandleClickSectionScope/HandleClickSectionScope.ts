import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleClickSectionScope = (state: RunAndDebugState): RunAndDebugState => {
  const { scopeExpanded } = state
  const newState = {
    ...state,
    scopeExpanded: !scopeExpanded,
    focusedIndex: 2, // TODO don't hardcode number
  }
  return updateVisibleRows(newState)
}
