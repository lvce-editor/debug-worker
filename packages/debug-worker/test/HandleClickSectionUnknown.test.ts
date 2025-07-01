import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickSectionUnknown } from '../src/parts/HandleClickSectionUnknown/HandleClickSectionUnknown.ts'

test('should handle click section unknown', () => {
  const state: RunAndDebugState = createDefaultState()
  const result = handleClickSectionUnknown(state)
  expect(result).toBe(state)
})

test.skip('handleClickSectionUnknown toggles callStackExpanded from true to false', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    callStackExpanded: true,
  }
  const result = handleClickSectionUnknown(state)
  expect(result.callStackExpanded).toBe(false)
})
