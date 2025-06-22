import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleSpace } from '../src/parts/HandleSpace/HandleSpace.ts'

test('handleSpace returns the same state', async () => {
  const state = createDefaultState()
  const result = await handleSpace(state)
  expect(result).toBe(state)
})
