import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugSectionId from '../src/parts/DebugSectionId/DebugSectionId.ts'
import { handleClickSectionHeading } from '../src/parts/HandleClickSectionHeading/HandleClickSectionHeading.ts'
import * as MouseEventType from '../src/parts/MouseEventType/MouseEventType.ts'

test('handleClickSectionHeading delegates to watch handler', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleClickSectionHeading(state, DebugSectionId.Watch, MouseEventType.LeftClick)
  expect(result.watchExpanded).toBe(true)
  expect(result.selectedIndex).toBe(0)
})

test('handleClickSectionHeading delegates to breakpoints handler', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleClickSectionHeading(state, DebugSectionId.BreakPoints, MouseEventType.LeftClick)
  expect(result.breakPointsExpanded).toBe(true)
  expect(result.selectedIndex).toBe(1)
})

test('handleClickSectionHeading delegates to scope handler', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleClickSectionHeading(state, DebugSectionId.Scope, MouseEventType.LeftClick)
  expect(result.scopeExpanded).toBe(true)
  expect(result.selectedIndex).toBe(2)
})

test('handleClickSectionHeading delegates to callstack handler', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleClickSectionHeading(state, DebugSectionId.CallStack, MouseEventType.LeftClick)
  expect(result.callStackExpanded).toBe(true)
  expect(result.selectedIndex).toBe(3)
})

test.skip('handleClickSectionHeading delegates to unknown handler for invalid id', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleClickSectionHeading(state, 'invalid', MouseEventType.LeftClick)
  expect(result).toBe(state)
})
