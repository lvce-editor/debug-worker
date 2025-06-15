import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { getInnerChildScopeChain } from '../src/parts/GetInnerChildScopeChain/GetInnerChildScopeChain.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

const mockRpc = MockRpc.create({
  commandMap: {},
  invoke: (method: string) => {
    if (method === 'ExtensionHostManagement.activateByEvent') {
      return []
    }
    throw new Error(`unexpected method ${method}`)
  },
})
RendererWorker.set(mockRpc)

const mockExtensionHost = MockRpc.create({
  invoke(method: string) {
    if (method === 'ExtensionHostDebug.getProperties') {
      return {
        result: {
          result: [
            {
              name: 'test',
              value: { type: 'string', value: 'test-value' },
            },
          ],
        },
      }
    }
    throw new Error(`unexpected method ${method}`)
  },
})

ExtensionHost.set(mockExtensionHost)

test('should return cached value if available', async () => {
  const cache = {
    'test-object-id': [{ type: 3, key: 'test', value: 'cached' }],
  }
  const result = await getInnerChildScopeChain(cache, 'debug-id', 'test-object-id', 0)
  expect(result).toEqual([{ type: 3, key: 'test', value: 'cached' }])
})

test('should get properties and create scope chain', async () => {
  const cache = {}
  const result = await getInnerChildScopeChain(cache, 'debug-id', 'object-id', 0)
  expect(result).toEqual([
    {
      type: 3,
      key: 'test',
      value: '"test-value"',
      valueType: 'string',
      objectId: '',
      indent: 10,
    },
  ])
})
