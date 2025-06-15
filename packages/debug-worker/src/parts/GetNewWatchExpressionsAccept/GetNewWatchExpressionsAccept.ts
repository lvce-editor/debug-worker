import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'

export const getNewWatchExpressionsAccept = (watchExpressions: readonly WatchExpression[], editingValue: string): readonly WatchExpression[] => {
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

  return watchExpressions.toSpliced(editingIndex, 1, newExpression)
}
