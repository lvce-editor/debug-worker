import { test, expect } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { selectFirstIndex } from '../src/parts/SelectFirstIndex/SelectFirstIndex.ts'

test('selectFirstIndex sets selectedIndex to 0', () => {
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
  const result = selectFirstIndex(state)
  expect(result.selectedIndex).toBe(0)
  expect(result).not.toBe(state)
})

test('selectFirstIndex works from -1', () => {
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
  const result = selectFirstIndex(state)
  expect(result.selectedIndex).toBe(0)
})

test('selectFirstIndex works from middle index', () => {
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
  const state = { ...createDefaultState(), selectedIndex: 2, visibleRows: [mockRow, mockRow, mockRow, mockRow, mockRow] }
  const result = selectFirstIndex(state)
  expect(result.selectedIndex).toBe(0)
})

test('selectFirstIndex handles single row', () => {
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
  const state = { ...createDefaultState(), selectedIndex: 0, visibleRows: [mockRow] }
  const result = selectFirstIndex(state)
  expect(result.selectedIndex).toBe(0)
})

test('selectFirstIndex handles empty visibleRows array', () => {
  const state = { ...createDefaultState(), selectedIndex: 5, visibleRows: [] }
  const result = selectFirstIndex(state)
  expect(result.selectedIndex).toBe(-1)
})

test('selectFirstIndex returns new state object', () => {
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
  const state = { ...createDefaultState(), visibleRows: [mockRow, mockRow] }
  const result = selectFirstIndex(state)
  expect(result).not.toBe(state)
})
