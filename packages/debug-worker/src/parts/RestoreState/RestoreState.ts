import type { RestoredState } from '../RestoredState/RestoredState.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'

const restoreWatchExpression = (expression: unknown): WatchExpression => {
  return {
    value: '',
    expression: `${expression}`,
    isEditing: false,
  }
}

const restoreWatchExpressions = (savedState: unknown): readonly WatchExpression[] => {
  if (savedState && typeof savedState === 'object' && 'watchExpressions' in savedState && Array.isArray(savedState.watchExpressions)) {
    return savedState.watchExpressions.map(restoreWatchExpression)
  }
  return []
}

const restoreWatchExpanded = (savedState: unknown): boolean => {
  if (savedState && typeof savedState === 'object' && 'watchExpanded' in savedState && typeof savedState.watchExpanded === 'boolean') {
    return savedState.watchExpanded
  }
  return false
}

export const restoreState = (savedState: unknown): RestoredState => {
  const watchExpressions = restoreWatchExpressions(savedState)
  const watchExpanded = restoreWatchExpanded(savedState)
  return {
    watchExpressions,
    watchExpanded,
  }
}
