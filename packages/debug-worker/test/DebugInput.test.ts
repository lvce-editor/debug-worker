import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { ExtensionHost, RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleDebugInput, handleEvaluate } from '../src/parts/DebugInput/DebugInput.ts'

test('handleDebugInput updates debugInputValue', async () => {
  const state = createDefaultState()
  const newState = await handleDebugInput(state, 'test')
  expect(newState.debugInputValue).toBe('test')
})

test('handleEvaluate evaluates expression and updates state', async () => {
  const mockRendererRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, event: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent' && event === 'onDebug:1') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererRpc)

  const mockExtensionRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, debugId: string, expression: string, callFrameId: string) => {
      if (method === 'ExtensionHostDebug.evaluate' && debugId === '1' && expression === 'test' && callFrameId === '1') {
        return Promise.resolve({
          result: 'test',
          type: 'string',
        })
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionRpc)

  const state = {
    ...createDefaultState(),
    debugId: '1',
    debugInputValue: 'test',
    callFrameId: '1',
  }
  const newState = await handleEvaluate(state)
  expect(newState.debugInputValue).toBe('')
  expect(newState.debugOutputValue).toBe('test')
})
