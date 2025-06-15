import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as RpcRegistry from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderActions } from '../src/parts/RenderActions/RenderActions.ts'

test('renderActions - returns virtual dom nodes', async () => {
  const mockRpc = MockRpc.create({
    invoke: (method: string) => {
      if (method === 'FileSystem.readDirWithFileTypes') {
        return []
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.RendererWorker.set(mockRpc)

  const uid = 1
  createDefaultState(uid)
  const result = renderActions(uid)
  expect(result).toBeDefined()
  expect(Array.isArray(result)).toBe(true)
})
