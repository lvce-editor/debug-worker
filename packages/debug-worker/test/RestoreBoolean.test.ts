import { test, expect } from '@jest/globals'
import { restoreBoolean } from '../src/parts/RestoreBoolean/RestoreBoolean.ts'

test('restoreBoolean returns true when property exists and is true', () => {
  const result = restoreBoolean({ watchExpanded: true }, 'watchExpanded')
  expect(result).toBe(true)
})

test('restoreBoolean returns false when property exists and is false', () => {
  const result = restoreBoolean({ watchExpanded: false }, 'watchExpanded')
  expect(result).toBe(false)
})

test('restoreBoolean returns false when property does not exist', () => {
  const result = restoreBoolean({}, 'watchExpanded')
  expect(result).toBe(false)
})

test('restoreBoolean returns false when property is not a boolean', () => {
  const result = restoreBoolean({ watchExpanded: 'not a boolean' }, 'watchExpanded')
  expect(result).toBe(false)
})

test('restoreBoolean returns false for null input', () => {
  const result = restoreBoolean(null, 'watchExpanded')
  expect(result).toBe(false)
})

test('restoreBoolean returns false for undefined input', () => {
  const result = restoreBoolean(undefined, 'watchExpanded')
  expect(result).toBe(false)
})
