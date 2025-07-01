import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickSectionAction } from '../src/parts/HandleClickSectionAction/HandleClickSectionAction.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('should return same state when actionId is empty', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleClickSectionAction(state, '')
  expect(result).toBe(state)
})

test('should add watch expression when actionId is add-watch-expression', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleClickSectionAction(state, InputName.AddWatchExpression)
  expect(result.watchExpressions).toHaveLength(1)
  expect(result.watchExpressions[0]).toEqual({
    expression: '',
    value: null,
    isEditing: true,
  })
})

test('should return same state for unknown actionId', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleClickSectionAction(state, 'unknown-action')
  expect(result).toBe(state)
})
