import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import { getDebugId } from '../GetDebugId/GetDebugId.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const loadContent = async (state: RunAndDebugState, isTest: boolean, savedState: unknown): Promise<RunAndDebugState> => {
  if (isTest) {
    savedState = {}
  }
  const { breakPointsExpanded, editingValue, focus, scopeExpanded, watchExpanded, watchExpressions } = restoreState(savedState)
  const debugId = getDebugId(isTest)
  const newState = {
    ...state,
    breakPointsExpanded,
    callStackExpanded: true,
    debugId,
    debugState: DebugState.Default,
    editingValue,
    focus,
    scopeExpanded,
    watchExpanded,
    watchExpressions,
  }
  return updateVisibleRows(newState)
}
