import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { WatchExpressionInput } from '../src/parts/InputName/InputName.ts'
import { renderInputValue } from '../src/parts/RenderInputValue/RenderInputValue.ts'
import { FocusDebugWatchInput } from '../src/parts/WhenExpression/WhenExpression.ts'

test('should return empty selector when no focus', () => {
  const oldState = createDefaultState()
  const newState: RunAndDebugState = {
    ...createDefaultState(),
    id: 1,
    editingValue: 'test-value',
    focus: 0,
  }

  const result = renderInputValue(oldState, newState)

  expect(result).toEqual(['Viewlet.setValueByName', 1, '', 'test-value'])
})

test('should return selector when focus exists', () => {
  const oldState = createDefaultState()
  const newState: RunAndDebugState = {
    ...createDefaultState(),
    id: 1,
    editingValue: 'test-value',
    focus: FocusDebugWatchInput,
  }

  const result = renderInputValue(oldState, newState)

  expect(result).toEqual(['Viewlet.setValueByName', 1, WatchExpressionInput, 'test-value'])
})
