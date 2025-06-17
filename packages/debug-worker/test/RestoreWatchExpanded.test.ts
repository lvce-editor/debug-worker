import { test, expect } from '@jest/globals'
import { restoreWatchExpanded } from '../src/parts/RestoreWatchExpanded/RestoreWatchExpanded.ts'

test('restoreWatchExpanded returns true when watchExpanded is true', () => {
  const result = restoreWatchExpanded({ watchExpanded: true })
  expect(result).toBe(true)
})

test('restoreWatchExpanded returns false when watchExpanded is false', () => {
  const result = restoreWatchExpanded({ watchExpanded: false })
  expect(result).toBe(false)
})

test('restoreWatchExpanded returns false when watchExpanded is missing', () => {
  const result = restoreWatchExpanded({})
  expect(result).toBe(false)
})
