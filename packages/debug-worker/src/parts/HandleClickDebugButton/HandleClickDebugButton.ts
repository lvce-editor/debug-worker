import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getDebugButtonHandler } from '../GetDebugButtonHandler/GetDebugButtonHandler.ts'

export const handleClickDebugButton = async (state: RunAndDebugState, inputName: string): Promise<RunAndDebugState> => {
  const fn = getDebugButtonHandler(inputName)
  return fn(state)
}
