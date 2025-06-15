import { test, expect } from '@jest/globals'
import { formatLocation } from '../src/parts/FormatLocation/FormatLocation.ts'

test('formatLocation', () => {
  expect(formatLocation('test.js', 0, 0)).toBe('test.js:1')
  expect(formatLocation('test.js', 1, 0)).toBe('test.js:2')
  expect(formatLocation('/path/to/test.js', 0, 0)).toBe('test.js:1')
  expect(formatLocation('/path/to/test.js', 1, 0)).toBe('test.js:2')
  expect(formatLocation('test.js', 9, 0)).toBe('test.js:10')
  expect(formatLocation('/test.js', 0, 0)).toBe('test.js:1')
})
