import { getSectionClickHandler } from '../GetSectionClickHandler/GetSectionClickHandler.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const handleClickSectionHeading = async (state: RunAndDebugState, id: string): Promise<RunAndDebugState> => {
  const fn = getSectionClickHandler(id)
  return fn(state)
}
