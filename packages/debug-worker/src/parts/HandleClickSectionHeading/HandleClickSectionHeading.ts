import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { handleClickSectionBreakPoints } from '../HandleClickSectionBreakPoints/HandleClickSectionBreakPoints.ts'
import { handleClickSectionCallstack } from '../HandleClickSectionCallstack/HandleClickSectionCallstack.ts'
import { handleClickSectionScope } from '../HandleClickSectionScope/HandleClickSectionScope.ts'
import { handleClickSectionWatch } from '../HandleClickSectionWatch/HandleClickSectionWatch.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'

// TODO use input name
export const handleClickSectionHeading = async (state: RunAndDebugState, text: string): Promise<RunAndDebugState> => {
  switch (text) {
    case DebugSectionId.Watch:
      return handleClickSectionWatch(state)
    case DebugSectionId.BreakPoints:
      return handleClickSectionBreakPoints(state)
    case DebugSectionId.Scope:
      return handleClickSectionScope(state)
    case DebugSectionId.CallStack:
      return handleClickSectionCallstack(state)
    default:
      return state
  }
}
