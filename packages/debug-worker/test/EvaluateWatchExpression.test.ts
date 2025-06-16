import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { evaluateWatchExpression } from '../src/parts/EvaluateWatchExpression/EvaluateWatchExpression.ts'
import { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'

test('evaluateWatchExpression', async () => {
  const state: RunAndDebugState = createDefaultState()
  const expression = 'x + y'
  const stateWithExpression: RunAndDebugState = {
    ...state,
    watchExpressions: [
      {
        expression,
        value: null,
        isEditing: false,
      },
    ],
    debugId: 123,
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
