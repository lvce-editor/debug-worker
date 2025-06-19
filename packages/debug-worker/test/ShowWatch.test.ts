import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { showWatch } from '../src/parts/ShowWatch/ShowWatch.ts'

test('showWatch sets watchVisible to true', () => {
  const state: RunAndDebugState = createDefaultState()
  const newState = showWatch(state)
  expect(newState.watchVisible).toBe(true)
})
