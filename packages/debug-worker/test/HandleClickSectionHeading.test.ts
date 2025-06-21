import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickSectionHeading } from '../src/parts/HandleClickSectionHeading/HandleClickSectionHeading.ts'
import * as MouseEventType from '../src/parts/MouseEventType/MouseEventType.ts'
import * as DebugRowName from '../src/parts/DebugRowName/DebugRowName.ts'

test('handleClickSectionHeading delegates to watch handler', async () => {
  const state = createDefaultState()
  const result = await handleClickSectionHeading(state, DebugRowName.Watch, MouseEventType.LeftClick)
  expect(result.watchExpanded).toBe(true)
  expect(result.focusedIndex).toBe(0)
})

test('handleClickSectionHeading delegates to breakpoints handler', async () => {
  const state = createDefaultState()
  const result = await handleClickSectionHeading(state, DebugRowName.BreakPoints, MouseEventType.LeftClick)
  expect(result.breakPointsExpanded).toBe(true)
  expect(result.focusedIndex).toBe(1)
})

test('handleClickSectionHeading delegates to scope handler', async () => {
  const state = createDefaultState()
  const result = await handleClickSectionHeading(state, DebugRowName.Scope, MouseEventType.LeftClick)
  expect(result.scopeExpanded).toBe(true)
  expect(result.selectedIndex).toBe(2)
})

test('handleClickSectionHeading delegates to callstack handler', async () => {
  const state = createDefaultState()
  const result = await handleClickSectionHeading(state, DebugRowName.CallStack, MouseEventType.LeftClick)
  expect(result.callStackExpanded).toBe(true)
  expect(result.focusedIndex).toBe(3)
})

test.skip('handleClickSectionHeading delegates to unknown handler for invalid id', async () => {
  const state = createDefaultState()
  const result = await handleClickSectionHeading(state, 'invalid', MouseEventType.LeftClick)
  expect(result).toBe(state)
})
