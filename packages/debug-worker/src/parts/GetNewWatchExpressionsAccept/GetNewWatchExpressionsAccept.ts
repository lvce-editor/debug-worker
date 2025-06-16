import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import { evaluateWatchExpressions } from '../EvaluateWatchExpressions/EvaluateWatchExpressions.ts'

const getNewWatchExpressions = async (
  debugId: any,
  callFrameId: any,
  debugState: number,
  watchExpressions: readonly WatchExpression[],
): Promise<readonly WatchExpression[]> => {
  if (debugState === DebugState.Paused) {
    const newWatchExpressions = await evaluateWatchExpressions(debugId, callFrameId, watchExpressions)
    return newWatchExpressions
  }
  return watchExpressions
}

export const getNewWatchExpressionsAccept = async (
  debugId: any,
  callFrameId: any,
  debugState: number,
  watchExpressions: readonly WatchExpression[],
  editingValue: string,
): Promise<readonly WatchExpression[]> => {
  const editingIndex = watchExpressions.findIndex((expr) => expr.isEditing)

  if (editingIndex === -1) {
    return watchExpressions
  }

  if (editingValue === '') {
    return watchExpressions.toSpliced(editingIndex, 1)
  }

  const newExpression: WatchExpression = {
    expression: editingValue,
    value: null,
    isEditing: false,
  }

  const newWatchExpressions1 = watchExpressions.toSpliced(editingIndex, 1, newExpression)
  const newWatchExpressions2 = await getNewWatchExpressions(debugId, callFrameId, debugState, newWatchExpressions1)
  return newWatchExpressions2
}
