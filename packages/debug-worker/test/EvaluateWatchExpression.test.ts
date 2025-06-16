import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { evaluateWatchExpression } from '../src/parts/EvaluateWatchExpression/EvaluateWatchExpression.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

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
