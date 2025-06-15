import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.ts'
import { getKey, openAtPausedLocation } from '../src/parts/OpenAtPausedLocation/OpenAtPausedLocation.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'
import * as RunAndDebugStates from '../src/parts/RunAndDebugStates/RunAndDebugStates.ts'

test('getKey', () => {
  const mockKey = 1
  const state = createDefaultState(mockKey)
  RunAndDebugStates.set(mockKey, state, state)
  const result = getKey()
  expect(result).toBe(mockKey)
})

test('openAtPausedLocation - with call stack', async () => {
  const mockKey = 1
  const mockState = {
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
  const mockRpc = await MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: any[]) => {
      if (method === 'Main.openUri') {
        calledWith = [method, ...args]
        return Promise.resolve(undefined)
      }
      if (method === 'Editor.updateDebugInfo') {
        return Promise.resolve(undefined)
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
  const mockState = {
    ...createDefaultState(mockKey),
    callStack: [],
  }
  RunAndDebugStates.set(mockKey, mockState, mockState)

  let called = false
  const mockRpc = await MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Main.openUri') {
        called = true
        return Promise.resolve(undefined)
      }
      if (method === 'Editor.updateDebugInfo') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  EditorWorker.set(mockRpc)

  await openAtPausedLocation()

  expect(called).toBe(false)
})
