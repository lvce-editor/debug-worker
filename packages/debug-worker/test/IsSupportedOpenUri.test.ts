import { test, expect } from '@jest/globals'
import { isSupportedOpenUri } from '../src/parts/IsSupportedOpenUri/IsSupportedOpenUri.ts'

test('isSupportedOpenUri', () => {
  expect(isSupportedOpenUri('file:///test.js')).toBe(true)
  expect(isSupportedOpenUri('file://test.js')).toBe(true)
  expect(isSupportedOpenUri('http://test.js')).toBe(false)
  expect(isSupportedOpenUri('https://test.js')).toBe(false)
  expect(isSupportedOpenUri('')).toBe(false)
})
