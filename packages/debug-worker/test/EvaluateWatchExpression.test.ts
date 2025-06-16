import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { evaluateWatchExpression } from '../src/parts/EvaluateWatchExpression/EvaluateWatchExpression.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'
import { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'

test('evaluateWatchExpression', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Debug.evaluate') {
        return {
          result: 'evaluated result',
        }
      }
      return { result: undefined }
    },
  })
  RendererWorker.set(mockRpc)
  ExtensionHost.set(mockRpc)

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
