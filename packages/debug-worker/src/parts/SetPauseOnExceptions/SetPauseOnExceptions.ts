import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as Debug from '../Debug/Debug.ts'

export const setPauseOnExceptions = async (state: RunAndDebugState, value: any): Promise<RunAndDebugState> => {
  const { debugId } = state
  await Debug.setPauseOnExceptions(debugId, value)
  return {
    ...state,
    exceptionBreakPoints: value,
  }
}
