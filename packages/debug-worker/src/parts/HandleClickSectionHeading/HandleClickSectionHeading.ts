import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { handleClickSectionBreakPoints } from '../HandleClickSectionBreakPoints/HandleClickSectionBreakPoints.ts'
import { handleClickSectionCallstack } from '../HandleClickSectionCallstack/HandleClickSectionCallstack.ts'
import { handleClickSectionScope } from '../HandleClickSectionScope/HandleClickSectionScope.ts'
import { handleClickSectionWatch } from '../HandleClickSectionWatch/HandleClickSectionWatch.ts'

export const handleClickSectionHeading = async (state: RunAndDebugState, text: string): Promise<RunAndDebugState> => {
  switch (text) {
    case 'Watch':
    case 'DebugSectionHeader DebugSectionHeaderWatch':
      return handleClickSectionWatch(state)
    case 'Breakpoints':
    case 'BreakPoints':
    case 'BreakPoints':
    case 'DebugSectionHeader DebugSectionHeaderBreakPoints':
      return handleClickSectionBreakPoints(state)
    case 'Scope':
    case 'DebugSectionHeader DebugSectionHeaderScope':
      return handleClickSectionScope(state)
    case 'Call Stack':
    case 'DebugSectionHeader DebugSectionHeaderCall Stack':
      return handleClickSectionCallstack(state)
    default:
      return state
  }
}
