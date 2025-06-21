import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import { getSectionIndex } from '../GetSectionIndex/GetSectionIndex.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleClickSectionCallstack = (state: RunAndDebugState): RunAndDebugState => {
  const { callStackExpanded } = state
  const newState = {
    ...state,
    callStackExpanded: !callStackExpanded,
    focusedIndex: getSectionIndex(state, DebugRowName.CallStack),
  }
  return updateVisibleRows(newState)
}
