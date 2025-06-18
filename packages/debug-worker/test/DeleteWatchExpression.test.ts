import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { deleteWatchExpression } from '../src/parts/DeleteWatchExpression/DeleteWatchExpression.ts'

test('deleteWatchExpression removes the correct watch expression', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpressions: RunAndDebugState = await addWatchExpression(await addWatchExpression(state, 'x + y'), 'a + b')
  const newState = deleteWatchExpression(stateWithExpressions, 0)
  expect(newState.watchExpressions).toHaveLength(1)
  expect(newState.watchExpressions[0]).toEqual({
    expression: 'a + b',
    value: null,
    isEditing: true,
  })
})

test('deleteWatchExpression does nothing if index is out of bounds (negative)', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpressions: RunAndDebugState = await addWatchExpression(state, 'x + y')
  const newState = deleteWatchExpression(stateWithExpressions, -1)
  expect(newState).toBe(stateWithExpressions)
})

test('deleteWatchExpression does nothing if index is out of bounds (too large)', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpressions: RunAndDebugState = await addWatchExpression(state, 'x + y')
  const newState = deleteWatchExpression(stateWithExpressions, 2)
  expect(newState).toBe(stateWithExpressions)
})
