import { test, expect } from '@jest/globals'
import { restoreScopeExpanded } from '../src/parts/RestoreScopeExpanded/RestoreScopeExpanded.ts'

test('restoreScopeExpanded returns true when scopeExpanded is true', () => {
  const result = restoreScopeExpanded({ scopeExpanded: true })
  expect(result).toBe(true)
})

test('restoreScopeExpanded returns false when scopeExpanded is false', () => {
  const result = restoreScopeExpanded({ scopeExpanded: false })
  expect(result).toBe(false)
})

test('restoreScopeExpanded returns false when scopeExpanded is missing', () => {
  const result = restoreScopeExpanded({})
  expect(result).toBe(false)
})
