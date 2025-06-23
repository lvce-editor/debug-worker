import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickScopeValue } from '../src/parts/HandleClickScopeValue/HandleClickScopeValue.ts'
import * as MouseEventType from '../src/parts/MouseEventType/MouseEventType.ts'

test('handleClickScopeValue returns state unchanged for non-left-click', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleClickScopeValue(state, 'test', MouseEventType.Keyboard)
  expect(result).toBe(state)
})

test('handleClickScopeValue returns state unchanged for right-click', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleClickScopeValue(state, 'test', 2) // Right click
  expect(result).toBe(state)
})

test('handleClickScopeValue processes left-click but returns state when no matching element', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleClickScopeValue(state, 'test', MouseEventType.LeftClick)
  // When no matching scope element is found, the function returns the state unchanged
  expect(result).toBe(state)
})
