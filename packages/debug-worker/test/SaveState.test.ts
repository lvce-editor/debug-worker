import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RunAndDebugStates from '../src/parts/RunAndDebugStates/RunAndDebugStates.ts'
import { saveState } from '../src/parts/SaveState/SaveState.ts'

test('saveState returns correct state', () => {
  const id = 1
  const state: RunAndDebugState = {
    ...createDefaultState(),
  }
  RunAndDebugStates.set(id, state, state)
  const result = saveState(id)
  expect(result).toEqual({
    watchExpressions: [],
  })
})
