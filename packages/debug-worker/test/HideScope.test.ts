import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { hideScope } from '../src/parts/HideScope/HideScope.ts'

test('hideScope sets scopeVisible to false', () => {
  const state: RunAndDebugState = createDefaultState()
  const newState = hideScope(state)
  expect(newState.scopeVisible).toBe(false)
})
