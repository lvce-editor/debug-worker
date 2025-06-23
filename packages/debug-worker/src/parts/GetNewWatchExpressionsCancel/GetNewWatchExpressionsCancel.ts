import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'

export const getNewWatchExpressionsCancel = (watchExpressions: readonly WatchExpression[]): readonly WatchExpression[] => {
  const lastExpression = watchExpressions.at(-1)
  if (lastExpression && lastExpression.expression === '') {
    return watchExpressions.toSpliced(-1, 1)
  }
  if (lastExpression && lastExpression.isEditing) {
    return watchExpressions.toSpliced(-1, 1)
  }
  return watchExpressions
}
