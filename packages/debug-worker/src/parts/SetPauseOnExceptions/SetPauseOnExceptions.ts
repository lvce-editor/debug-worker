import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as Debug from '../Debug/Debug.ts'

export const setPauseOnExceptions = async (state: RunAndDebugState, value: number): Promise<RunAndDebugState> => {
  const { debugId, exceptionBreakPoints } = state
  if (exceptionBreakPoints === value) {
    return state
  }
  await Debug.setPauseOnExceptions(debugId, value)
  return {
    ...state,
    exceptionBreakPoints: value,
  }
}
