import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { ExtensionHost, RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handlePaused } from '../src/parts/HandlePaused/HandlePaused.ts'
import * as DebugState from '../src/parts/DebugState/DebugState.ts'

test('handlePaused updates state with debug information', async () => {
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
      if (method === 'ExtensionHostDebug.getProperties') {
        return Promise.resolve([
          {
            name: 'test',
            value: 'test',
            type: 'string',
          },
        ])
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionRpc)

  const state = createDefaultState()
  const newState = await handlePaused(state, {
    callFrameId: '1',
    debugId: '1',
    reason: 'test',
  })
  expect(newState.debugState).toBe(DebugState.Paused)
  expect(newState.expandedIds).toEqual(['1'])
  expect(newState.callFrameId).toBe('1')
  expect(newState.pausedReason).toBe('test')
})
