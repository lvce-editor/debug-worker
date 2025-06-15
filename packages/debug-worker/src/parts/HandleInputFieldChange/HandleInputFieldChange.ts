import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { handleWatchValueChange } from '../HandleWatchValueChange/HandleWatchValueChange.ts'
import * as InputName from '../InputName/InputName.ts'

export const handleInputFieldChange = (state: RunAndDebugState, name: string, value: string): RunAndDebugState => {
  if (name === InputName.WatchExpressionInput) {
    return handleWatchValueChange(state, value)
  }
  return state
}
