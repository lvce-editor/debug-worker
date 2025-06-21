import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import { getSectionIndex } from '../GetSectionIndex/GetSectionIndex.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const handleClickSectionWatch = (state: RunAndDebugState): RunAndDebugState => {
  const { watchExpanded } = state
  const newState = {
    ...state,
    watchExpanded: !watchExpanded,
    focusedIndex: getSectionIndex(state, DebugRowName.Watch),
  }
  return updateVisibleRows(newState)
}
