import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { collapseScopeChain } from '../src/parts/CollapseScopeChain/CollapseScopeChain.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('collapseScopeChain', () => {
  const state = createDefaultState()
  const expandedIds = ['scope1', 'scope2']
  const scopeChain = [
    { objectId: 'scope1', indent: 0 },
    { objectId: 'scope2', indent: 1 },
    { objectId: 'scope3', indent: 2 },
    { objectId: 'scope4', indent: 1 },
  ]
  const element = { objectId: 'scope2', indent: 1 }
  const index = 1

  const result = collapseScopeChain(state, expandedIds, scopeChain, element, index)

  expect(result).toEqual({
    ...state,
    expandedIds: ['scope1'],
    scopeChain: [
      { objectId: 'scope1', indent: 0 },
      { objectId: 'scope2', indent: 1 },
      { objectId: 'scope4', indent: 1 },
    ],
    scopeFocusedIndex: 1,
    cache: {
      scope2: [{ objectId: 'scope3', indent: 2 }],
    },
  })
})

test('collapseScopeChain - no children to collapse', () => {
  const state = createDefaultState()
  const expandedIds = ['scope1']
  const scopeChain = [
    { objectId: 'scope1', indent: 0 },
    { objectId: 'scope2', indent: 1 },
  ]
  const element = { objectId: 'scope2', indent: 1 }
  const index = 1

  const result = collapseScopeChain(state, expandedIds, scopeChain, element, index)

  expect(result).toEqual({
    ...state,
    expandedIds: ['scope1'],
    scopeChain: [
      { objectId: 'scope1', indent: 0 },
      { objectId: 'scope2', indent: 1 },
    ],
    scopeFocusedIndex: 1,
    cache: {},
  })
})
