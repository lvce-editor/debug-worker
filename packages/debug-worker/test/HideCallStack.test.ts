import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { hideCallStack } from '../src/parts/HideCallStack/HideCallStack.ts'

test('hideCallStack sets callStackVisible to false', () => {
  const state: RunAndDebugState = createDefaultState()
  const newState = hideCallStack(state)
  expect(newState.callStackVisible).toBe(false)
})
