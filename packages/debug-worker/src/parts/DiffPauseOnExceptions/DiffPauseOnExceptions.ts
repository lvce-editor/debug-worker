import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const diffType = DiffType.RenderPauseOnExceptions

export const isEqual = (oldState: RunAndDebugState, newState: RunAndDebugState): boolean => {
  return oldState.exceptionBreakPoints === newState.exceptionBreakPoints
}
