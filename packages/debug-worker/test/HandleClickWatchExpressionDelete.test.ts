import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickWatchExpressionDelete } from '../src/parts/HandleClickWatchExpressionDelete/HandleClickWatchExpressionDelete.ts'

test('handleClickWatchExpressionDelete removes the correct watch expression', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpressions: RunAndDebugState = await addWatchExpression(await addWatchExpression(state, 'x + y'), 'a + b')
  const newState = await handleClickWatchExpressionDelete(stateWithExpressions, '0')
  expect(newState.watchExpressions).toHaveLength(1)
  expect(newState.watchExpressions[0]).toEqual({
    expression: 'a + b',
    value: null,
    isEditing: true,
  })
})

test('handleClickWatchExpressionDelete does nothing if index is out of bounds', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpressions: RunAndDebugState = await addWatchExpression(state, 'x + y')
  const newState = await handleClickWatchExpressionDelete(stateWithExpressions, '2')
  expect(newState).toBe(stateWithExpressions)
})
