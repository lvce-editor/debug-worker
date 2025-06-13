import { test, expect, jest } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { openUri } from '../src/parts/OpenUri/OpenUri.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

test('openUri calls Main.openUri with correct parameters', async () => {
  const invoke = jest.fn<(method: string, ...args: unknown[]) => Promise<void>>().mockResolvedValue(undefined)

  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke,
  })
  RendererWorker.set(mockRpc)

  await openUri('file:///test.ts', 'typescript', 1, 2)

  expect(invoke).toHaveBeenCalledWith('Main.openUri', 'file:///test.ts', true, {
    languageId: 'typescript',
    rowIndex: 1,
    columnIndex: 2,
  })
})
