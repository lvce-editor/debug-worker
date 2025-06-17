import { test, expect } from '@jest/globals'
import { getFocusSelector } from '../src/parts/GetFocusSelector/GetFocusSelector.ts'
import { WatchExpressionInput } from '../src/parts/InputName/InputName.ts'
import { FocusDebugWatchInput } from '../src/parts/WhenExpression/WhenExpression.ts'

test('returns WatchExpressionInput for FocusDebugWatchInput', () => {
  expect(getFocusSelector(FocusDebugWatchInput)).toBe(WatchExpressionInput)
})

test('returns empty string for unknown focus id', () => {
  expect(getFocusSelector(0)).toBe('')
  expect(getFocusSelector(-1)).toBe('')
  expect(getFocusSelector(999)).toBe('')
})
