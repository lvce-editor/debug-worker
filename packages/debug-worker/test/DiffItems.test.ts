import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { isEqual } from '../src/parts/DiffItems/DiffItems.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('isEqual - identical states', () => {
  const state = createDefaultState(0)
  expect(isEqual(state, state)).toBe(true)
})

test('isEqual - different scopeChain', () => {
  const state1 = createDefaultState(0)
  const state2: RunAndDebugState = {
    ...createDefaultState(0),
    scopeChain: ['different'],
  }
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual - different scopeExpanded', () => {
  const state1 = createDefaultState()
  const state2: RunAndDebugState = {
    ...createDefaultState(),
    scopeExpanded: true,
  }
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual - different callFrameId', () => {
  const state1 = createDefaultState()
  const state2: RunAndDebugState = {
    ...createDefaultState(),
    callFrameId: 'different',
  }
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual - different breakPointsExpanded', () => {
  const state1 = createDefaultState()
  const state2: RunAndDebugState = {
    ...createDefaultState(),
    breakPointsExpanded: true,
  }
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual - different debugState', () => {
  const state1 = createDefaultState()
  const state2: RunAndDebugState = {
    ...createDefaultState(),
    debugState: 1,
  }
  expect(isEqual(state1, state2)).toBe(false)
})
