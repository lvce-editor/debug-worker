import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugState from '../src/parts/DebugState/DebugState.ts'
import { handlePaused, togglePause } from '../src/parts/HandlePaused/HandlePaused.ts'

const setupMocks = async (invokeImpl: (method: string) => Promise<any>) => {
  const mockRpc = await MockRpc.create({
    commandMap: {},
    invoke: invokeImpl,
  })
  RendererWorker.set(mockRpc)
  ExtensionHost.set(mockRpc)
}

test('handlePaused updates state correctly', async () => {
  await setupMocks((method: string) => {
    if (method === 'ExtensionHostDebug.getProperties') {
      return Promise.resolve([])
    }
    if (method === 'ExtensionHostManagement.activateByEvent') {
      return Promise.resolve()
    }
    if (method === 'Run And Debug.handleScriptParsed') {
      return Promise.resolve()
    }
    if (method === 'Run And Debug.handlePaused') {
      return Promise.resolve()
    }
    return Promise.resolve()
  })

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
  await setupMocks((method: string) => {
    if (method === 'ExtensionHostDebug.pause' || method === 'ExtensionHostDebug.resume') {
      return Promise.resolve()
    }
    if (method === 'ExtensionHostManagement.activateByEvent') {
      return Promise.resolve()
    }
    if (method === 'Run And Debug.handleScriptParsed') {
      return Promise.resolve()
    }
    if (method === 'Run And Debug.handlePaused') {
      return Promise.resolve()
    }
    return Promise.resolve()
  })

  const state = createDefaultState()
  const pausedState = { ...state, debugState: DebugState.Paused }

  await togglePause(state)
  await togglePause(pausedState)
})
