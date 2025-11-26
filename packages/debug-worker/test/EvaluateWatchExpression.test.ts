import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { evaluateWatchExpression } from '../src/parts/EvaluateWatchExpression/EvaluateWatchExpression.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { RendererWorker } from '@lvce-editor/rpc-registry'

test('evaluateWatchExpression', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Debug.evaluate' || method === 'ExtensionHostDebug.evaluate') {
        return {
          result: 'evaluated result',
        }
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  ExtensionHost.set(mockRpc)
  const expression = 'x + y'
  const result = await evaluateWatchExpression(123, 456, expression)
  expect(result).toEqual({ result: 'evaluated result' })
})
