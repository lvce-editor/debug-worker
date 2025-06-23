import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleNew } from '../src/parts/HandleNew/HandleNew.ts'

test('handleNew returns state unchanged', async () => {
  const state = createDefaultState()
  const result = await handleNew(state)
  expect(result).toBe(state)
})
