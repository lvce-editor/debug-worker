import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import { parseIndex } from '../ParseIndex/ParseIndex.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handleClickWatchExpression = async (state: RunAndDebugState, dataIndex: string): Promise<RunAndDebugState> => {
  const index = parseIndex(dataIndex)
  const { watchExpressions } = state
  const item = watchExpressions[index]
  if (!item) {
    return state
  }
  const newItem: WatchExpression = {
    ...item,
    isEditing: true,
  }
  const newWatchExpressions = watchExpressions.toSpliced(index, 1, newItem)
  return {
    ...state,
    watchExpressions: newWatchExpressions,
    focus: WhenExpression.FocusDebugWatchInput,
  }
}
