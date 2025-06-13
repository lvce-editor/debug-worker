import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickSectionCallstack } from '../src/parts/HandleClickSectionCallstack/HandleClickSectionCallstack.ts'

test('handleClickSectionCallstack toggles callStackExpanded from false to true', () => {
  const state = createDefaultState()
  const result = handleClickSectionCallstack(state)
  expect(result.callStackExpanded).toBe(true)
  expect(result.focusedIndex).toBe(1)
})

test('handleClickSectionCallstack toggles callStackExpanded from true to false', () => {
  const state = {
    ...createDefaultState(),
    callStackExpanded: true,
  }
  const result = handleClickSectionCallstack(state)
  expect(result.callStackExpanded).toBe(false)
  expect(result.focusedIndex).toBe(1)
})
