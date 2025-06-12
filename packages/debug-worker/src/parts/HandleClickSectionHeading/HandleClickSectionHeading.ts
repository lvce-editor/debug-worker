import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getSectionClickHandler } from '../GetSectionClickHandler/GetSectionClickHandler.ts'

export const handleClickSectionHeading = async (state: RunAndDebugState, id: string): Promise<RunAndDebugState> => {
  const fn = getSectionClickHandler(id)
  return fn(state)
}
