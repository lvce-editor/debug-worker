import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffFocusContext/DiffFocusContext.ts'

test('isEqual', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()

  // Both states have no focus
  expect(isEqual(oldState, newState)).toBe(true)

  // New state has no focus
  const stateWithFocus: RunAndDebugState = {
    ...oldState,
    focus: 1,
  }
  expect(isEqual(stateWithFocus, newState)).toBe(true)

  // Both states have same focus
  const newStateWithSameFocus: RunAndDebugState = {
    ...newState,
    focus: 1,
  }
  expect(isEqual(stateWithFocus, newStateWithSameFocus)).toBe(true)

  // States have different focus
  const newStateWithDifferentFocus: RunAndDebugState = {
    ...newState,
    focus: 2,
  }
  expect(isEqual(stateWithFocus, newStateWithDifferentFocus)).toBe(false)
})
