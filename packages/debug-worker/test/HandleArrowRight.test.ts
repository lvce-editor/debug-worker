import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleArrowRight } from '../src/parts/HandleArrowRight/HandleArrowRight.ts'

test('handleArrowRight returns the same state', () => {
  const state = createDefaultState()
  const result = handleArrowRight(state)
  expect(result).toBe(state)
})
