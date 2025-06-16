import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { parseIndex } from '../ParseIndex/ParseIndex.ts'

export const handleClickWatchExpression = async (state: RunAndDebugState, dataIndex: string): Promise<RunAndDebugState> => {
  const index = parseIndex(dataIndex)
  const { watchExpressions } = state
  const item = watchExpressions[index]
  if (!item) {
    return state
  }
  // TODO bring the item into edit mode
  return state
}
