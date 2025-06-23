import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowName from '../src/parts/DebugRowName/DebugRowName.ts'
import { getSectionIndex } from '../src/parts/GetSectionIndex/GetSectionIndex.ts'

// The default state should have all four section headings in order: Watch, BreakPoints, Scope, CallStack

test('getSectionIndex returns 0 for Watch section', () => {
  const state: RunAndDebugState = createDefaultState()
  const index = getSectionIndex(state, DebugRowName.Watch)
  expect(index).toBe(0)
})

test('getSectionIndex returns 1 for BreakPoints section', () => {
  const state: RunAndDebugState = createDefaultState()
  const index = getSectionIndex(state, DebugRowName.BreakPoints)
  expect(index).toBe(1)
})

test('getSectionIndex returns 2 for Scope section', () => {
  const state: RunAndDebugState = createDefaultState()
  const index = getSectionIndex(state, DebugRowName.Scope)
  expect(index).toBe(2)
})

test('getSectionIndex returns 3 for CallStack section', () => {
  const state: RunAndDebugState = createDefaultState()
  const index = getSectionIndex(state, DebugRowName.CallStack)
  expect(index).toBe(3)
})

test('getSectionIndex returns -1 for unknown section', () => {
  const state: RunAndDebugState = createDefaultState()
  const index = getSectionIndex(state, 'unknown-section')
  expect(index).toBe(-1)
})
