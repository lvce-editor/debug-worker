import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickSectionAction } from '../src/parts/HandleClickSectionAction/HandleClickSectionAction.ts'

test('should return same state when actionId is empty', async () => {
  const state = createDefaultState()
  const result = await handleClickSectionAction(state, '')
  expect(result).toBe(state)
})

test('should add watch expression when actionId is add-watch-expression', async () => {
  const state = createDefaultState()
  const result = await handleClickSectionAction(state, 'add-watch-expression')
  expect(result.watchExpressions).toHaveLength(1)
  expect(result.watchExpressions[0]).toEqual({
    expression: '',
    value: null,
  })
})

test('should return same state for unknown actionId', async () => {
  const state = createDefaultState()
  const result = await handleClickSectionAction(state, 'unknown-action')
  expect(result).toBe(state)
})
