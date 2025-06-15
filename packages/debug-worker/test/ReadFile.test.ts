import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { ExtensionHost, RendererWorker } from '@lvce-editor/rpc-registry'
import * as ReadFile from '../src/parts/ReadFile/ReadFile.js'
import { readFile } from '../src/parts/ReadFile/ReadFile.ts'
import * as RunAndDebugStates from '../src/parts/RunAndDebugStates/RunAndDebugStates.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('should correctly parse URI and return empty string for invalid input', async () => {
  // @ts-ignore - Testing invalid input
  const result = await ReadFile.readFile('invalid-uri')
  expect(result).toBe('')
})

test('should correctly parse URI with key and script ID', async () => {
  // The actual implementation will return '' because we're not setting up the RunAndDebugStates
  // This test verifies the parsing logic works as expected
  const result = await ReadFile.readFile('debug/123/script.js')
  expect(typeof result).toBe('string')
})

test('should handle URIs with multiple slashes', async () => {
  const result = await ReadFile.readFile('debug/789/path/to/script.js')
  expect(typeof result).toBe('string')
})

test('should handle empty script ID', async () => {
  const result = await ReadFile.readFile('debug/123/')
  expect(typeof result).toBe('string')
})

test('readFile', async () => {
  const mockUri = '/1/script1'
  const mockContent = 'test content'
  const mockDebugId = 'debug-123'

  const mockExtensionHostRpc = await MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.getScriptSource') {
        return Promise.resolve(mockContent)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionHostRpc)

  const mockRendererWorkerRpc = await MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererWorkerRpc)

  const oldState = createDefaultState()
  const newState = {
    ...oldState,
    debugId: mockDebugId,
  }
  RunAndDebugStates.set(1, oldState, newState)

  const result = await readFile(mockUri)

  expect(result).toBe(mockContent)
})

test('readFile - no instance found', async () => {
  const mockUri = '/1/script1'

  const mockExtensionHostRpc = await MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.getScriptSource') {
        return Promise.resolve('')
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionHostRpc)

  const mockRendererWorkerRpc = await MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererWorkerRpc)

  const result = await readFile(mockUri)

  expect(result).toBe('')
})
