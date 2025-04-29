import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as ExceptionBreakPoints from '../ExceptionBreakPoints/ExceptionBreakPoints.ts'
import { setPauseOnExceptions } from '../SetPauseOnExceptions/SetPauseOnExceptions.ts'

export const handleClickPauseOnUncaughtExceptions = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { exceptionBreakPoints } = state
  switch (exceptionBreakPoints) {
    case ExceptionBreakPoints.None:
      return setPauseOnExceptions(state, ExceptionBreakPoints.Uncaught)
    case ExceptionBreakPoints.Uncaught:
      return setPauseOnExceptions(state, ExceptionBreakPoints.None)
    case ExceptionBreakPoints.All:
      return setPauseOnExceptions(state, ExceptionBreakPoints.None)
    default:
      return state
  }
}
