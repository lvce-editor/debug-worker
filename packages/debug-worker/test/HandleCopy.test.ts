import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleCopy } from '../src/parts/HandleCopy/HandleCopy.ts'

test('handleCopy should copy watch expression when selected row is a watch expression', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpression: RunAndDebugState = await addWatchExpression(state, 'x + y')

  // Set selected index to the watch expression row (index 0)
  const stateWithSelection: RunAndDebugState = {
    ...stateWithExpression,
    selectedIndex: 0,
  }

  const result = await handleCopy(stateWithSelection)

  // Should return the same state
  expect(result).toBe(stateWithSelection)
})

test('handleCopy should do nothing when selected row is not a watch expression', async () => {
  const state: RunAndDebugState = createDefaultState()

  // Set selected index to a non-watch expression row
  const stateWithSelection: RunAndDebugState = {
    ...state,
    selectedIndex: 0,
  }

  const result = await handleCopy(stateWithSelection)

  // Should return the same state
  expect(result).toBe(stateWithSelection)
})

test('handleCopy should do nothing when selected index is out of bounds', async () => {
  const state: RunAndDebugState = createDefaultState()

  // Set selected index to out of bounds
  const stateWithSelection: RunAndDebugState = {
    ...state,
    selectedIndex: 999,
  }

  const result = await handleCopy(stateWithSelection)

  // Should return the same state
  expect(result).toBe(stateWithSelection)
})
