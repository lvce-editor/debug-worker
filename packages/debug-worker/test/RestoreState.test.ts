import { test, expect } from '@jest/globals'
import { restoreState } from '../src/parts/RestoreState/RestoreState.ts'
import { FocusDebugWatchInput } from '../src/parts/WhenExpression/WhenExpression.ts'

test('restoreState restores watch expressions, focus and editing value', () => {
  const savedState = {
    watchExpressions: [
      {
        expression: 'a + b',
        value: 3,
        isEditing: true,
      },
    ],
    watchExpanded: true,
    scopeExpanded: false,
    breakPointsExpanded: false,
    focus: FocusDebugWatchInput,
    editingValue: 'a + b',
  }
  const result = restoreState(savedState)
  expect(result).toEqual({
    watchExpressions: [
      {
        expression: 'a + b',
        value: 3,
        isEditing: true,
      },
    ],
    watchExpanded: true,
    scopeExpanded: false,
    breakPointsExpanded: false,
    focus: 0, // TODO
    editingValue: 'a + b',
  })
})
