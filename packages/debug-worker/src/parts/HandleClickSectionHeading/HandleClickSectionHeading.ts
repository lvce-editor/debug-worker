import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getSectionClickHandler } from '../GetSectionClickHandler/GetSectionClickHandler.ts'

export const handleClickSectionHeading = async (state: RunAndDebugState, id: string): Promise<RunAndDebugState> => {
  console.log('handle click', id)
  const fn = getSectionClickHandler(id)
  return fn(state)
}
