import { test, expect } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { selectNextRow } from '../src/parts/SelectNextRow/SelectNextRow.ts'

test('selectNextRow increments selectedIndex', () => {
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
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: 5, visibleRows: [mockRow, mockRow, mockRow, mockRow, mockRow, mockRow, mockRow] }
  const result = selectNextRow(state)
  expect(result.selectedIndex).toBe(6)
  expect(result).not.toBe(state)
})

test('selectNextRow works from -1', () => {
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
  const result = selectNextRow(state)
  expect(result.selectedIndex).toBe(0)
})

test('selectNextRow does not exceed max index', () => {
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
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: 1, visibleRows: [mockRow, mockRow] } // max index 1
  const result = selectNextRow(state)
  expect(result.selectedIndex).toBe(1) // stays at max
})

test('selectNextRow handles empty visibleRows array', () => {
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: 0, visibleRows: [] }
  const result = selectNextRow(state)
  expect(result.selectedIndex).toBe(-1)
})

test('selectNextRow handles negative selectedIndex input', () => {
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
  const result = selectNextRow(state)
  expect(result.selectedIndex).toBe(-1)
})

test('selectNextRow handles selectedIndex beyond array bounds', () => {
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
  const result = selectNextRow(state)
  expect(result.selectedIndex).toBe(1)
})

test('selectNextRow stays at max when already at max', () => {
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
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: 1, visibleRows: [mockRow, mockRow] }
  const result = selectNextRow(state)
  expect(result.selectedIndex).toBe(1)
})
