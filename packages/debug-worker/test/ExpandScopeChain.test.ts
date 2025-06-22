import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as RpcRegistry from '@lvce-editor/rpc-registry'
import { RpcId } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { expandScopeChain } from '../src/parts/ExpandScopeChain/ExpandScopeChain.ts'

test('expandScopeChain', async () => {
  const state = createDefaultState()
  const expandedIds = ['id1']
  const scopeChain = [{ objectId: 'scope1' }, { objectId: 'scope2' }] as any[]
  const element = {}
  const index = 1
  const debugId = 'debug1'

  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.getProperties') {
        return {
          result: {
            result: [
              {
                name: 'prop1',
                value: { value: 'value1' },
              },
            ],
          },
        }
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)
  RpcRegistry.set(RpcId.ExtensionHostWorker, mockRpc)

  const result = await expandScopeChain(state, expandedIds, scopeChain, element, index, debugId)

  expect(result).toEqual({
    ...state,
    focus: expect.anything(),
    scopeChain: [
      { objectId: 'scope1' },
      { objectId: 'scope2' },
      {
        type: 3,
        key: 'prop1',
        value: '{"value":"value1"}',
        valueType: '',
        objectId: '',
        indent: Number.NaN,
        label: '',
      },
    ],
    expandedIds: ['id1', 'scope2'],
    scopeFocusedIndex: 1,
    visibleRows: expect.anything(),
  })
})
