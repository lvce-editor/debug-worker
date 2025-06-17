import { test, expect } from '@jest/globals'
import { restoreBreakPointsExpanded } from '../src/parts/RestoreBreakPointsExpanded/RestoreBreakPointsExpanded.ts'

test('restoreBreakPointsExpanded returns true when breakPointsExpanded is true', () => {
  const result = restoreBreakPointsExpanded({ breakPointsExpanded: true })
  expect(result).toBe(true)
})

test('restoreBreakPointsExpanded returns false when breakPointsExpanded is false', () => {
  const result = restoreBreakPointsExpanded({ breakPointsExpanded: false })
  expect(result).toBe(false)
})

test('restoreBreakPointsExpanded returns false when breakPointsExpanded is missing', () => {
  const result = restoreBreakPointsExpanded({})
  expect(result).toBe(false)
})
