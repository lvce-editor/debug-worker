import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugState from '../src/parts/DebugState/DebugState.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { handlePaused, togglePause } from '../src/parts/HandlePaused/HandlePaused.ts'

const setupMocks = async (invokeImpl: (method: string) => Promise<any>): Promise<void> => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: invokeImpl,
  })
  RendererWorker.set(mockRpc)
  ExtensionHost.set(mockRpc)
}

test.skip('handlePaused updates state correctly', async () => {
  await setupMocks((method: string): any => {
    if (method === 'ExtensionHostDebug.getProperties') {
      return {
        result: {
          result: [
            {
              name: 'test',
              value: { type: 'string', value: 'test-value' },
            },
          ],
        },
      }
    }
    if (method === 'ExtensionHostManagement.activateByEvent') {
      return
    }
    if (method === 'Run And Debug.handleScriptParsed') {
      return
    }
    if (method === 'Run And Debug.handlePaused') {
      return
    }
    if (method === 'ExtensionHostDebug.evaluate') {
      return {
        result: {
          result: {
            value: 42,
          },
        },
      }
    }
    return
  })

  const state: RunAndDebugState = createDefaultState()
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
  // eslint-disable-next-line  @typescript-eslint/no-deprecated
  const newState = await handlePaused(state, params)

  expect(newState.debugState).toBe(DebugState.Paused)
  expect(newState.pausedReason).toBe('breakpoint')
  expect(newState.callFrameId).toBe('frame1')
  expect(newState.expandedIds).toContain('scope1')
})

test('togglePause switches between pause and resume', async () => {
  await setupMocks((method: string): any => {
    if (method === 'ExtensionHostDebug.pause' || method === 'ExtensionHostDebug.resume') {
      return
    }
    if (method === 'ExtensionHostManagement.activateByEvent') {
      return
    }
    if (method === 'Run And Debug.handleScriptParsed') {
      return
    }
    if (method === 'Run And Debug.handlePaused') {
      return
    }
    if (method === 'ExtensionHostDebug.evaluate') {
      return {
        result: {
          result: {
            value: 42,
          },
        },
      }
    }
    return
  })

  const state: RunAndDebugState = createDefaultState()
  const pausedState = { ...state, debugState: DebugState.Paused }

  await togglePause(state)
  await togglePause(pausedState)
})
