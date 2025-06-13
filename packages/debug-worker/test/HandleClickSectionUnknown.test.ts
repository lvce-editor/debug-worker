import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickSectionUnkown } from '../src/parts/HandleClickSectionUnknown/HandleClickSectionUnknown.ts'

test('handleClickSectionUnknown toggles callStackExpanded from false to true', () => {
  const state = createDefaultState()
  const result = handleClickSectionUnkown(state)
  expect(result.callStackExpanded).toBe(true)
})

test('handleClickSectionUnknown toggles callStackExpanded from true to false', () => {
  const state = {
    ...createDefaultState(),
    callStackExpanded: true,
  }
  const result = handleClickSectionUnkown(state)
  expect(result.callStackExpanded).toBe(false)
})
