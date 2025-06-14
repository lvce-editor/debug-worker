import { jest, test, expect } from '@jest/globals'
import { handleClickCallstackItem } from '../src/parts/HandleClickCallstackItem/HandleClickCallstackItem.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { ParsedScript } from '../src/parts/ParsedScript/ParsedScript.ts'

test('handleClickCallstackItem', async () => {
  const mockRpc = await MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Main.openUri') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const state = createDefaultState()
  const callStack = [
    {
      functionName: 'test',
      functionLocation: {
        scriptId: '1',
        lineNumber: 1,
        columnNumber: 1,
      },
      location: {
        scriptId: '1',
        lineNumber: 1,
        columnNumber: 1,
      },
    },
  ]
  const parsedScripts = {
    '1': {
      scriptId: '1',
      scriptLanguage: 'javascript',
      url: 'test.js',
    } as ParsedScript,
  }
  const newState = {
    ...state,
    callStack,
    parsedScripts,
  }
  const result = await handleClickCallstackItem(newState, 0)
  expect(result).toBe(newState)
})
