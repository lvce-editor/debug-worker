import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import { hasProperty } from '../HasProperty/HasProperty.ts'

const restoreWatchExpression = (expression: unknown): WatchExpression => {
  return {
    value: '',
    expression: `${expression}`,
    isEditing: false,
  }
}

export const restoreWatchExpressions = (savedState: unknown): readonly WatchExpression[] => {
  if (hasProperty(savedState, 'watchExpressions') && Array.isArray(savedState.watchExpressions)) {
    return savedState.watchExpressions.map(restoreWatchExpression)
  }
  return []
}
