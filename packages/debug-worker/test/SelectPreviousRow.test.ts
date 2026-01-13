import { test, expect } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { selectPreviousRow } from '../src/parts/SelectPreviousRow/SelectPreviousRow.ts'

test('selectPreviousRow decrements selectedIndex', () => {
  const mockRow: DebugRow = {
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: 'test',
    name: '',
    text: 'test',
    type: 1,
    value: '',
    valueType: '',
  }
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: 5, visibleRows: [mockRow, mockRow, mockRow, mockRow, mockRow, mockRow] }
  const result = selectPreviousRow(state)
  expect(result.selectedIndex).toBe(4)
  expect(result).not.toBe(state)
})

test('selectPreviousRow does not go below -1', () => {
  const mockRow: DebugRow = {
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: 'test',
    name: '',
    text: 'test',
    type: 1,
    value: '',
    valueType: '',
  }
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: 0, visibleRows: [mockRow, mockRow] }
  const result = selectPreviousRow(state)
  expect(result.selectedIndex).toBe(0)
})

test('selectPreviousRow stays at -1 when already at -1', () => {
  const mockRow: DebugRow = {
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: 'test',
    name: '',
    text: 'test',
    type: 1,
    value: '',
    valueType: '',
  }
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: -1, visibleRows: [mockRow, mockRow] }
  const result = selectPreviousRow(state)
  expect(result.selectedIndex).toBe(-1)
})

test('selectPreviousRow handles empty visibleRows array', () => {
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: 0, visibleRows: [] }
  const result = selectPreviousRow(state)
  expect(result.selectedIndex).toBe(0)
})

test('selectPreviousRow handles negative selectedIndex input', () => {
  const mockRow: DebugRow = {
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: 'test',
    name: '',
    text: 'test',
    type: 1,
    value: '',
    valueType: '',
  }
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: -5, visibleRows: [mockRow, mockRow] }
  const result = selectPreviousRow(state)
  expect(result.selectedIndex).toBe(-1)
})

test('selectPreviousRow handles selectedIndex beyond array bounds', () => {
  const mockRow: DebugRow = {
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: 'test',
    name: '',
    text: 'test',
    type: 1,
    value: '',
    valueType: '',
  }
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: 10, visibleRows: [mockRow, mockRow] }
  const result = selectPreviousRow(state)
  expect(result.selectedIndex).toBe(1)
})
