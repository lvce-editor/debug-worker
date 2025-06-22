import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { handleDelete } from '../src/parts/HandleDelete/HandleDelete.ts'
import { updateVisibleRows } from '../src/parts/UpdateVisibleRows/UpdateVisibleRows.ts'

test('handleDelete removes watch expression at current index', async () => {
  const state = createDefaultState()
  const stateWithExpressions = {
    ...state,
    watchExpressions: [
      { expression: 'x', value: 42, isEditing: false },
      { expression: 'y', value: 'test', isEditing: false },
    ],
    watchExpanded: true,
  }
  const stateWithVisibleRows = updateVisibleRows(stateWithExpressions)
  const stateWithSelectedIndex = {
    ...stateWithVisibleRows,
    selectedIndex: 2, // Index of the second watch expression in visible rows
  }

  const result = await handleDelete(stateWithSelectedIndex)

  expect(result.watchExpressions).toHaveLength(1)
  expect(result.watchExpressions[0].expression).toBe('x')
})

test('handleDelete does nothing when current row is not a watch expression', async () => {
  const state = createDefaultState()
  const stateWithExpandedWatch = {
    ...state,
    watchExpanded: true,
    selectedIndex: 0, // Index of the section heading
  }

  const result = await handleDelete(stateWithExpandedWatch)

  expect(result).toBe(stateWithExpandedWatch)
})

test('handleDelete does nothing when selected index is out of bounds', async () => {
  const state = createDefaultState()
  const stateWithExpandedWatch = {
    ...state,
    watchExpanded: true,
    selectedIndex: 999, // Out of bounds index
  }

  const result = await handleDelete(stateWithExpandedWatch)

  expect(result).toBe(stateWithExpandedWatch)
})

test('handleDelete does nothing when no watch expressions exist', async () => {
  const state = createDefaultState()
  const stateWithExpandedWatch = {
    ...state,
    watchExpanded: true,
    selectedIndex: 1, // Index where a watch expression would be if it existed
  }

  const result = await handleDelete(stateWithExpandedWatch)

  expect(result).toBe(stateWithExpandedWatch)
})
