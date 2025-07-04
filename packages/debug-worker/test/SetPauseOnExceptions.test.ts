import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RpcId } from '@lvce-editor/rpc-registry'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'
import { setPauseOnExceptions } from '../src/parts/SetPauseOnExceptions/SetPauseOnExceptions.ts'

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
        return
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RpcId.ExtensionHostWorker, mockRpc)

  const state: RunAndDebugState = createDefaultState()
  const value = true

  // @ts-ignore
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

  const state: RunAndDebugState = createDefaultState()
  const value = true

  // @ts-ignore
  await expect(setPauseOnExceptions(state, value)).rejects.toThrow('test error')
})
