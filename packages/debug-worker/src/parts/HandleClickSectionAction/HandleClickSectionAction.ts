import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../AddWatchExpression/AddWatchExpression.ts'

export const handleClickSectionAction = async (state: RunAndDebugState, actionId: string): Promise<RunAndDebugState> => {
  if (!actionId) {
    return state
  }

  if (actionId === 'add-watch-expression') {
    return addWatchExpression(state, '')
  }

  return state
}
