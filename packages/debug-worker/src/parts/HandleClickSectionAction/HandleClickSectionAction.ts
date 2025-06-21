import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../AddWatchExpression/AddWatchExpression.ts'
import * as InputName from '../InputName/InputName.ts'
import { refreshWatchExpression } from '../RefreshWatchExpression/RefreshWatchExpression.ts'

export const handleClickSectionAction = async (state: RunAndDebugState, actionId: string): Promise<RunAndDebugState> => {
  if (!actionId) {
    return state
  }

  if (actionId === InputName.AddWatchExpression) {
    return addWatchExpression(state, '')
  }
  if (actionId === InputName.RefreshWatchExpressions) {
    return refreshWatchExpression(state)
  }

  return state
}
