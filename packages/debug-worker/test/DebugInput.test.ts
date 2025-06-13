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
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererRpc)

  const mockExtensionRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.evaluate') {
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
    debugInputValue: 'test',
  }
  const newState = await handleEvaluate(state)
  expect(newState.debugInputValue).toBe('')
  expect(newState.debugOutputValue).toBe('test')
})
