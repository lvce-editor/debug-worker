import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { getInnerChildScopeChain } from '../src/parts/GetInnerChildScopeChain/GetInnerChildScopeChain.ts'

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
    'test-object-id': [{ key: 'test', type: 3, value: 'cached' }],
  }
  const result = await getInnerChildScopeChain(cache, 'debug-id', 'test-object-id', 0, 100)
  expect(result).toEqual([{ key: 'test', type: 3, value: 'cached' }])
})

test('should get properties and create scope chain', async () => {
  const cache = {}
  const result = await getInnerChildScopeChain(cache, 'debug-id', 'object-id', 0, 100)
  expect(result).toEqual([
    {
      flags: 0,
      indent: 10,
      key: 'test',
      label: '',
      objectId: '',
      type: 3,
      value: '"test-value"',
      valueType: 'string',
    },
  ])
})
