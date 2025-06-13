import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'
import { sendMessagePortToEditorWorker } from '../src/parts/SendMessagePortToEditorWorker/SendMessagePortToEditorWorker.ts'

test('sendMessagePortToEditorWorker sends port to editor worker', async () => {
  const mockRpc = await MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'SendMessagePortToExtensionHostWorker.sendMessagePortToEditorWorker') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const port = new MessagePort()
  await sendMessagePortToEditorWorker(port)
})
