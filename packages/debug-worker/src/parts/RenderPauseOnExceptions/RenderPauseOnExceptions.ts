import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as ExceptionBreakPoints from '../ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderPauseOnExceptions = (oldState: RunAndDebugState, newState: RunAndDebugState): readonly any[] => {
  const { exceptionBreakPoints } = newState
  const commands: any[] = []

  // Check if pause on exceptions checkbox should be checked
  const isPauseOnExceptionsChecked = exceptionBreakPoints === ExceptionBreakPoints.All
  commands.push(['viewlet.setCheckBoxValue', newState.id, InputName.PauseOnExceptions, isPauseOnExceptionsChecked])

  // Check if pause on uncaught exceptions checkbox should be checked
  const isPauseOnUncaughtExceptionsChecked = exceptionBreakPoints === ExceptionBreakPoints.Uncaught
  commands.push(['viewlet.setCheckBoxValue', newState.id, InputName.PauseOnUncaughtExceptions, isPauseOnUncaughtExceptionsChecked])

  return commands
}
