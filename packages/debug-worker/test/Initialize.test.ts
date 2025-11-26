import { test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { initialize } from '../src/parts/Initialize/Initialize.ts'
import { RendererWorker } from '@lvce-editor/rpc-registry'

test('initialize calls both extension host and editor worker initialization', async () => {
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: () => {},
    invokeAndTransfer: () => {},
  })
  RendererWorker.set(mockRendererWorker)
  await initialize()
  await ExtensionHost.dispose()
  await EditorWorker.dispose()
})
