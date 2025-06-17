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
    watchExpressions: [
      {
        expression: 'a + b',
        value: 3,
        isEditing: true,
      },
    ],
    focus: FocusDebugWatchInput,
    editingValue: 'a + b',
    inputSource: 1,
  }
  RunAndDebugStates.set(id, state, state)
  const result = saveState(id, SaveStateReasonHotReload)
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
    inputSource: 1,
  })
})

test('saveState with window reload resets focus and editing state', () => {
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
    inputSource: 1,
  }
  RunAndDebugStates.set(id, state, state)
  const result = saveState(id, SaveStateReasonWindowReload)
  expect(result).toEqual({
    watchExpressions: [
      {
        expression: 'a + b',
        value: 3,
        isEditing: false,
      },
    ],
    breakPointsExpanded: false,
    scopeExpanded: false,
    watchExpanded: false,
    focus: 0,
    editingValue: '',
    inputSource: 0,
  })
})

test('saveState preserves expanded states in both cases', () => {
  const id = 1
  const state: RunAndDebugState = {
    ...createDefaultState(),
    watchExpanded: true,
    scopeExpanded: true,
    breakPointsExpanded: true,
  }
  RunAndDebugStates.set(id, state, state)

  const hotReloadResult = saveState(id, SaveStateReasonHotReload)
  expect(hotReloadResult).toEqual({
    watchExpressions: [],
    breakPointsExpanded: true,
    scopeExpanded: true,
    watchExpanded: true,
    focus: 0,
    editingValue: '',
    inputSource: 0,
  })

  const windowReloadResult = saveState(id, SaveStateReasonWindowReload)
  expect(windowReloadResult).toEqual({
    watchExpressions: [],
    breakPointsExpanded: true,
    scopeExpanded: true,
    watchExpanded: true,
    focus: 0,
    editingValue: '',
    inputSource: 0,
  })
})

test('saveState handles multiple watch expressions correctly', () => {
  const id = 1
  const state: RunAndDebugState = {
    ...createDefaultState(),
    watchExpressions: [
      {
        expression: 'a + b',
        value: 3,
        isEditing: true,
      },
      {
        expression: 'c * d',
        value: 12,
        isEditing: false,
      },
    ],
  }
  RunAndDebugStates.set(id, state, state)

  const hotReloadResult = saveState(id, SaveStateReasonHotReload)
  expect(hotReloadResult.watchExpressions).toEqual([
    {
      expression: 'a + b',
      value: 3,
      isEditing: true,
    },
    {
      expression: 'c * d',
      value: 12,
      isEditing: false,
    },
  ])

  const windowReloadResult = saveState(id, SaveStateReasonWindowReload)
  expect(windowReloadResult.watchExpressions).toEqual([
    {
      expression: 'a + b',
      value: 3,
      isEditing: false,
    },
    {
      expression: 'c * d',
      value: 12,
      isEditing: false,
    },
  ])
})
