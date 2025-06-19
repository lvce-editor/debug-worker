import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { hideWatch } from '../src/parts/HideWatch/HideWatch.ts'

test('hideWatch sets watchVisible to false', () => {
  const state: RunAndDebugState = createDefaultState()
  const newState = hideWatch(state)
  expect(newState.watchVisible).toBe(false)
})
