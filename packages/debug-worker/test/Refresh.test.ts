import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { refresh } from '../src/parts/Refresh/Refresh.ts'

test('refresh', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await refresh(state)
  expect(result).toEqual(state)
})
