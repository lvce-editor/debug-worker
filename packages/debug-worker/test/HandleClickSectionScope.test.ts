import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickSectionScope } from '../src/parts/HandleClickSectionScope/HandleClickSectionScope.ts'

test('handleClickSectionScope toggles scopeExpanded from false to true', () => {
  const state: RunAndDebugState = createDefaultState()
  const result = handleClickSectionScope(state)
  expect(result.scopeExpanded).toBe(true)
  expect(result.selectedIndex).toBe(2)
})

test('handleClickSectionScope toggles scopeExpanded from true to false', () => {
  const state: RunAndDebugState = { ...createDefaultState(), scopeExpanded: true }
  const result = handleClickSectionScope(state)
  expect(result.scopeExpanded).toBe(false)
  expect(result.selectedIndex).toBe(2)
})
