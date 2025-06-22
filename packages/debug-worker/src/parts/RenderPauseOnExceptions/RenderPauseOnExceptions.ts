import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import * as ExceptionBreakPoints from '../ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderPauseOnExceptions = (oldState: RunAndDebugState, newState: RunAndDebugState): ViewletCommand => {
  const { exceptionBreakPoints, id } = newState
  const isPauseOnExceptionsChecked = exceptionBreakPoints === ExceptionBreakPoints.All
  // TODO allow unchecking checkbox
  // TODO allow rendering other checkbox
  return ['Viewlet.setCheckBoxValue', id, InputName.PauseOnExceptions, isPauseOnExceptionsChecked]
}
