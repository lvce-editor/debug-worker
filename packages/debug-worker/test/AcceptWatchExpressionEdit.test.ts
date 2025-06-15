import { test, expect } from '@jest/globals'
import { acceptWatchExpressionEdit } from '../src/parts/AcceptWatchExpressionEdit/AcceptWatchExpressionEdit.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('should return state unchanged if no expression is being edited', () => {
  const state = createDefaultState()
  const result = acceptWatchExpressionEdit(state, 'x + y')
  expect(result).toBe(state)
})

test('should remove watch expression when editing value is empty', () => {
  const state = createDefaultState()
  const stateWithEditingExpression = {
    ...state,
    watchExpressions: [
      {
        expression: 'old',
        value: null,
        isEditing: true,
      },
    ],
  }
  const result = acceptWatchExpressionEdit(stateWithEditingExpression, '')
  expect(result.watchExpressions).toHaveLength(0)
  expect(result.focus).toBe(0)
})

test('should update watch expression with editing value and reset focus', () => {
  const state = createDefaultState()
  const stateWithEditingExpression = {
    ...state,
    watchExpressions: [
      {
        expression: 'old',
        value: null,
        isEditing: true,
      },
    ],
  }
  const result = acceptWatchExpressionEdit(stateWithEditingExpression, 'x + y')
  expect(result.watchExpressions).toHaveLength(1)
  expect(result.watchExpressions[0]).toEqual({
    expression: 'x + y',
    value: null,
    isEditing: false,
  })
  expect(result.focus).toBe(0)
})

test('should update correct watch expression when multiple exist', () => {
  const state = createDefaultState()
  const stateWithMultipleExpressions = {
    ...state,
    watchExpressions: [
      {
        expression: 'first',
        value: null,
        isEditing: false,
      },
      {
        expression: 'second',
        value: null,
        isEditing: true,
      },
      {
        expression: 'third',
        value: null,
        isEditing: false,
      },
    ],
  }
  const result = acceptWatchExpressionEdit(stateWithMultipleExpressions, 'updated')
  expect(result.watchExpressions).toHaveLength(3)
  expect(result.watchExpressions[1]).toEqual({
    expression: 'updated',
    value: null,
    isEditing: false,
  })
  expect(result.focus).toBe(0)
})
