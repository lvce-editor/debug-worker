import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { handleClickCheckBox } from '../src/parts/HandleClickCheckBox/HandleClickCheckBox.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

test('handleClickCheckBox with pause-on-exceptions', async () => {
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererWorker)
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: () => undefined,
  })
  ExtensionHost.set(mockExtensionHost)
  const state: RunAndDebugState = createDefaultState()
  const result = await handleClickCheckBox(state, InputName.PauseOnExceptions)
  expect(result).toBeDefined()
})

test('handleClickCheckBox with pause-on-uncaught-exceptions', async () => {
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererWorker)
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: () => undefined,
  })
  ExtensionHost.set(mockExtensionHost)
  const state: RunAndDebugState = createDefaultState()
  const result = await handleClickCheckBox(state, InputName.PauseOnUncaughtExceptions)
  expect(result).toBeDefined()
})

test('handleClickCheckBox with invalid name throws error', async () => {
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererWorker)
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: () => undefined,
  })
      ExtensionHost.set(mockExtensionHost)
  const state: RunAndDebugState = createDefaultState()
    expect(() => handleClickCheckBox(state, 'invalid-name')).toThrow('unknown input name')
})
