import * as DebugPauseReason from '../DebugPausedReason/DebugPausedReason.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'

export const getDebugPausedMessage = (reason: any): string => {
  switch (reason) {
    case DebugPauseReason.Exception:
      return DebugStrings.debuggerPausedOnException()
    case DebugPauseReason.Other:
      return DebugStrings.debuggerPaused()
    default:
      return `Debugger paused (${reason})`
  }
}
