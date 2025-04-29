import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as Debug from '../Debug/Debug.ts'
import * as DebugState from '../DebugState/DebugState.ts'

export const loadContent = async (state: RunAndDebugState, isTest: boolean): Promise<RunAndDebugState> => {
  const debugId = isTest ? 'test-debug' : 'node-debug' // TODO
  await Debug.start(debugId)
  return {
    ...state,
    debugId,
    debugState: DebugState.Default,
    scopeExpanded: true,
    callStackExpanded: true,
  }
}
