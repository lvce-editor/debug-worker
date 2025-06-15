import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { diffFocus } from '../src/parts/DiffFocus/DiffFocus.ts'

test('diffFocus - no change', () => {
  const state1 = createDefaultState()
  const state2 = createDefaultState()
  expect(diffFocus(state1, state2)).toBe(false)
})

test('diffFocus - focus added', () => {
  const state1 = createDefaultState()
  const state2 = { ...createDefaultState(), focus: 'test' }
  expect(diffFocus(state1, state2)).toBe(true)
})

test('diffFocus - focus removed', () => {
  const state1 = { ...createDefaultState(), focus: 'test' }
  const state2 = createDefaultState()
  expect(diffFocus(state1, state2)).toBe(true)
})

test('diffFocus - focus changed', () => {
  const state1 = { ...createDefaultState(), focus: 'test1' }
  const state2 = { ...createDefaultState(), focus: 'test2' }
  expect(diffFocus(state1, state2)).toBe(true)
})
