import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffFocus/DiffFocus.ts'

test('isEqual - no change', () => {
  const state1 = createDefaultState()
  const state2 = createDefaultState()
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual - focus added', () => {
  const state1 = createDefaultState()
  const state2 = { ...createDefaultState(), focus: 'test' }
  expect(isEqual(state1, state2)).toBe(true)
})

test('isEqual - focus removed', () => {
  const state1 = { ...createDefaultState(), focus: 'test' }
  const state2 = createDefaultState()
  expect(isEqual(state1, state2)).toBe(true)
})

test('isEqual - focus changed', () => {
  const state1 = { ...createDefaultState(), focus: 'test1' }
  const state2 = { ...createDefaultState(), focus: 'test2' }
  expect(isEqual(state1, state2)).toBe(true)
})
