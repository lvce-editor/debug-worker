import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleArrowLeft } from '../src/parts/HandleArrowLeft/HandleArrowLeft.ts'

test('handleArrowLeft returns the same state', () => {
  const state = createDefaultState()
  const result = handleArrowLeft(state)
  expect(result).toBe(state)
})
