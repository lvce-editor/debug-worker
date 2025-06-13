import { expect, jest, test, beforeEach } from '@jest/globals'
import * as ExtensionHostDebug from '../src/parts/ExtensionHostDebug/ExtensionHostDebug.ts'
import * as ExecuteProvider from '../src/parts/ExecuteProvider/ExecuteProvider.ts'

const mockDebugId = 'test-debug-id'
const mockExecuteProvider = jest.spyOn(ExecuteProvider, 'executeProvider')

beforeEach(() => {
  mockExecuteProvider.mockReset()
})

test('listProcesses', async () => {
  const mockProcesses = [{ id: 1 }, { id: 2 }]
  mockExecuteProvider.mockResolvedValue(mockProcesses)
  const result = await ExtensionHostDebug.listProcesses(mockDebugId)
  expect(result).toEqual(mockProcesses)
  expect(mockExecuteProvider).toHaveBeenCalledWith({
    event: `onDebug:${mockDebugId}`,
    method: 'ExtensionHostDebug.listProcesses',
    params: [mockDebugId],
  })
})

test('resume', async () => {
  mockExecuteProvider.mockResolvedValue(undefined)
  await ExtensionHostDebug.resume(mockDebugId)
  expect(mockExecuteProvider).toHaveBeenCalledWith({
    event: `onDebug:${mockDebugId}`,
    method: 'ExtensionHostDebug.resume',
    params: [mockDebugId],
  })
})

test('pause', async () => {
  const mockResult = { status: 'paused' }
  mockExecuteProvider.mockResolvedValue(mockResult)
  const result = await ExtensionHostDebug.pause(mockDebugId)
  expect(result).toEqual(mockResult)
  expect(mockExecuteProvider).toHaveBeenCalledWith({
    event: `onDebug:${mockDebugId}`,
    method: 'ExtensionHostDebug.pause',
    params: [mockDebugId],
  })
})

test('stepOver', async () => {
  const mockResult = { status: 'stepped' }
  mockExecuteProvider.mockResolvedValue(mockResult)
  const result = await ExtensionHostDebug.stepOver(mockDebugId)
  expect(result).toEqual(mockResult)
  expect(mockExecuteProvider).toHaveBeenCalledWith({
    event: `onDebug:${mockDebugId}`,
    method: 'ExtensionHostDebug.stepOver',
    params: [mockDebugId],
  })
})

test('stepInto', async () => {
  const mockResult = { status: 'stepped' }
  mockExecuteProvider.mockResolvedValue(mockResult)
  const result = await ExtensionHostDebug.stepInto(mockDebugId)
  expect(result).toEqual(mockResult)
  expect(mockExecuteProvider).toHaveBeenCalledWith({
    event: `onDebug:${mockDebugId}`,
    method: 'ExtensionHostDebug.stepInto',
    params: [mockDebugId],
  })
})

test('stepOut', async () => {
  const mockResult = { status: 'stepped' }
  mockExecuteProvider.mockResolvedValue(mockResult)
  const result = await ExtensionHostDebug.stepOut(mockDebugId)
  expect(result).toEqual(mockResult)
  expect(mockExecuteProvider).toHaveBeenCalledWith({
    event: `onDebug:${mockDebugId}`,
    method: 'ExtensionHostDebug.stepOut',
    params: [mockDebugId],
  })
})

test('setPauseOnExceptions', async () => {
  const mockValue = true
  const mockResult = { status: 'updated' }
  mockExecuteProvider.mockResolvedValue(mockResult)
  const result = await ExtensionHostDebug.setPauseOnExceptions(mockDebugId, mockValue)
  expect(result).toEqual(mockResult)
  expect(mockExecuteProvider).toHaveBeenCalledWith({
    event: `onDebug:${mockDebugId}`,
    method: 'ExtensionHostDebug.setPauseOnExceptions',
    params: [mockDebugId, mockValue],
  })
})

test('getProperties', async () => {
  const mockObjectId = 'obj-123'
  const mockProperties = [{ name: 'prop1', value: 'value1' }]
  mockExecuteProvider.mockResolvedValue(mockProperties)
  const result = await ExtensionHostDebug.getProperties(mockDebugId, mockObjectId)
  expect(result).toEqual(mockProperties)
  expect(mockExecuteProvider).toHaveBeenCalledWith({
    event: `onDebug:${mockDebugId}`,
    method: 'ExtensionHostDebug.getProperties',
    params: [mockDebugId, mockObjectId],
  })
})

test('evaluate', async () => {
  const mockExpression = 'x + y'
  const mockCallFrameId = 'frame-123'
  const mockResult = { result: 42 }
  mockExecuteProvider.mockResolvedValue(mockResult)
  const result = await ExtensionHostDebug.evaluate(mockDebugId, mockExpression, mockCallFrameId)
  expect(result).toEqual(mockResult)
  expect(mockExecuteProvider).toHaveBeenCalledWith({
    event: `onDebug:${mockDebugId}`,
    method: 'ExtensionHostDebug.evaluate',
    params: [mockDebugId, mockExpression, mockCallFrameId],
  })
})

test('getScriptSource', async () => {
  const mockScriptId = 'script-123'
  const mockSource = 'function test() { return true; }'
  mockExecuteProvider.mockResolvedValue(mockSource)
  const result = await ExtensionHostDebug.getScriptSource(mockDebugId, mockScriptId)
  expect(result).toEqual(mockSource)
  expect(mockExecuteProvider).toHaveBeenCalledWith({
    event: `onDebug:${mockDebugId}`,
    method: 'ExtensionHostDebug.getScriptSource',
    params: [mockDebugId, mockScriptId],
  })
})
