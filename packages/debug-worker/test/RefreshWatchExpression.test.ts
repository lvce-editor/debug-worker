import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugState from '../src/parts/DebugState/DebugState.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { refreshWatchExpression } from '../src/parts/RefreshWatchExpression/RefreshWatchExpression.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

test('refreshWatchExpression - when not paused, returns same state', async () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    debugState: DebugState.Default,
    watchExpressions: [
      {
        expression: 'x + y',
        value: null,
        isEditing: false,
      },
    ],
  }

  const result = await refreshWatchExpression(state)
  expect(result).toBe(state)
})

test('refreshWatchExpression - when paused, evaluates all expressions', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: any[]): any => {
      if (method === 'Debug.evaluate' || method === 'ExtensionHostDebug.evaluate') {
        return { description: 'result:' + args[1] }
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  ExtensionHost.set(mockRpc)

  const state: RunAndDebugState = {
    ...createDefaultState(),
    debugState: DebugState.Paused,
    debugId: '123',
    callFrameId: '456',
    watchExpressions: [
      {
        expression: 'a + b',
        value: null,
        isEditing: false,
      },
      {
        expression: 'x * y',
        value: null,
        isEditing: false,
      },
    ],
  }

  const result = await refreshWatchExpression(state)
  expect(result.watchExpressions).toEqual([
    {
      expression: 'a + b',
      value: 'result:a + b',
      isEditing: false,
    },
    {
      expression: 'x * y',
      value: 'result:x * y',
      isEditing: false,
    },
  ])
  expect(result.debugState).toBe(DebugState.Paused)
})
