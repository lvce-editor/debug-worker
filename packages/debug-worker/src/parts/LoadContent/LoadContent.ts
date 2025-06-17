import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import { getDebugId } from '../GetDebugId/GetDebugId.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'

export const loadContent = async (state: RunAndDebugState, isTest: boolean, savedState: unknown): Promise<RunAndDebugState> => {
  const { watchExpressions, watchExpanded, breakPointsExpanded, scopeExpanded } = restoreState(savedState)
  const debugId = getDebugId(isTest)
  return {
    ...state,
    debugId,
    debugState: DebugState.Default,
    scopeExpanded,
    callStackExpanded: true,
    breakPointsExpanded,
    watchExpressions,
    watchExpanded,
  }
}
