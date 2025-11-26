import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import { hasProperty } from '../HasProperty/HasProperty.ts'

const restoreWatchExpression = (savedExpression: unknown): WatchExpression => {
  if (
    typeof savedExpression === 'object' &&
    savedExpression !== null &&
    hasProperty(savedExpression, 'expression') &&
    typeof savedExpression.expression === 'string' &&
    hasProperty(savedExpression, 'value') &&
    hasProperty(savedExpression, 'isEditing') &&
    typeof savedExpression.isEditing === 'boolean'
  ) {
    const { value } = savedExpression
    if (value === null || value === undefined || typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      return {
        expression: savedExpression.expression,
        value,
        isEditing: savedExpression.isEditing,
      }
    }
  }
  return {
    expression: '',
    value: null,
    isEditing: false,
  }
}

export const restoreWatchExpressions = (savedState: unknown): readonly WatchExpression[] => {
  if (hasProperty(savedState, 'watchExpressions') && Array.isArray(savedState.watchExpressions)) {
    return savedState.watchExpressions.map(restoreWatchExpression)
  }
  return []
}
