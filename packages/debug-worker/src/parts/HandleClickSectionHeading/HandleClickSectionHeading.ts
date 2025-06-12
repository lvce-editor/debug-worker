import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { handleClickSectionBreakPoints } from '../HandleClickSectionBreakPoints/HandleClickSectionBreakPoints.ts'
import { handleClickSectionCallstack } from '../HandleClickSectionCallstack/HandleClickSectionCallstack.ts'
import { handleClickSectionScope } from '../HandleClickSectionScope/HandleClickSectionScope.ts'
import { handleClickSectionWatch } from '../HandleClickSectionWatch/HandleClickSectionWatch.ts'

// TODO use input name
export const handleClickSectionHeading = async (state: RunAndDebugState, text: string): Promise<RunAndDebugState> => {
  switch (text) {
    case 'Watch':
      return handleClickSectionWatch(state)
    case 'Breakpoints':
    case 'BreakPoints':
      return handleClickSectionBreakPoints(state)
    case 'Scope':
      return handleClickSectionScope(state)
    case 'Call Stack':
    case 'DebugSectionHeader Stack':
      return handleClickSectionCallstack(state)
    default:
      return state
  }
}
