import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import { getDebugId } from '../GetDebugId/GetDebugId.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const loadContent = async (state: RunAndDebugState, isTest: boolean, savedState: unknown): Promise<RunAndDebugState> => {
  if (isTest) {
    savedState = {}
  }
  const { watchExpressions, watchExpanded, breakPointsExpanded, scopeExpanded, focus, editingValue } = restoreState(savedState)
  const debugId = getDebugId(isTest)
  const newState = {
    ...state,
    debugId,
    debugState: DebugState.Default,
    scopeExpanded,
    callStackExpanded: true,
    breakPointsExpanded,
    watchExpressions,
    watchExpanded,
    focus,
    editingValue,
  }
  return updateVisibleRows(newState)
}
