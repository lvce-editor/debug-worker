import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RunAndDebugStates from '../src/parts/RunAndDebugStates/RunAndDebugStates.ts'
import { saveState } from '../src/parts/SaveState/SaveState.ts'
import { FocusDebugWatchInput } from '../src/parts/WhenExpression/WhenExpression.ts'

test('saveState returns correct state', () => {
  const id = 1
  const state: RunAndDebugState = {
    ...createDefaultState(),
    watchExpressions: [
      {
        expression: 'a + b',
        value: 3,
        isEditing: true,
      },
    ],
    focus: FocusDebugWatchInput,
    editingValue: 'a + b',
  }
  RunAndDebugStates.set(id, state, state)
  const result = saveState(id)
  expect(result).toEqual({
    watchExpressions: [
      {
        expression: 'a + b',
        value: 3,
        isEditing: true,
      },
    ],
    breakPointsExpanded: false,
    scopeExpanded: false,
    watchExpanded: false,
    focus: FocusDebugWatchInput,
    editingValue: 'a + b',
  })
})
