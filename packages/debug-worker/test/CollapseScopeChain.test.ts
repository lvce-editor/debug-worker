import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import type { ScopeChainItem } from '../src/parts/ScopeChainItem/ScopeChainItem.ts'
import { collapseScopeChain } from '../src/parts/CollapseScopeChain/CollapseScopeChain.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('collapseScopeChain', () => {
  const state: RunAndDebugState = createDefaultState()
  const expandedIds = ['scope1', 'scope2']
  const scopeChain = [
    { objectId: 'scope1', indent: 0 },
    { objectId: 'scope2', indent: 1 },
    { objectId: 'scope3', indent: 2 },
    { objectId: 'scope4', indent: 1 },
  ] as any[]
  const element = { objectId: 'scope2', indent: 1 } as ScopeChainItem
  const index = 1

  const result = collapseScopeChain(state, expandedIds, scopeChain, element, index)

  expect(result.expandedIds).toEqual(['scope1'])
  expect(result.scopeChain).toEqual([
    { objectId: 'scope1', indent: 0 },
    { objectId: 'scope2', indent: 1 },
    { objectId: 'scope4', indent: 1 },
  ])
  expect(result.scopeFocusedIndex).toBe(1)
  expect(result.cache).toEqual({
    scope2: [{ objectId: 'scope3', indent: 2 }],
  })
  expect(result.visibleRows).toBeDefined()
})

test('collapseScopeChain - no children to collapse', () => {
  const state: RunAndDebugState = createDefaultState()
  const expandedIds = ['scope1']
  const scopeChain = [
    { objectId: 'scope1', indent: 0 },
    { objectId: 'scope2', indent: 1 },
  ] as any[]
  const element = { objectId: 'scope2', indent: 1 } as ScopeChainItem
  const index = 1

  const result = collapseScopeChain(state, expandedIds, scopeChain, element, index)

  expect(result.expandedIds).toEqual(['scope1'])
  expect(result.scopeChain).toEqual([
    { objectId: 'scope1', indent: 0 },
    { objectId: 'scope2', indent: 1 },
  ])
  expect(result.scopeFocusedIndex).toBe(1)
  expect(result.cache).toEqual({})
  expect(result.visibleRows).toBeDefined()
})
