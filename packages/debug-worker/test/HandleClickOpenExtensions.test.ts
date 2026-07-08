import { expect, jest, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickOpenExtensions } from '../src/parts/HandleClickOpenExtensions/HandleClickOpenExtensions.ts'

test('handleClickOpenExtensions opens extensions side bar', async () => {
  const invoke = jest.fn<(method: string, ...args: unknown[]) => Promise<void>>().mockResolvedValue(undefined)
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke,
  })
  RendererWorker.set(mockRpc)
  const state = createDefaultState(1)

  const result = await handleClickOpenExtensions(state)

  expect(result).toBe(state)
  expect(invoke).toHaveBeenCalledWith('SideBar.show', 'Extensions')
})
