import { test, expect } from '@jest/globals'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleInputFieldChange } from '../src/parts/HandleInputFieldChange/HandleInputFieldChange.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('should update new watch expression', () => {
  const state = createDefaultState()
  const stateWithNewExpression = addWatchExpression(state, '')
  const newState = handleInputFieldChange(stateWithNewExpression, InputName.WatchExpressionInput, 'x + y')
  expect(newState.editingValue).toBe('x + y')
})

test('should not update if name is not new watch expression', () => {
  const state = createDefaultState()
  const stateWithNewExpression = addWatchExpression(state, '')
  const newState = handleInputFieldChange(stateWithNewExpression, 'other-input', 'x + y')
  expect(newState.editingValue).toBe('')
})
