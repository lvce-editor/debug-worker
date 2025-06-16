import * as Debug from '../Debug/Debug.ts'

export const evaluateWatchExpression = async (debugId: any, callFrameId: any, expression: string): Promise<any> => {
  const result = await Debug.evaluate(debugId, expression, callFrameId)
  return result
}
