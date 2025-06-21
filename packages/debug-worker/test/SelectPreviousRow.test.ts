import { test, expect } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { selectPreviousRow } from '../src/parts/SelectPreviousRow/SelectPreviousRow.ts'

test('selectPreviousRow decrements selectedIndex', () => {
  const mockRow: DebugRow = {
    type: 1,
    text: 'test',
    expanded: false,
    key: 'test',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: '',
  }
  const state = { ...createDefaultState(), selectedIndex: 5, visibleRows: [mockRow, mockRow, mockRow, mockRow, mockRow, mockRow] }
  const result = selectPreviousRow(state)
  expect(result.selectedIndex).toBe(4)
  expect(result).not.toBe(state)
})

test('selectPreviousRow does not go below -1', () => {
  const mockRow: DebugRow = {
    type: 1,
    text: 'test',
    expanded: false,
    key: 'test',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: '',
  }
  const state = { ...createDefaultState(), selectedIndex: 0, visibleRows: [mockRow, mockRow] }
  const result = selectPreviousRow(state)
  expect(result.selectedIndex).toBe(-1)
})

test('selectPreviousRow stays at -1 when already at -1', () => {
  const mockRow: DebugRow = {
    type: 1,
    text: 'test',
    expanded: false,
    key: 'test',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: '',
  }
  const state = { ...createDefaultState(), selectedIndex: -1, visibleRows: [mockRow, mockRow] }
  const result = selectPreviousRow(state)
  expect(result.selectedIndex).toBe(-1)
})
