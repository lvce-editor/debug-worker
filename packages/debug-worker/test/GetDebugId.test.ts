import { test, expect } from '@jest/globals'
import { getDebugId } from '../src/parts/GetDebugId/GetDebugId.ts'

test('getDebugId returns test-debug when isTest is true', () => {
  const result = getDebugId(true)
  expect(result).toBe('test-debug')
})

test('getDebugId returns node-debug when isTest is false', () => {
  const result = getDebugId(false)
  expect(result).toBe('node-debug')
})
