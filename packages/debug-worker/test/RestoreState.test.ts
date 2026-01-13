import { test, expect } from '@jest/globals'
import { restoreState } from '../src/parts/RestoreState/RestoreState.ts'
import { FocusDebugWatchInput } from '../src/parts/WhenExpression/WhenExpression.ts'

test('restoreState restores watch expressions, focus and editing value', () => {
  const savedState = {
    breakPointsExpanded: false,
    editingValue: 'a + b',
    focus: FocusDebugWatchInput,
    scopeExpanded: false,
    watchExpanded: true,
    watchExpressions: [
      {
        expression: 'a + b',
        isEditing: true,
        value: 3,
      },
    ],
  }
  const result = restoreState(savedState)
  expect(result).toEqual({
    breakPointsExpanded: false,
    editingValue: 'a + b',
    focus: 0, // TODO
    scopeExpanded: false,
    watchExpanded: true,
    watchExpressions: [
      {
        expression: 'a + b',
        isEditing: true,
        value: 3,
      },
    ],
  })
})
