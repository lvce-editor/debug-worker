import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { acceptWatchExpressionEdit } from '../src/parts/AcceptWatchExpressionEdit/AcceptWatchExpressionEdit.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('should return state unchanged if no expression is being edited', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await acceptWatchExpressionEdit(state)
  expect(result).toEqual(state)
})

test('should remove watch expression when editing value is empty', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithEditingExpression: RunAndDebugState = {
    ...state,
    watchExpressions: [
      {
        expression: 'old',
        value: null,
        isEditing: true,
      },
    ],
  }
  const result = await acceptWatchExpressionEdit(stateWithEditingExpression)
  expect(result.watchExpressions).toHaveLength(0)
  expect(result.focus).toBe(1299)
})

test('should update watch expression with editing value and reset focus', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithEditingExpression: RunAndDebugState = {
    ...state,
    watchExpressions: [
      {
        expression: 'old',
        value: null,
        isEditing: true,
      },
    ],
    editingValue: 'x + y',
  }
  const result = await acceptWatchExpressionEdit(stateWithEditingExpression)
  expect(result.watchExpressions).toHaveLength(1)
  expect(result.watchExpressions[0]).toEqual({
    expression: 'x + y',
    value: null,
    isEditing: false,
  })
  expect(result.focus).toBe(1299)
})

test('should update correct watch expression when multiple exist', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithMultipleExpressions: RunAndDebugState = {
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
    editingValue: 'updated',
  }
  const result = await acceptWatchExpressionEdit(stateWithMultipleExpressions)
  expect(result.watchExpressions).toHaveLength(3)
  expect(result.watchExpressions[1]).toEqual({
    expression: 'updated',
    value: null,
    isEditing: false,
  })
  expect(result.focus).toBe(1299)
})
