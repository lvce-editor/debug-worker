import { test, expect } from '@jest/globals'
import { getNoopRows } from '../src/parts/ScopeRenderers/GetNoopRows.ts'

test('getNoopRows', () => {
  const result = getNoopRows()
  expect(result).toEqual([])
})
