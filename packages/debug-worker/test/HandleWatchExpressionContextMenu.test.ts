import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleWatchExpressionContextMenu } from '../src/parts/HandleWatchExpressionContextMenu/HandleWatchExpressionContextMenu.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

test('handleWatchExpressionContextMenu returns the same state', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ContextMenu.show') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const state = createDefaultState()
  const x = 100
  const y = 200
  const index = '0'
  const result = await handleWatchExpressionContextMenu(state, x, y, index)
  expect(result).toBe(state)
})
