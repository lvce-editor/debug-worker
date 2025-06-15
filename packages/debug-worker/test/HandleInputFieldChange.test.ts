import { test, expect } from '@jest/globals'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleInputFieldChange } from '../src/parts/HandleInputFieldChange/HandleInputFieldChange.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('should update new watch expression', () => {
  const state = createDefaultState()
  const stateWithNewExpression = addWatchExpression(state, '')
  const newState = handleInputFieldChange(stateWithNewExpression, InputName.NewWatchExpression, 'x + y')
  expect(newState.watchExpressions).toHaveLength(1)
  expect(newState.watchExpressions[0]).toEqual({
    expression: 'x + y',
    value: null,
  })
})

test('should not update if name is not new watch expression', () => {
  const state = createDefaultState()
  const stateWithNewExpression = addWatchExpression(state, '')
  const newState = handleInputFieldChange(stateWithNewExpression, 'other-input', 'x + y')
  expect(newState.watchExpressions).toHaveLength(1)
  expect(newState.watchExpressions[0]).toEqual({
    expression: '',
    value: null,
  })
})

test('should not update if last expression is not empty', () => {
  const state = createDefaultState()
  const stateWithExpression = addWatchExpression(state, 'a + b')
  const newState = handleInputFieldChange(stateWithExpression, InputName.NewWatchExpression, 'x + y')
  expect(newState.watchExpressions).toHaveLength(1)
  expect(newState.watchExpressions[0]).toEqual({
    expression: 'a + b',
    value: null,
  })
})
