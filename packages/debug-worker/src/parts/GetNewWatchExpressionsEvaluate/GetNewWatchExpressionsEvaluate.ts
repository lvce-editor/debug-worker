import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'

export const getNewWatchExpressionsEvaluate = (
  watchExpressions: readonly WatchExpression[],
  expression: string,
  result: string | number | boolean | undefined | null,
): readonly WatchExpression[] => {
  return watchExpressions.map((watchExpression: WatchExpression) => {
    if (watchExpression.expression === expression) {
      return {
        ...watchExpression,
        isEditing: false,
        value: result,
      }
    }
    return watchExpression
  })
}
