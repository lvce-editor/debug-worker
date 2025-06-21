import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { selectIndex } from '../src/parts/SelectIndex/SelectIndex.ts'

test('selectIndex updates selectedIndex', () => {
  const state = createDefaultState()
  const result = selectIndex(state, 5)
  expect(result.selectedIndex).toBe(5)
  expect(result).not.toBe(state)
})

test('selectIndex returns new state object', () => {
  const state = createDefaultState()
  const result = selectIndex(state, 3)
  expect(result).not.toBe(state)
})
