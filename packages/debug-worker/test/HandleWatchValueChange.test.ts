import { test, expect } from '@jest/globals'
import { handleWatchValueChange } from '../src/parts/HandleWatchValueChange/HandleWatchValueChange.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'

test('should update last empty watch expression', () => {
  const state = createDefaultState()
  const stateWithNewExpression = addWatchExpression(state, '')
  const newState = handleWatchValueChange(stateWithNewExpression, 'x + y')
  expect(newState.watchExpressions).toHaveLength(1)
  expect(newState.watchExpressions[0]).toEqual({
    expression: 'x + y',
    value: null,
  })
})

test('should not update if last expression is not empty', () => {
  const state = createDefaultState()
  const stateWithExpression = addWatchExpression(state, 'a + b')
  const newState = handleWatchValueChange(stateWithExpression, 'x + y')
  expect(newState.watchExpressions).toHaveLength(1)
  expect(newState.watchExpressions[0]).toEqual({
    expression: 'a + b',
    value: null,
  })
})

test('should not update if no watch expressions exist', () => {
  const state = createDefaultState()
  const newState = handleWatchValueChange(state, 'x + y')
  expect(newState.watchExpressions).toHaveLength(0)
})
