import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as ExceptionBreakPoints from '../ExceptionBreakPoints/ExceptionBreakPoints.ts'
import { setPauseOnExceptions } from '../SetPauseOnExceptions/SetPauseOnExceptions.ts'

const getNewExceptionState = (exceptionState: number): number => {
  switch (exceptionState) {
    case ExceptionBreakPoints.All:
      return ExceptionBreakPoints.None
    case ExceptionBreakPoints.None:
      return ExceptionBreakPoints.Uncaught
    case ExceptionBreakPoints.Uncaught:
      return ExceptionBreakPoints.None
    default:
      return exceptionState
  }
}

export const handleClickPauseOnUncaughtExceptions = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { exceptionBreakPoints } = state
  const newExceptionState = getNewExceptionState(exceptionBreakPoints)
  return setPauseOnExceptions(state, newExceptionState)
}
