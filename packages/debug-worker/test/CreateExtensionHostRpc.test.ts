import { expect, jest, test } from '@jest/globals'
import * as RpcId from '../src/parts/RpcId/RpcId.ts'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'

const mockCreateRpc = jest.fn()

jest.unstable_mockModule('@lvce-editor/rpc', () => ({
  MessagePortRpcParent: {
    create: mockCreateRpc,
  },
}))

const { createExtensionHostRpc } = await import('../src/parts/CreateExtensionHostRpc/CreateExtensionHostRpc.ts')

test.skip('createExtensionHostRpc', async () => {
  const extensionHostRpc = {}
  const mockInvokeRendererWorker = jest.fn(() => {
    return extensionHostRpc
  })
  const mockRpc = {
    invokeAndTransfer: mockInvokeRendererWorker,
  } as any
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)
  const rpc = await createExtensionHostRpc()
  expect(mockInvokeRendererWorker).toHaveBeenCalledTimes(1)
  expect(mockInvokeRendererWorker).toHaveBeenCalledWith('SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker', expect.anything())
  expect(rpc).toBe(extensionHostRpc)
})
