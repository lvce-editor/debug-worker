import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import { getSectionIndex } from '../GetSectionIndex/GetSectionIndex.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleClickSectionScope = (state: RunAndDebugState): RunAndDebugState => {
  const { scopeExpanded } = state
  const newState = {
    ...state,
    scopeExpanded: !scopeExpanded,
    focusedIndex: getSectionIndex(state, DebugRowName.Scope),
  }
  return updateVisibleRows(newState)
}
