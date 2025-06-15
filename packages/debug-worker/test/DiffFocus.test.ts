import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffFocus/DiffFocus.ts'

test('isEqual - no change', () => {
  const state1: RunAndDebugState = createDefaultState()
  const state2: RunAndDebugState = createDefaultState()
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual - focus added', () => {
  const state1: RunAndDebugState = createDefaultState()
  const state2 = { ...createDefaultState(), focus: 1 }
  expect(isEqual(state1, state2)).toBe(true)
})

test('isEqual - focus removed', () => {
  const state1: RunAndDebugState = { ...createDefaultState(), focus: 1 }
  const state2: RunAndDebugState = createDefaultState()
  expect(isEqual(state1, state2)).toBe(true)
})

test('isEqual - focus changed', () => {
  const state1: RunAndDebugState = { ...createDefaultState(), focus: 1 }
  const state2: RunAndDebugState = { ...createDefaultState(), focus: 2 }
  expect(isEqual(state1, state2)).toBe(true)
})
