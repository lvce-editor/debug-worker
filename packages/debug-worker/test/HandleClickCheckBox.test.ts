import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickCheckBox } from '../src/parts/HandleClickCheckBox/HandleClickCheckBox.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'

test('handleClickCheckBox with pause-on-exceptions', async () => {
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererWorker)
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: () => Promise.resolve(undefined),
  })
  ExtensionHost.set(mockExtensionHost)
  const state = createDefaultState()
  const result = await handleClickCheckBox(state, InputName.PauseOnExceptions)
  expect(result).toBeDefined()
})

test('handleClickCheckBox with pause-on-uncaught-exceptions', async () => {
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererWorker)
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: () => Promise.resolve(undefined),
  })
  ExtensionHost.set(mockExtensionHost)
  const state = createDefaultState()
  const result = await handleClickCheckBox(state, InputName.PauseOnUncaughtExceptions)
  expect(result).toBeDefined()
})

test('handleClickCheckBox with invalid name throws error', async () => {
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererWorker)
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: () => Promise.resolve(undefined),
  })
  ExtensionHost.set(mockExtensionHost)
  const state = createDefaultState()
  await expect(() => handleClickCheckBox(state, 'invalid-name')).toThrow('unknown input name')
})
