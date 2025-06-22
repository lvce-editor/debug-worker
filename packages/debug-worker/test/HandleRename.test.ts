import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleRename } from '../src/parts/HandleRename/HandleRename.ts'

test('handleRename returns the same state', async () => {
  const state = createDefaultState()
  const result = await handleRename(state)
  expect(result).toBe(state)
})
