import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import { evaluateWatchExpression } from '../EvaluateWatchExpression/EvaluateWatchExpression.ts'

export const evaluateWatchExpressions = async (debugId: any, callFrameId: any, watchExpressions: readonly WatchExpression[]): Promise<readonly WatchExpression[]> => {
  const results = await Promise.all(
    watchExpressions.map(async (expression) => {
      try {
        const result = await evaluateWatchExpression(debugId, callFrameId, expression.expression)
        const resultString = result.description
        return {
          ...expression,
          value: resultString,
        }
      } catch (error) {
        console.error(`Failed to evaluate expression: ${error}`)
        return {
          ...expression,
        }
      }
    }),
  )
  return results
}
