import { test, expect } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { selectNextRow } from '../src/parts/SelectNextRow/SelectNextRow.ts'

test('selectNextRow increments selectedIndex', () => {
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
  const state = { ...createDefaultState(), selectedIndex: 5, visibleRows: [mockRow, mockRow, mockRow, mockRow, mockRow, mockRow, mockRow] }
  const result = selectNextRow(state)
  expect(result.selectedIndex).toBe(6)
  expect(result).not.toBe(state)
})

test('selectNextRow works from -1', () => {
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
  const result = selectNextRow(state)
  expect(result.selectedIndex).toBe(0)
})

test('selectNextRow does not exceed max index', () => {
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
  const state = { ...createDefaultState(), selectedIndex: 1, visibleRows: [mockRow, mockRow] } // max index 1
  const result = selectNextRow(state)
  expect(result.selectedIndex).toBe(1) // stays at max
})
