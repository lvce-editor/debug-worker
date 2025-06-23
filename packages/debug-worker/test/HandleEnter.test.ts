import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleEnter } from '../src/parts/HandleEnter/HandleEnter.ts'

test('handleEnter returns the same state', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleEnter(state)
  expect(result).toBe(state)
})
