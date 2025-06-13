import { test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as RpcRegistry from '@lvce-editor/rpc-registry'
import { RpcId } from '@lvce-editor/rpc-registry'
import { updateDebugInfo } from '../src/parts/UpdateDebugInfo/UpdateDebugInfo.js'

test.skip('updateDebugInfo', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Editor.updateDebugInfo') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RpcId.EditorWorker, mockRpc)
  await updateDebugInfo('test-key')
})
