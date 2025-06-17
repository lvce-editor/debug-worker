import type { SavedState } from '../SavedState/SavedState.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'

const serializeWatchExpression = (expression: WatchExpression): string => {
  return `${expression.value}` || ''
}

export const saveState = (uid: number): SavedState => {
  const { newState } = RunAndDebugStates.get(uid)
  const { watchExpressions, scopeExpanded, watchExpanded, breakPointsExpanded } = newState
  return {
    watchExpressions: watchExpressions.map(serializeWatchExpression),
    scopeExpanded,
    breakPointsExpanded,
    watchExpanded,
  }
}
