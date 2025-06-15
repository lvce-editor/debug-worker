import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../AddWatchExpression/AddWatchExpression.ts'
import * as InputName from '../InputName/InputName.ts'

export const handleClickSectionAction = async (state: RunAndDebugState, actionId: string): Promise<RunAndDebugState> => {
  if (!actionId) {
    return state
  }

  if (actionId === InputName.AddWatchExpression) {
    return addWatchExpression(state, '')
  }

  return state
}
