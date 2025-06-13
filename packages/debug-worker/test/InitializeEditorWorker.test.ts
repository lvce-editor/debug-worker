import { expect, jest, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { initializEditorWorker } from '../src/parts/InitializeEditorWorker/InitializeEditorWorker.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

test('initializEditorWorker - success', async () => {
  const mockInvokeRendererWorker = jest.fn()
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: () => {},
    invokeAndTransfer: mockInvokeRendererWorker,
  })
  RendererWorker.set(mockRpc)
  await initializEditorWorker()
  expect(mockInvokeRendererWorker).toHaveBeenCalledTimes(1)
  expect(mockInvokeRendererWorker).toHaveBeenCalledWith(
    'SendMessagePortToEditorWorker.sendMessagePortToEditorWorker',
    expect.anything(),
    'HandleMessagePort.handleMessagePort',
    55,
  )
})

test('initializEditorWorker - error', async () => {
  const mockInvokeRendererWorker = jest.fn().mockRejectedValue(new Error('test error') as never)
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: () => {},
    invokeAndTransfer: mockInvokeRendererWorker,
  })
  RendererWorker.set(mockRpc)
  await expect(initializEditorWorker()).resolves.not.toThrow()
})
