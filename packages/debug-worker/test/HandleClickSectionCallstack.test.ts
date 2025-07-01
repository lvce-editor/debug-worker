import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickSectionCallstack } from '../src/parts/HandleClickSectionCallstack/HandleClickSectionCallstack.ts'

test('handleClickSectionCallstack toggles callStackExpanded from false to true', () => {
  const state: RunAndDebugState = createDefaultState()
  const result = handleClickSectionCallstack(state)
  expect(result.callStackExpanded).toBe(true)
  expect(result.selectedIndex).toBe(3)
})

test('handleClickSectionCallstack toggles callStackExpanded from true to false', () => {
  const state: RunAndDebugState = { ...createDefaultState(), callStackExpanded: true }
  const result = handleClickSectionCallstack(state)
  expect(result.callStackExpanded).toBe(false)
  expect(result.selectedIndex).toBe(3)
})
