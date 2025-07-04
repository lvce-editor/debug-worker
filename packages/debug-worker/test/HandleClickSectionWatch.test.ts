import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickSectionWatch } from '../src/parts/HandleClickSectionWatch/HandleClickSectionWatch.ts'

test('handleClickSectionWatch toggles watchExpanded from false to true', () => {
  const state: RunAndDebugState = createDefaultState()
  const result = handleClickSectionWatch(state)
  expect(result.watchExpanded).toBe(true)
  expect(result.focusedIndex).toBe(0)
})

test('handleClickSectionWatch toggles watchExpanded from true to false', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    watchExpanded: true,
  }
  const result = handleClickSectionWatch(state)
  expect(result.watchExpanded).toBe(false)
  expect(result.focusedIndex).toBe(0)
})
