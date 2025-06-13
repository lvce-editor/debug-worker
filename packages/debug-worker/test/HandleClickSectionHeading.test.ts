import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickSectionHeading } from '../src/parts/HandleClickSectionHeading/HandleClickSectionHeading.ts'
import * as DebugSectionId from '../src/parts/DebugSectionId/DebugSectionId.ts'

test('handleClickSectionHeading delegates to watch handler', async () => {
  const state = createDefaultState()
  const result = await handleClickSectionHeading(state, DebugSectionId.Watch)
  expect(result.watchExpanded).toBe(true)
  expect(result.focusedIndex).toBe(0)
})

test('handleClickSectionHeading delegates to callstack handler', async () => {
  const state = createDefaultState()
  const result = await handleClickSectionHeading(state, DebugSectionId.CallStack)
  expect(result.callStackExpanded).toBe(true)
  expect(result.focusedIndex).toBe(1)
})

test('handleClickSectionHeading delegates to scope handler', async () => {
  const state = createDefaultState()
  const result = await handleClickSectionHeading(state, DebugSectionId.Scope)
  expect(result.scopeExpanded).toBe(true)
  expect(result.focusedIndex).toBe(2)
})

test('handleClickSectionHeading delegates to unknown handler for invalid id', async () => {
  const state = createDefaultState()
  const result = await handleClickSectionHeading(state, 'invalid-id')
  expect(result.callStackExpanded).toBe(true)
})
