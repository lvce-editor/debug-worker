import { expect, jest, test } from '@jest/globals'
import * as RpcId from '../src/parts/RpcId/RpcId.ts'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'

const mockExtensionHostRpc = {}
const mockCreateRpc = jest.fn(() => {
  return mockExtensionHostRpc
})

jest.unstable_mockModule('@lvce-editor/rpc', () => ({
  MessagePortRpcParent: {
    create: mockCreateRpc,
  },
  PlainMessagePortRpcParent: {
    create: mockCreateRpc,
  },
}))

const { createExtensionHostRpc } = await import('../src/parts/CreateExtensionHostRpc/CreateExtensionHostRpc.ts')

test('createExtensionHostRpc - success', async () => {
  const mockInvokeRendererWorker = jest.fn()
  const mockRpc = {
    invokeAndTransfer: mockInvokeRendererWorker,
  } as any
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)
  const rpc = await createExtensionHostRpc()
  expect(mockInvokeRendererWorker).toHaveBeenCalledTimes(1)
  expect(mockInvokeRendererWorker).toHaveBeenCalledWith(
    'SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker',
    expect.anything(),
    'HandleMessagePort.handleMessagePort2',
    55,
  )
  expect(rpc).toBe(mockExtensionHostRpc)
})

test('createExtensionHostRpc - error in invokeAndTransfer', async () => {
  const mockInvokeRendererWorker = jest.fn().mockRejectedValue(new Error('test error') as never)
  const mockRpc = {
    invokeAndTransfer: mockInvokeRendererWorker,
  } as any
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)
  await expect(createExtensionHostRpc()).rejects.toThrow(new Error('Failed to create extension host rpc: test error'))
})

test('createExtensionHostRpc - error in MessagePortRpcParent.create', async () => {
  const mockInvokeRendererWorker = jest.fn()
  const mockRpc = {
    invokeAndTransfer: mockInvokeRendererWorker,
  } as any
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)
  mockCreateRpc.mockRejectedValueOnce(new Error('test error') as never)
  await expect(createExtensionHostRpc()).rejects.toThrow(new Error('Failed to create extension host rpc: test error'))
})
