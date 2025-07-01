import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import type { ScopeChainItem } from '../src/parts/ScopeChainItem/ScopeChainItem.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { expandScopeChain } from '../src/parts/ExpandScopeChain/ExpandScopeChain.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

test('expandScopeChain', async () => {
  const state: RunAndDebugState = createDefaultState()
  const expandedIds = ['id1']
  const scopeChain = [{ objectId: 'scope1' }, { objectId: 'scope2' }] as any[]
  const element = {} as ScopeChainItem
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
  RendererWorker.set(mockRpc)
  ExtensionHost.set(mockRpc)

  const result = await expandScopeChain(state, expandedIds, scopeChain, element, index, debugId, 0)

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
        flags: 0,
      },
    ],
    expandedIds: ['id1', 'scope2'],
    scopeFocusedIndex: 1,
    selectedIndex: 0,
    visibleRows: expect.anything(),
  })
})
