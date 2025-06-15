import { test, expect, jest } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { expandScopeChain } from '../src/parts/ExpandScopeChain/ExpandScopeChain.ts'
import * as GetChildScopeChain from '../src/parts/GetChildScopeChain/GetChildScopeChain.ts'

test('expandScopeChain', async () => {
  const state = createDefaultState()
  const expandedIds = ['id1']
  const scopeChain = [{ objectId: 'scope1' }, { objectId: 'scope2' }]
  const element = {}
  const index = 1
  const debugId = 'debug1'
  const newScopeChain = ['newScope1', 'newScope2']

  jest.spyOn(GetChildScopeChain, 'getChildScopeChain').mockResolvedValue(newScopeChain)

  const result = await expandScopeChain(state, expandedIds, scopeChain, element, index, debugId)

  expect(result).toEqual({
    ...state,
    scopeChain: newScopeChain,
    expandedIds: ['id1', 'scope2'],
    scopeFocusedIndex: 1,
  })

  expect(GetChildScopeChain.getChildScopeChain).toHaveBeenCalledWith(state.cache, index, debugId, scopeChain)
})
