import { test, expect } from '@jest/globals'
import { acceptWatchExpressionEdit } from '../src/parts/AcceptWatchExpressionEdit/AcceptWatchExpressionEdit.ts'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('should remove empty watch expression and reset focus when editing value is empty', () => {
  const state = createDefaultState()
  const stateWithNewExpression = addWatchExpression(state, '')
  const result = acceptWatchExpressionEdit(stateWithNewExpression, '')
  expect(result.watchExpressions).toHaveLength(0)
  expect(result.focus).toBe(0)
})

test('should create new watch expression with editing value and reset focus', () => {
  const state = createDefaultState()
  const stateWithNewExpression = addWatchExpression(state, '')
  const result = acceptWatchExpressionEdit(stateWithNewExpression, 'x + y')
  expect(result.watchExpressions).toHaveLength(1)
  expect(result.watchExpressions[0]).toEqual({
    expression: 'x + y',
    value: null,
  })
  expect(result.focus).toBe(0)
})

test('should only reset focus if last expression is not empty', () => {
  const state = createDefaultState()
  const stateWithExpressions = addWatchExpression(addWatchExpression(state, 'x + y'), '')
  const result = acceptWatchExpressionEdit(stateWithExpressions, 'a + b')
  expect(result.watchExpressions).toHaveLength(1)
  expect(result.watchExpressions[0]).toEqual({
    expression: 'x + y',
    value: null,
  })
  expect(result.focus).toBe(0)
})
