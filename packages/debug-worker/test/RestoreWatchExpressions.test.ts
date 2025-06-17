import { test, expect } from '@jest/globals'
import type { WatchExpression } from '../src/parts/WatchExpression/WatchExpression.ts'
import { restoreWatchExpressions } from '../src/parts/RestoreWatchExpressions/RestoreWatchExpressions.ts'

test('restoreWatchExpressions with empty object returns empty array', () => {
  const result = restoreWatchExpressions({})
  expect(result).toEqual([])
})

test('restoreWatchExpressions with non-array watchExpressions returns empty array', () => {
  const result = restoreWatchExpressions({ watchExpressions: 'not an array' })
  expect(result).toEqual([])
})

test('restoreWatchExpressions with array of expressions returns restored expressions', () => {
  const input = {
    watchExpressions: ['x + y', 'foo.bar', 42],
  }
  const expected: readonly WatchExpression[] = [
    {
      value: '',
      expression: 'x + y',
      isEditing: false,
    },
    {
      value: '',
      expression: 'foo.bar',
      isEditing: false,
    },
    {
      value: '',
      expression: '42',
      isEditing: false,
    },
  ]
  const result = restoreWatchExpressions(input)
  expect(result).toEqual(expected)
})

test('restoreWatchExpressions with null returns empty array', () => {
  const result = restoreWatchExpressions(null)
  expect(result).toEqual([])
})

test('restoreWatchExpressions with undefined returns empty array', () => {
  const result = restoreWatchExpressions(undefined)
  expect(result).toEqual([])
})
