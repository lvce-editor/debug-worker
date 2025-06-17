import { test, expect } from '@jest/globals'
import { restoreEditingValue } from '../src/parts/RestoreEditingValue/RestoreEditingValue.ts'

test('restoreEditingValue returns editing value when property exists and is string', () => {
  const result = restoreEditingValue({ editingValue: 'test value' })
  expect(result).toBe('test value')
})

test('restoreEditingValue returns empty string when property does not exist', () => {
  const result = restoreEditingValue({})
  expect(result).toBe('')
})

test('restoreEditingValue returns empty string when property is not a string', () => {
  const result = restoreEditingValue({ editingValue: 123 })
  expect(result).toBe('')
})

test('restoreEditingValue returns empty string for null input', () => {
  const result = restoreEditingValue(null)
  expect(result).toBe('')
})

test('restoreEditingValue returns empty string for undefined input', () => {
  const result = restoreEditingValue(undefined)
  expect(result).toBe('')
})
