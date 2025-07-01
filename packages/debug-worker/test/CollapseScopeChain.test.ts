import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import type { ScopeChainItem } from '../src/parts/ScopeChainItem/ScopeChainItem.ts'
import { collapseScopeChain } from '../src/parts/CollapseScopeChain/CollapseScopeChain.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('collapseScopeChain', () => {
  const state: RunAndDebugState = createDefaultState()
  const expandedIds = ['scope1', 'scope2']
  const scopeChain: readonly ScopeChainItem[] = [
    { objectId: 'scope1', indent: 0, key: 'scope1', label: 'scope1', type: 1, value: 'scope1', valueType: 'object', flags: 0 },
    { objectId: 'scope2', indent: 1, key: 'scope2', label: 'scope2', type: 1, value: 'scope2', valueType: 'object', flags: 0 },
    { objectId: 'scope3', indent: 2, key: 'scope3', label: 'scope3', type: 1, value: 'scope3', valueType: 'object', flags: 0 },
    { objectId: 'scope4', indent: 1, key: 'scope4', label: 'scope4', type: 1, value: 'scope4', valueType: 'object', flags: 0 },
  ]
  const element: ScopeChainItem = { objectId: 'scope2', indent: 1, key: 'scope2', label: 'scope2', type: 1, value: 'scope2', valueType: 'object', flags: 0 }
  const index = 1

  const result = collapseScopeChain(state, expandedIds, scopeChain, element, index, 0)

  expect(result.expandedIds).toEqual(['scope1'])
  expect(result.scopeChain).toEqual([
    { objectId: 'scope1', indent: 0, key: 'scope1', label: 'scope1', type: 1, value: 'scope1', valueType: 'object', flags: 0 },
    { objectId: 'scope2', indent: 1, key: 'scope2', label: 'scope2', type: 1, value: 'scope2', valueType: 'object', flags: 0 },
    { objectId: 'scope4', indent: 1, key: 'scope4', label: 'scope4', type: 1, value: 'scope4', valueType: 'object', flags: 0 },
  ])
  expect(result.scopeFocusedIndex).toBe(1)
  expect(result.cache).toEqual({
    scope2: [
      { objectId: 'scope3', indent: 2, key: 'scope3', label: 'scope3', type: 1, value: 'scope3', valueType: 'object', flags: 0 },
    ],
  })
  expect(result.visibleRows).toBeDefined()
})

test('collapseScopeChain - no children to collapse', () => {
  const state: RunAndDebugState = createDefaultState()
  const expandedIds = ['scope1']
  const scopeChain: readonly ScopeChainItem[] = [
    { objectId: 'scope1', indent: 0, key: 'scope1', label: 'scope1', type: 1, value: 'scope1', valueType: 'object', flags: 0 },
    { objectId: 'scope2', indent: 1, key: 'scope2', label: 'scope2', type: 1, value: 'scope2', valueType: 'object', flags: 0 },
  ]
  const element: ScopeChainItem = { objectId: 'scope2', indent: 1, key: 'scope2', label: 'scope2', type: 1, value: 'scope2', valueType: 'object', flags: 0 }
  const index = 1

  const result = collapseScopeChain(state, expandedIds, scopeChain, element, index, 0)

  expect(result.expandedIds).toEqual(['scope1'])
  expect(result.scopeChain).toEqual([
    { objectId: 'scope1', indent: 0, key: 'scope1', label: 'scope1', type: 1, value: 'scope1', valueType: 'object', flags: 0 },
    { objectId: 'scope2', indent: 1, key: 'scope2', label: 'scope2', type: 1, value: 'scope2', valueType: 'object', flags: 0 },
  ])
  expect(result.scopeFocusedIndex).toBe(1)
  expect(result.cache).toEqual({})
  expect(result.visibleRows).toBeDefined()
})
