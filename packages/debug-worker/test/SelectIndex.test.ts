import { test, expect } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { selectIndex } from '../src/parts/SelectIndex/SelectIndex.ts'

test('selectIndex updates selectedIndex', () => {
  const mockRow = {
    type: 1,
    text: 'test',
    expanded: false,
    key: 'test',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: '',
    index: 0,
  }
  const state = { ...createDefaultState(), visibleRows: [mockRow, mockRow, mockRow, mockRow, mockRow, mockRow] }
  const result = selectIndex(state, 5)
  expect(result.selectedIndex).toBe(5)
  expect(result).not.toBe(state)
})

test('selectIndex returns new state object', () => {
  const state = createDefaultState()
  const result = selectIndex(state, 3)
  expect(result).not.toBe(state)
})

test('selectIndex updates selectedIndex within bounds', () => {
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
    index: 0,
  }
  const state = { ...createDefaultState(), visibleRows: [mockRow, mockRow, mockRow] } // 3 rows
  const result = selectIndex(state, 1)
  expect(result.selectedIndex).toBe(1)
  expect(result).not.toBe(state)
})

test('selectIndex clamps to max index', () => {
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
    index: 0,
  }
  const state = { ...createDefaultState(), visibleRows: [mockRow, mockRow] } // 2 rows, max index 1
  const result = selectIndex(state, 5)
  expect(result.selectedIndex).toBe(1)
})

test('selectIndex clamps to -1 for negative values', () => {
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
    index: 0,
  }
  const state = { ...createDefaultState(), visibleRows: [mockRow, mockRow] }
  const result = selectIndex(state, -5)
  expect(result.selectedIndex).toBe(-1)
})

test('selectIndex handles empty rows', () => {
  const state = { ...createDefaultState(), visibleRows: [] }
  const result = selectIndex(state, 5)
  expect(result.selectedIndex).toBe(-1)
})
