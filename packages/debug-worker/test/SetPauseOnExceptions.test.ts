import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RpcId } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { setPauseOnExceptions } from '../src/parts/SetPauseOnExceptions/SetPauseOnExceptions.ts'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'

const setupRendererWorker = async (): Promise<void> => {
  const mockRendererWorkerRpc = MockRpc.create({
    commandMap: {},
    invoke: () => {},
  })
  RpcRegistry.set(RpcId.RendererWorker, mockRendererWorkerRpc)
}

test('setPauseOnExceptions - success', async () => {
  await setupRendererWorker()
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.setPauseOnExceptions') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RpcId.ExtensionHostWorker, mockRpc)

  const state = createDefaultState()
  const value = true

  const result = await setPauseOnExceptions(state, value)

  expect(result).toEqual({
    ...state,
    exceptionBreakPoints: value,
  })
})

test('setPauseOnExceptions - error', async () => {
  await setupRendererWorker()
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.setPauseOnExceptions') {
        return Promise.reject(new Error('test error'))
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RpcId.ExtensionHostWorker, mockRpc)

  const state = createDefaultState()
  const value = true

  await expect(setPauseOnExceptions(state, value)).rejects.toThrow('test error')
})
