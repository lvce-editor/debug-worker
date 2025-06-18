import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getSectionClickHandler } from '../GetSectionClickHandler/GetSectionClickHandler.ts'
import * as MousEventType from '../MouseEventType/MouseEventType.ts'

export const handleClickSectionHeading = async (state: RunAndDebugState, id: string, button: number): Promise<RunAndDebugState> => {
  if (button !== MousEventType.LeftClick) {
    return state
  }
  const fn = getSectionClickHandler(id)
  return fn(state)
}
