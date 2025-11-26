import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.ts'
import { getKey, openAtPausedLocation } from '../src/parts/OpenAtPausedLocation/OpenAtPausedLocation.ts'
import * as RunAndDebugStates from '../src/parts/RunAndDebugStates/RunAndDebugStates.ts'

test('getKey', () => {
  const mockKey = 1
  const state: RunAndDebugState = createDefaultState(mockKey)
  RunAndDebugStates.set(mockKey, state, state)
  const result = getKey()
  expect(result).toBe(mockKey)
})

test('openAtPausedLocation - with call stack', async () => {
  const mockKey = 1
  const mockState: RunAndDebugState = {
    ...createDefaultState(mockKey),
    callStack: [
      {
        functionName: 'testFunction',
        functionLocation: {
          scriptId: 'test-script',
          lineNumber: 10,
          columnNumber: 5,
        },
        location: {
          scriptId: 'test-script',
          lineNumber: 10,
          columnNumber: 5,
        },
      },
    ],
  }
  RunAndDebugStates.set(mockKey, mockState, mockState)

  let calledWith: any = undefined
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: any[]) => {
      if (method === 'Main.openUri') {
        calledWith = [method, ...args]
        return undefined
      }
      if (method === 'Editor.updateDebugInfo') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  EditorWorker.set(mockRpc)

  await openAtPausedLocation()

  expect(calledWith).toEqual([
    'Main.openUri',
    expect.any(String),
    true,
    {
      languageId: 'javascript',
      rowIndex: 10,
      columnIndex: 5,
    },
  ])
})

test('openAtPausedLocation - empty call stack', async () => {
  const mockKey = 1
  const mockState: RunAndDebugState = {
    ...createDefaultState(mockKey),
    callStack: [],
  }
  RunAndDebugStates.set(mockKey, mockState, mockState)

  let called = false
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Main.openUri') {
        called = true
        return undefined
      }
      if (method === 'Editor.updateDebugInfo') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  EditorWorker.set(mockRpc)

  await openAtPausedLocation()

  expect(called).toBe(false)
})
