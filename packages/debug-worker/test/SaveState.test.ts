import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RunAndDebugStates from '../src/parts/RunAndDebugStates/RunAndDebugStates.ts'
import { saveState } from '../src/parts/SaveState/SaveState.ts'
import { SaveStateReasonHotReload, SaveStateReasonWindowReload } from '../src/parts/SaveStateReason/SaveStateReason.ts'
import { FocusDebugWatchInput } from '../src/parts/WhenExpression/WhenExpression.ts'

test('saveState with hot reload preserves all state including focus and editing', () => {
  const id = 1
  const state: RunAndDebugState = {
    ...createDefaultState(),
    editingValue: 'a + b',
    focus: FocusDebugWatchInput,
    inputSource: 1,
    watchExpressions: [
      {
        expression: 'a + b',
        isEditing: true,
        value: 3,
      },
    ],
  }
  RunAndDebugStates.set(id, state, state)
  const result = saveState(id, SaveStateReasonHotReload)
  expect(result).toEqual({
    breakPointsExpanded: false,
    editingValue: 'a + b',
    focus: FocusDebugWatchInput,
    inputSource: 1,
    scopeExpanded: false,
    watchExpanded: false,
    watchExpressions: [
      {
        expression: 'a + b',
        isEditing: true,
        value: 3,
      },
    ],
  })
})

test('saveState with window reload resets focus and editing state', () => {
  const id = 1
  const state: RunAndDebugState = {
    ...createDefaultState(),
    editingValue: 'a + b',
    focus: FocusDebugWatchInput,
    inputSource: 1,
    watchExpressions: [
      {
        expression: 'a + b',
        isEditing: true,
        value: 3,
      },
    ],
  }
  RunAndDebugStates.set(id, state, state)
  const result = saveState(id, SaveStateReasonWindowReload)
  expect(result).toEqual({
    breakPointsExpanded: false,
    editingValue: '',
    focus: 0,
    inputSource: 0,
    scopeExpanded: false,
    watchExpanded: false,
    watchExpressions: [
      {
        expression: 'a + b',
        isEditing: false,
        value: 3,
      },
    ],
  })
})

test('saveState preserves expanded states in both cases', () => {
  const id = 1
  const state: RunAndDebugState = {
    ...createDefaultState(),
    breakPointsExpanded: true,
    scopeExpanded: true,
    watchExpanded: true,
  }
  RunAndDebugStates.set(id, state, state)

  const hotReloadResult = saveState(id, SaveStateReasonHotReload)
  expect(hotReloadResult).toEqual({
    breakPointsExpanded: true,
    editingValue: '',
    focus: 0,
    inputSource: 0,
    scopeExpanded: true,
    watchExpanded: true,
    watchExpressions: [],
  })

  const windowReloadResult = saveState(id, SaveStateReasonWindowReload)
  expect(windowReloadResult).toEqual({
    breakPointsExpanded: true,
    editingValue: '',
    focus: 0,
    inputSource: 0,
    scopeExpanded: true,
    watchExpanded: true,
    watchExpressions: [],
  })
})

test('saveState handles multiple watch expressions correctly', () => {
  const id = 1
  const state: RunAndDebugState = {
    ...createDefaultState(),
    watchExpressions: [
      {
        expression: 'a + b',
        isEditing: true,
        value: 3,
      },
      {
        expression: 'c * d',
        isEditing: false,
        value: 12,
      },
    ],
  }
  RunAndDebugStates.set(id, state, state)

  const hotReloadResult = saveState(id, SaveStateReasonHotReload)
  expect(hotReloadResult.watchExpressions).toEqual([
    {
      expression: 'a + b',
      isEditing: true,
      value: 3,
    },
    {
      expression: 'c * d',
      isEditing: false,
      value: 12,
    },
  ])

  const windowReloadResult = saveState(id, SaveStateReasonWindowReload)
  expect(windowReloadResult.watchExpressions).toEqual([
    {
      expression: 'a + b',
      isEditing: false,
      value: 3,
    },
    {
      expression: 'c * d',
      isEditing: false,
      value: 12,
    },
  ])
})
