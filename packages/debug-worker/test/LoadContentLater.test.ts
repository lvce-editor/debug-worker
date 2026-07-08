import { expect, jest, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugState from '../src/parts/DebugState/DebugState.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { loadContentLater } from '../src/parts/LoadContentLater/LoadContentLater.ts'

test('loadContentLater shows missing debug provider message', async () => {
  const rendererWorkerRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  const extensionHostRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.start') {
        throw new Error('Failed to execute debug provider: no debug provider "node-debug" found')
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(rendererWorkerRpc)
  ExtensionHost.set(extensionHostRpc)

  const result = await loadContentLater(createDefaultState(1))

  expect(result.debugState).toBe(DebugState.MissingProvider)
  expect(result.debugProviderMessage).toBe(DebugStrings.noDebugProviderFound('node-debug'))
  expect(result.visibleRows).toEqual([
    {
      description: '',
      expanded: false,
      indent: 0,
      index: 0,
      key: 'missing-debug-provider',
      name: '',
      posInset: 1,
      setSize: 1,
      text: DebugStrings.noDebugProviderFound('node-debug'),
      type: DebugRowType.MissingDebugProvider,
      value: '',
      valueType: '',
    },
  ])
})

test('loadContentLater rethrows other start errors', async () => {
  const rendererWorkerRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  const error = new Error('startup failed')
  const extensionHostRpc = MockRpc.create({
    commandMap: {},
    invoke: jest.fn<(method: string) => never>(() => {
      throw error
    }),
  })
  RendererWorker.set(rendererWorkerRpc)
  ExtensionHost.set(extensionHostRpc)

  await expect(loadContentLater(createDefaultState(1))).rejects.toBe(error)
})
