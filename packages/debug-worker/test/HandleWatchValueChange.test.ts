import { test, expect } from '@jest/globals'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleWatchValueChange } from '../src/parts/HandleWatchValueChange/HandleWatchValueChange.ts'

test('should update editingValue', () => {
  const state = createDefaultState()
  const stateWithEditingValue = handleWatchValueChange(state, 'x + y')
  expect(stateWithEditingValue.editingValue).toBe('x + y')
  expect(stateWithEditingValue.watchExpressions).toEqual(state.watchExpressions)
})

test('should not change watchExpressions', () => {
  const state = createDefaultState()
  const stateWithExpression = addWatchExpression(state, 'a + b')
  const stateWithEditingValue = handleWatchValueChange(stateWithExpression, 'x + y')
  expect(stateWithEditingValue.editingValue).toBe('x + y')
  expect(stateWithEditingValue.watchExpressions).toEqual(stateWithExpression.watchExpressions)
})
