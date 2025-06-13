import { test, expect } from '@jest/globals'
import { openUri } from '../src/parts/OpenUri/OpenUri.ts'
import { MockRpc } from '@lvce-editor/rpc'
import * as RpcRegistry from '@lvce-editor/rpc-registry'
import { RpcId } from '@lvce-editor/rpc-registry'

test('openUri calls Main.openUri with correct parameters', async () => {
  const mockRpc = await MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: unknown[]) => {
      if (method === 'Main.openUri') {
        expect(args).toEqual([
          'file:///test.ts',
          true,
          {
            languageId: 'typescript',
            rowIndex: 1,
            columnIndex: 2,
          },
        ])
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)

  await openUri('file:///test.ts', 'typescript', 1, 2)
})
