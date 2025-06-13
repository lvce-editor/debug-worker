import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { openUri } from '../src/parts/OpenUri/OpenUri.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

test('openUri calls Main.openUri with correct parameters', async () => {
  let capturedMethod: string | undefined
  let capturedArgs: unknown[] | undefined

  const mockRpc = await MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: unknown[]) => {
      capturedMethod = method
      capturedArgs = args
      return Promise.resolve()
    },
  })
  RendererWorker.set(mockRpc)

  await openUri('file:///test.ts', 'typescript', 1, 2)

  expect(capturedMethod).toBe('Main.openUri')
  expect(capturedArgs).toEqual([
    'file:///test.ts',
    true,
    {
      languageId: 'typescript',
      rowIndex: 1,
      columnIndex: 2,
    },
  ])
})
