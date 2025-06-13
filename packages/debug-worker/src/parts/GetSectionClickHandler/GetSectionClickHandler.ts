import type { SectionClickHandler } from '../SectionClickHandler/SectionClickHandler.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import { handleClickSectionBreakPoints } from '../HandleClickSectionBreakPoints/HandleClickSectionBreakPoints.ts'
import { handleClickSectionCallstack } from '../HandleClickSectionCallstack/HandleClickSectionCallstack.ts'
import { handleClickSectionScope } from '../HandleClickSectionScope/HandleClickSectionScope.ts'
import { handleClickSectionUnkown } from '../HandleClickSectionUnknown/HandleClickSectionUnknown.ts'
import { handleClickSectionWatch } from '../HandleClickSectionWatch/HandleClickSectionWatch.ts'

export const getSectionClickHandler = (id: string): SectionClickHandler => {
  switch (id) {
    case DebugSectionId.Watch:
      return handleClickSectionWatch
    case DebugSectionId.BreakPoints:
      return handleClickSectionBreakPoints
    case DebugSectionId.Scope:
      return handleClickSectionScope
    case DebugSectionId.CallStack:
      return handleClickSectionCallstack
    default:
      return handleClickSectionUnkown
  }
}
