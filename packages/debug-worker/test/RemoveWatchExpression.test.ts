import { test, expect } from '@jest/globals'
import { removeWatchExpression } from '../src/parts/RemoveWatchExpression/RemoveWatchExpression.ts'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('removeWatchExpression', () => {
  const state = createDefaultState()
  const stateWithExpressions = addWatchExpression(addWatchExpression(state, 'x + y'), 'a + b')
  const newState = removeWatchExpression(stateWithExpressions, 0)
  expect(newState.watchExpressions).toHaveLength(1)
  expect(newState.watchExpressions[0]).toEqual({
    expression: 'a + b',
    value: null,
  })
})
