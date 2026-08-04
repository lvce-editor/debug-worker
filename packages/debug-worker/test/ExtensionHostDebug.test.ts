import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import * as ExtensionHostDebug from '../src/parts/ExtensionHostDebug/ExtensionHostDebug.ts'

const mockDebugId = 'test-debug-id'
const mockEvent = `onDebug:${mockDebugId}`

const setMockExtensionHost = (expectedMethod: string, expectedParams: readonly unknown[], result: unknown): void => {
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...params: readonly unknown[]) => {
      expect([method, ...params]).toEqual(['Extensions.executeProvidersByEvent', mockEvent, expectedMethod, ...expectedParams])
      return [result]
    },
  })
  ExtensionHost.set(mockExtensionHost)
}

test('listProcesses', async () => {
  const mockProcesses = [{ id: 1 }, { id: 2 }]
  setMockExtensionHost('ExtensionHostDebug.listProcesses', [mockDebugId], mockProcesses)
  await expect(ExtensionHostDebug.listProcesses(mockDebugId)).resolves.toEqual(mockProcesses)
})

test.each([
  ['resume', ExtensionHostDebug.resume, 'ExtensionHostDebug.resume'],
  ['pause', ExtensionHostDebug.pause, 'ExtensionHostDebug.pause'],
  ['stepOver', ExtensionHostDebug.stepOver, 'ExtensionHostDebug.stepOver'],
  ['stepInto', ExtensionHostDebug.stepInto, 'ExtensionHostDebug.stepInto'],
  ['stepOut', ExtensionHostDebug.stepOut, 'ExtensionHostDebug.stepOut'],
  ['start', ExtensionHostDebug.start, 'ExtensionHostDebug.start'],
] as const)('%s routes through executeProvidersByEvent', async (name, execute, expectedMethod) => {
  const mockResult = { name }
  setMockExtensionHost(expectedMethod, [mockDebugId], mockResult)
  await expect(execute(mockDebugId)).resolves.toEqual(mockResult)
})

test('setPauseOnExceptions', async () => {
  const mockResult = { status: 'updated' }
  setMockExtensionHost('ExtensionHostDebug.setPauseOnExceptions', [mockDebugId, true], mockResult)
  await expect(ExtensionHostDebug.setPauseOnExceptions(mockDebugId, true)).resolves.toEqual(mockResult)
})

test('getProperties', async () => {
  const mockProperties = [{ name: 'prop1', value: 'value1' }]
  setMockExtensionHost('ExtensionHostDebug.getProperties', [mockDebugId, 'obj-123'], mockProperties)
  await expect(ExtensionHostDebug.getProperties(mockDebugId, 'obj-123')).resolves.toEqual(mockProperties)
})

test('evaluate', async () => {
  const mockResult = { result: 42 }
  setMockExtensionHost('ExtensionHostDebug.evaluate', [mockDebugId, 'x + y', 'frame-123'], mockResult)
  await expect(ExtensionHostDebug.evaluate(mockDebugId, 'x + y', 'frame-123')).resolves.toEqual(mockResult)
})

test('getScriptSource', async () => {
  const mockSource = 'function test() { return true; }'
  setMockExtensionHost('ExtensionHostDebug.getScriptSource', [mockDebugId, 'script-123'], mockSource)
  await expect(ExtensionHostDebug.getScriptSource(mockDebugId, 'script-123')).resolves.toBe(mockSource)
})

test('addWatchExpression', async () => {
  setMockExtensionHost('ExtensionHostDebug.addWatchExpression', [mockDebugId, 'x + y'], undefined)
  await expect(ExtensionHostDebug.addWatchExpression(mockDebugId, 'x + y')).resolves.toBeUndefined()
})

test('reports a missing provider when no extension handles the event', async () => {
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: () => [],
  })
  ExtensionHost.set(mockExtensionHost)
  await expect(ExtensionHostDebug.start(mockDebugId)).rejects.toThrow(
    'Failed to execute debug provider: no debug provider "test-debug-id" found',
  )
})
