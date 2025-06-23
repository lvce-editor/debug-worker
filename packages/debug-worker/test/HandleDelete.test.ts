import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleDelete } from '../src/parts/HandleDelete/HandleDelete.ts'
import { updateVisibleRows } from '../src/parts/UpdateVisibleRows/UpdateVisibleRows.ts'

test('handleDelete removes watch expression at current index', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpressions: RunAndDebugState = {
    ...state,
    watchExpressions: [
      { expression: 'x', value: 42, isEditing: false },
      { expression: 'y', value: 'test', isEditing: false },
    ],
    watchExpanded: true,
  }
  const stateWithVisibleRows: RunAndDebugState = updateVisibleRows(stateWithExpressions)
  const stateWithSelectedIndex: RunAndDebugState = {
    ...stateWithVisibleRows,
    selectedIndex: 2, // Index of the second watch expression in visible rows
  }

  const result = await handleDelete(stateWithSelectedIndex)

  expect(result.watchExpressions).toHaveLength(1)
  expect(result.watchExpressions[0].expression).toBe('x')
})

test('handleDelete does nothing when current row is not a watch expression', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpandedWatch: RunAndDebugState = {
    ...state,
    watchExpanded: true,
    selectedIndex: 0, // Index of the section heading
  }

  const result = await handleDelete(stateWithExpandedWatch)

  expect(result).toBe(stateWithExpandedWatch)
})

test('handleDelete does nothing when selected index is out of bounds', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpandedWatch: RunAndDebugState = {
    ...state,
    watchExpanded: true,
    selectedIndex: 999, // Out of bounds index
  }

  const result = await handleDelete(stateWithExpandedWatch)

  expect(result).toBe(stateWithExpandedWatch)
})

test('handleDelete does nothing when no watch expressions exist', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpandedWatch: RunAndDebugState = {
    ...state,
    watchExpanded: true,
    selectedIndex: 1, // Index where a watch expression would be if it existed
  }

  const result = await handleDelete(stateWithExpandedWatch)

  expect(result).toBe(stateWithExpandedWatch)
})
