import { test, expect } from '@jest/globals'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('addWatchExpression', () => {
  const state = createDefaultState()
  const newState = addWatchExpression(state, 'x + y')
  expect(newState.watchExpressions).toHaveLength(1)
  expect(newState.watchExpressions[0]).toEqual({
    expression: 'x + y',
    value: null,
    isEditing: true,
  })
})
