import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { deleteAllWatchExpressions } from '../src/parts/DeleteAllWatchExpressions/DeleteAllWatchExpressions.ts'

test('deleteAllWatchExpressions removes all watch expressions', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpressions: RunAndDebugState = await addWatchExpression(await addWatchExpression(state, 'x + y'), 'a + b')
  const newState = deleteAllWatchExpressions(stateWithExpressions)
  expect(newState.watchExpressions).toHaveLength(0)
})

test('deleteAllWatchExpressions returns same state when no expressions exist', () => {
  const state: RunAndDebugState = createDefaultState()
  const newState = deleteAllWatchExpressions(state)
  expect(newState.watchExpressions).toHaveLength(0)
  expect(newState).not.toBe(state)
})
