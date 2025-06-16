import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { evaluateWatchExpression } from '../src/parts/EvaluateWatchExpression/EvaluateWatchExpression.ts'

test('evaluateWatchExpression', async () => {
  const state = createDefaultState()
  const expression = 'x + y'
  const stateWithExpression = {
    ...state,
    watchExpressions: [
      {
        expression,
        value: null,
        isEditing: false,
      },
    ],
  }
  const result = await evaluateWatchExpression(stateWithExpression, expression)
  expect(result.watchExpressions).toEqual([
    {
      expression,
      value: 'evaluated result',
      isEditing: false,
    },
  ])
})
