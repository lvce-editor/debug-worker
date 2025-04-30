import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as RpcRegistry from '@lvce-editor/rpc-registry'
import { renderActions } from '../src/parts/RenderActions/RenderActions.ts'
import { RendererWorker } from '../src/parts/RpcId/RpcId.ts'
import { createDefaultState } from '../src/parts/RunAndDebugStates/createDefaultState.ts'

test('renderActions - returns virtual dom nodes', async () => {
  const mockRpc = MockRpc.create({
    invoke: (method: string) => {
      if (method === 'FileSystem.readDirWithFileTypes') {
        return Promise.resolve([])
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RendererWorker, mockRpc)

  const uid = 1
  createDefaultState(uid)
  const result = renderActions(uid)
  expect(result).toBeDefined()
  expect(Array.isArray(result)).toBe(true)
})
