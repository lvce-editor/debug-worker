import * as DebugPauseReason from '../DebugPausedReason/DebugPausedReason.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'

export const getDebugPausedMessage = (reason: any): string => {
  switch (reason) {
    case DebugPauseReason.Other:
      return DebugStrings.debuggerPaused()
    case DebugPauseReason.Exception:
      return DebugStrings.debuggerPausedOnException()
    default:
      return `Debugger paused (${reason})`
  }
}
