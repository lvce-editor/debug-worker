import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { showCallStack } from '../src/parts/ShowCallStack/ShowCallStack.ts'

test('showCallStack sets callStackVisible to true', () => {
  const state: RunAndDebugState = createDefaultState()
  const newState = showCallStack(state)
  expect(newState.callStackVisible).toBe(true)
})
