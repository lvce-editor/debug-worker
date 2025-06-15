import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { cancelWatchExpressionEdit } from '../src/parts/CancelWatchExpressionEdit/CancelWatchExpressionEdit.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('should remove empty watch expression', () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithNewExpression = addWatchExpression(state, '')
  const result = cancelWatchExpressionEdit(stateWithNewExpression)
  expect(result.watchExpressions).toHaveLength(0)
})

test('should not remove non-empty watch expressions', () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpressions: RunAndDebugState = {
    ...state,
    watchExpressions: [
      {
        expression: 'x + y',
        value: null,
      },
      {
        expression: '',
        value: null,
        isEditing: true,
      },
    ],
  }

  const result = cancelWatchExpressionEdit(stateWithExpressions)
  expect(result.watchExpressions).toHaveLength(1)
  expect(result.watchExpressions[0]).toEqual({
    expression: 'x + y',
    value: null,
  })
})
