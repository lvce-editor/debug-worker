import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { selectNextRow } from '../src/parts/SelectNextRow/SelectNextRow.ts'

test('selectNextRow increments selectedIndex', () => {
  const state = { ...createDefaultState(), selectedIndex: 5 }
  const result = selectNextRow(state)
  expect(result.selectedIndex).toBe(6)
  expect(result).not.toBe(state)
})

test('selectNextRow works from -1', () => {
  const state = { ...createDefaultState(), selectedIndex: -1 }
  const result = selectNextRow(state)
  expect(result.selectedIndex).toBe(0)
})
