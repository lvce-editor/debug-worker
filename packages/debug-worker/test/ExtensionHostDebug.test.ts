import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import * as ExtensionHostDebug from '../src/parts/ExtensionHostDebug/ExtensionHostDebug.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'
import * as RpcRegistry from '@lvce-editor/rpc-registry'
import { RpcId } from '@lvce-editor/rpc-registry'

const mockDebugId = 'test-debug-id'

test('listProcesses', async () => {
  const mockProcesses = [{ id: 1 }, { id: 2 }]
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.listProcesses') {
        return Promise.resolve(mockProcesses)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionHost)
  RendererWorker.set(mockRendererWorker)
  const result = await ExtensionHostDebug.listProcesses(mockDebugId)
  expect(result).toEqual(mockProcesses)
})

test('resume', async () => {
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.resume') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionHost)
  RendererWorker.set(mockRendererWorker)
  await ExtensionHostDebug.resume(mockDebugId)
})

test('pause', async () => {
  const mockResult = { status: 'paused' }
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.pause') {
        return Promise.resolve(mockResult)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionHost)
  RendererWorker.set(mockRendererWorker)
  const result = await ExtensionHostDebug.pause(mockDebugId)
  expect(result).toEqual(mockResult)
})

test('stepOver', async () => {
  const mockResult = { status: 'stepped' }
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.stepOver') {
        return Promise.resolve(mockResult)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionHost)
  RendererWorker.set(mockRendererWorker)
  const result = await ExtensionHostDebug.stepOver(mockDebugId)
  expect(result).toEqual(mockResult)
})

test('stepInto', async () => {
  const mockResult = { status: 'stepped' }
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.stepInto') {
        return Promise.resolve(mockResult)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionHost)
  RendererWorker.set(mockRendererWorker)
  const result = await ExtensionHostDebug.stepInto(mockDebugId)
  expect(result).toEqual(mockResult)
})

test('stepOut', async () => {
  const mockResult = { status: 'stepped' }
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.stepOut') {
        return Promise.resolve(mockResult)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionHost)
  RendererWorker.set(mockRendererWorker)
  const result = await ExtensionHostDebug.stepOut(mockDebugId)
  expect(result).toEqual(mockResult)
})

test('setPauseOnExceptions', async () => {
  const mockValue = true
  const mockResult = { status: 'updated' }
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.setPauseOnExceptions') {
        return Promise.resolve(mockResult)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionHost)
  RendererWorker.set(mockRendererWorker)
  const result = await ExtensionHostDebug.setPauseOnExceptions(mockDebugId, mockValue)
  expect(result).toEqual(mockResult)
})

test('getProperties', async () => {
  const mockObjectId = 'obj-123'
  const mockProperties = [{ name: 'prop1', value: 'value1' }]
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.getProperties') {
        return Promise.resolve(mockProperties)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionHost)
  RendererWorker.set(mockRendererWorker)
  const result = await ExtensionHostDebug.getProperties(mockDebugId, mockObjectId)
  expect(result).toEqual(mockProperties)
})

test('evaluate', async () => {
  const mockExpression = 'x + y'
  const mockCallFrameId = 'frame-123'
  const mockResult = { result: 42 }
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.evaluate') {
        return Promise.resolve(mockResult)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionHost)
  RendererWorker.set(mockRendererWorker)
  const result = await ExtensionHostDebug.evaluate(mockDebugId, mockExpression, mockCallFrameId)
  expect(result).toEqual(mockResult)
})

test('getScriptSource', async () => {
  const mockScriptId = 'script-123'
  const mockSource = 'function test() { return true; }'
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.getScriptSource') {
        return Promise.resolve(mockSource)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionHost)
  RendererWorker.set(mockRendererWorker)
  const result = await ExtensionHostDebug.getScriptSource(mockDebugId, mockScriptId)
  expect(result).toEqual(mockSource)
})

test.skip('addWatchExpression', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.addWatchExpression') {
        return Promise.resolve({})
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)

  await ExtensionHostDebug.addWatchExpression('debug-1', 'x + y')
})
