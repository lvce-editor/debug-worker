import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugState from '../src/parts/DebugState/DebugState.ts'
import { handlePaused, togglePause } from '../src/parts/HandlePaused/HandlePaused.ts'

test('handlePaused updates state correctly', async () => {
  const mockRpc = await MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Debug.getProperties') {
        return Promise.resolve([])
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const state = createDefaultState()
  const params = {
    callFrames: [
      {
        callFrameId: 'frame1',
        scopeChain: [
          {
            object: {
              objectId: 'scope1',
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
  expect(newState.pausedReason).toBe('breakpoint')
  expect(newState.callFrameId).toBe('frame1')
  expect(newState.expandedIds).toContain('scope1')
})

test('togglePause switches between pause and resume', async () => {
  const mockRpc = await MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Debug.pause' || method === 'Debug.resume') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const state = createDefaultState()
  const pausedState = { ...state, debugState: DebugState.Paused }

  await togglePause(state)
  await togglePause(pausedState)
})
