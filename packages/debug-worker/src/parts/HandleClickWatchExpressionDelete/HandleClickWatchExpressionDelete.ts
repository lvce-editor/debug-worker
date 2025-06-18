import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { deleteWatchExpression } from '../DeleteWatchExpression/DeleteWatchExpression.ts'
import { parseIndex } from '../ParseIndex/ParseIndex.ts'

export const handleClickWatchExpressionDelete = async (state: RunAndDebugState, dataIndex: string): Promise<RunAndDebugState> => {
  const index = parseIndex(dataIndex)
  return deleteWatchExpression(state, index)
}
