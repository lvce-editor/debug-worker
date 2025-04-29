import { test, expect } from '@jest/globals'
import { saveState } from '../src/parts/SaveState/SaveState.ts'

test('saveState returns correct state', () => {
  const result = saveState(1)
  expect(result).toEqual({
    x: 1,
  })
})
