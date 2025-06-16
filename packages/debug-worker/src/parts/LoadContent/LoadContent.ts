import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import { getDebugId } from '../GetDebugId/GetDebugId.ts'

export const loadContent = async (state: RunAndDebugState, isTest: boolean, savedState: unknown): Promise<RunAndDebugState> => {
  const debugId = getDebugId(isTest)
  return {
    ...state,
    debugId,
    debugState: DebugState.Default,
    scopeExpanded: true,
    callStackExpanded: true,
  }
}
