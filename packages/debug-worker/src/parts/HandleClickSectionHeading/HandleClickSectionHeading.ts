import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { handleClickSectionBreakPoints } from '../HandleClickSectionBreakPoints/HandleClickSectionBreakPoints.ts'
import { handleClickSectionCallstack } from '../HandleClickSectionCallstack/HandleClickSectionCallstack.ts'
import { handleClickSectionScope } from '../HandleClickSectionScope/HandleClickSectionScope.ts'
import { handleClickSectionWatch } from '../HandleClickSectionWatch/HandleClickSectionWatch.ts'

export const handleClickSectionHeading = (state: RunAndDebugState, text: string): any => {
  switch (text) {
    case 'Watch':
      return handleClickSectionWatch(state)
    case 'Breakpoints':
    case 'BreakPoints':
      return handleClickSectionBreakPoints(state)
    case 'Scope':
      return handleClickSectionScope(state)
    case 'Call Stack':
      return handleClickSectionCallstack(state)
    default:
      return state
  }
}
