import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { handleRename } from '../src/parts/HandleRename/HandleRename.ts'
import { FocusDebugWatchInput } from '../src/parts/WhenExpression/WhenExpression.ts'

test('handleRename returns the same state', async (): Promise<void> => {
  const state: RunAndDebugState = createDefaultState()
  const result: RunAndDebugState = await handleRename(state)
  expect(result).toBe(state)
})

test('handleRename puts watch expression into edit mode', async (): Promise<void> => {
  const state: RunAndDebugState = createDefaultState()

  // Create a state with a watch expression and focus on it
  const stateWithWatch: RunAndDebugState = {
    ...state,
    selectedIndex: 1, // Index 0 is the section heading, index 1 is the watch expression
    watchExpanded: true,
    watchExpressions: [
      {
        expression: 'test',
        isEditing: false,
        value: 'value',
      },
    ],
    watchVisible: true,
  }

  const result: RunAndDebugState = await handleRename(stateWithWatch)

  // Check that the watch expression is now in edit mode
  expect(result.watchExpressions[0].isEditing).toBe(true)
  expect(result.editingValue).toBe('test')
  expect(result.focus).toBe(FocusDebugWatchInput)
})

test('handleRename does nothing for non-watch expression rows', async (): Promise<void> => {
  const state: RunAndDebugState = createDefaultState()

  // Create a state with a non-watch expression row
  const stateWithOtherRow: RunAndDebugState = {
    ...state,
    selectedIndex: 0,
    visibleRows: [
      {
        description: 'test',
        expanded: false,
        indent: 0,
        index: 0,
        key: 'value-0',
        name: 'test',
        text: 'test',
        type: DebugRowType.Value,
        value: 'value',
        valueType: 'string',
      },
    ],
  }

  const result: RunAndDebugState = await handleRename(stateWithOtherRow)

  // Check that the state is unchanged
  expect(result).toBe(stateWithOtherRow)
})

test('handleRename does nothing for already editing watch expressions', async (): Promise<void> => {
  const state: RunAndDebugState = createDefaultState()

  // Create a state with a watch expression already in edit mode
  const stateWithEditingWatch: RunAndDebugState = {
    ...state,
    selectedIndex: 0,
    visibleRows: [
      {
        description: 'test',
        expanded: false,
        indent: 0,
        index: 0,
        key: 'watch-0',
        name: 'test',
        text: 'test',
        type: DebugRowType.WatchExpression,
        value: 'value',
        valueType: 'string',
      },
    ],
    watchExpressions: [
      {
        expression: 'test',
        isEditing: true,
        value: 'value',
      },
    ],
  }

  const result: RunAndDebugState = await handleRename(stateWithEditingWatch)

  // Check that the state is unchanged
  expect(result).toBe(stateWithEditingWatch)
})
