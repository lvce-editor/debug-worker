import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('addWatchExpression', async () => {
  const state: RunAndDebugState = createDefaultState()
  const newState = await addWatchExpression(state, 'x + y')
  expect(newState.watchExpressions).toHaveLength(1)
  expect(newState.watchExpressions[0]).toEqual({
    expression: 'x + y',
    value: null,
    isEditing: true,
  })
})
