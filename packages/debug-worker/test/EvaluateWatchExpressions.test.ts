import { test, expect, jest } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { evaluateWatchExpressions } from '../src/parts/EvaluateWatchExpressions/EvaluateWatchExpressions.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'

const debugId = 1
const callFrameId = 2

test('evaluateWatchExpressions - all succeed', async () => {
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
  const watchExpressions = [
    { expression: 'a + b', isEditing: false, value: null },
    { expression: 'x * y', isEditing: false, value: null },
  ]
  const result = await evaluateWatchExpressions(debugId, callFrameId, watchExpressions)
  expect(result).toEqual([
    { expression: 'a + b', isEditing: false, value: 'result:a + b' },
    { expression: 'x * y', isEditing: false, value: 'result:x * y' },
  ])
})

test('evaluateWatchExpressions - one fails', async () => {
  const spy = jest.spyOn(console, 'error').mockImplementation(() => {})
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: any[]): any => {
      if (method === 'Debug.evaluate' || method === 'ExtensionHostDebug.evaluate') {
        if (args[1] === 'fail') {
          throw new Error('fail')
        }
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
  const watchExpressions = [
    { expression: 'ok', isEditing: false, value: null },
    { expression: 'fail', isEditing: false, value: null },
  ]
  const result = await evaluateWatchExpressions(debugId, callFrameId, watchExpressions)
  expect(result[0]).toEqual({ expression: 'ok', isEditing: false, value: 'result:ok' })
  expect(result[1]).toEqual({ expression: 'fail', isEditing: false, value: null })
  spy.mockRestore()
})
