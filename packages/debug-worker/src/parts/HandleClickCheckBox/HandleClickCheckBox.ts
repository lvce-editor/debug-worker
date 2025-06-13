import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getCheckBoxClickHandler } from '../GetCheckBoxClickHandler/GetCheckBoxClickHandler.ts'

export const handleClickCheckBox = (state: RunAndDebugState, name: string): Promise<RunAndDebugState> => {
  const fn = getCheckBoxClickHandler(name)
  return fn(state)
}
