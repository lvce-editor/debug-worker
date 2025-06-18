import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { editWatchExpression } from '../EditWatchExpression/EditWatchExpression.ts'
import { parseIndex } from '../ParseIndex/ParseIndex.ts'

export const handleClickWatchExpression = async (state: RunAndDebugState, dataIndex: string, defaultPrevented: boolean): Promise<RunAndDebugState> => {
  if (defaultPrevented) {
    return state
  }
  const index = parseIndex(dataIndex)
  return editWatchExpression(state, index)
}
