import { test, expect } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { selectLastIndex } from '../src/parts/SelectLastIndex/SelectLastIndex.ts'

test('selectLastIndex sets selectedIndex to last index', () => {
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
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: 0, visibleRows: [mockRow, mockRow, mockRow, mockRow, mockRow, mockRow] }
  const result = selectLastIndex(state)
  expect(result.selectedIndex).toBe(5)
  expect(result).not.toBe(state)
})

test('selectLastIndex works from -1', () => {
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
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: -1, visibleRows: [mockRow, mockRow] }
  const result = selectLastIndex(state)
  expect(result.selectedIndex).toBe(1)
})

test('selectLastIndex works from middle index', () => {
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
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: 2, visibleRows: [mockRow, mockRow, mockRow, mockRow, mockRow] }
  const result = selectLastIndex(state)
  expect(result.selectedIndex).toBe(4)
})

test('selectLastIndex handles single row', () => {
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
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: 0, visibleRows: [mockRow] }
  const result = selectLastIndex(state)
  expect(result.selectedIndex).toBe(0)
})

test('selectLastIndex handles empty visibleRows array', () => {
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: 5, visibleRows: [] }
  const result = selectLastIndex(state)
  expect(result.selectedIndex).toBe(-1)
})

test('selectLastIndex returns new state object', () => {
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
  const state: RunAndDebugState = { ...createDefaultState(), visibleRows: [mockRow, mockRow] }
  const result = selectLastIndex(state)
  expect(result).not.toBe(state)
})
