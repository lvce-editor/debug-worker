import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { selectPreviousRow } from '../src/parts/SelectPreviousRow/SelectPreviousRow.ts'

test('selectPreviousRow decrements selectedIndex', () => {
  const state = { ...createDefaultState(), selectedIndex: 5 }
  const result = selectPreviousRow(state)
  expect(result.selectedIndex).toBe(4)
  expect(result).not.toBe(state)
})

test('selectPreviousRow does not go below -1', () => {
  const state = { ...createDefaultState(), selectedIndex: 0 }
  const result = selectPreviousRow(state)
  expect(result.selectedIndex).toBe(-1)
})

test('selectPreviousRow stays at -1 when already at -1', () => {
  const state = { ...createDefaultState(), selectedIndex: -1 }
  const result = selectPreviousRow(state)
  expect(result.selectedIndex).toBe(-1)
})
