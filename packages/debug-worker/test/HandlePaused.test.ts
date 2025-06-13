import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugState from '../src/parts/DebugState/DebugState.ts'
import { handlePaused } from '../src/parts/HandlePaused/HandlePaused.ts'

test('handlePaused updates state with debug information', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve([{ name: 'test', value: 'value' }])
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const state = createDefaultState()
  const params = {
    callFrames: [
      {
        callFrameId: '1',
        scopeChain: [
          {
            object: {
              objectId: '1',
            },
          },
        ],
        this: {},
      },
    ],
    reason: 'breakpoint',
  }

  const newState = await handlePaused(state, params)
  expect(newState.debugState).toBe(DebugState.Paused)
  expect(newState.scopeExpanded).toBe(true)
  expect(newState.callFrameId).toBe('1')
  expect(newState.expandedIds).toEqual(['1'])
  expect(newState.pausedReason).toBe('breakpoint')
})
