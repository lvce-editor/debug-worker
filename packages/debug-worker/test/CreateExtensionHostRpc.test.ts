import { expect, jest, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { createExtensionHostRpc } from '../src/parts/CreateExtensionHostRpc/CreateExtensionHostRpc.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

test('createExtensionHostRpc - success', async () => {
  const mockInvokeRendererWorker = jest.fn()
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke() {},
    invokeAndTransfer: mockInvokeRendererWorker,
  })
  RendererWorker.set(mockRpc)
  const rpc = await createExtensionHostRpc()
  expect(mockInvokeRendererWorker).toHaveBeenCalledTimes(1)
  expect(mockInvokeRendererWorker).toHaveBeenCalledWith(
    'SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker',
    expect.anything(),
    'HandleMessagePort.handleMessagePort2',
    55,
  )
  expect(rpc).toBeDefined()
  await rpc.dispose()
})

test('createExtensionHostRpc - error in invokeAndTransfer', async () => {
  const mockInvokeRendererWorker = jest.fn().mockRejectedValue(new Error('test error') as never)
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke() {},
    invokeAndTransfer: mockInvokeRendererWorker,
  })
  RendererWorker.set(mockRpc)
  await expect(createExtensionHostRpc()).rejects.toThrow(new Error('Failed to create extension host rpc: test error'))
})
