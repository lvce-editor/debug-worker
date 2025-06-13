import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleDebugInput, handleEvaluate } from '../src/parts/DebugInput/DebugInput.ts'

test('handleDebugInput updates debugInputValue', () => {
  const state = createDefaultState()
  const newState = handleDebugInput(state, 'test')
  expect(newState.debugInputValue).toBe('test')
})

test('handleEvaluate evaluates expression and updates state', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve({
          result: {
            result: {
              value: 'test result',
            },
          },
        })
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const state = {
    ...createDefaultState(),
    debugInputValue: 'test',
    callFrameId: '1',
    debugId: '1',
  }

  const newState = await handleEvaluate(state)
  expect(newState.debugInputValue).toBe('')
  expect(newState.debugOutputValue).toBe('test result')
})
