import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { evaluateWatchExpression } from '../src/parts/EvaluateWatchExpression/EvaluateWatchExpression.ts'
import { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { MockRpc } from '@lvce-editor/rpc'
import * as RpcRegistry from '@lvce-editor/rpc-registry'
import { RpcId } from '@lvce-editor/rpc-registry'

test('evaluateWatchExpression', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Debug.evaluate') {
        return {
          result: 'evaluated result',
        }
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      return undefined
    },
  })
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)
  RpcRegistry.set(RpcId.ExtensionHostWorker, mockRpc)

  const state: RunAndDebugState = createDefaultState()
  const expression = 'x + y'
  const stateWithExpression: RunAndDebugState = {
    ...state,
    watchExpressions: [
      {
        expression,
        value: null,
        isEditing: false,
      },
    ],
    debugId: 123,
  }
  const result = await evaluateWatchExpression(stateWithExpression, expression)
  expect(result.watchExpressions).toEqual([
    {
      expression,
      value: 'evaluated result',
      isEditing: false,
    },
  ])
})
