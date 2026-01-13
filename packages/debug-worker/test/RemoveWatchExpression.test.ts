import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { removeWatchExpression } from '../src/parts/RemoveWatchExpression/RemoveWatchExpression.ts'

test('removeWatchExpression', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpressions: RunAndDebugState = await addWatchExpression(await addWatchExpression(state, 'x + y'), 'a + b')
  const newState = removeWatchExpression(stateWithExpressions, 0)
  expect(newState.watchExpressions).toHaveLength(1)
  expect(newState.watchExpressions[0]).toEqual({
    expression: 'a + b',
    isEditing: true,
    value: null,
  })
})
