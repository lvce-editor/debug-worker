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
    watchExpressions: [
      {
        expression: 'test',
        value: 'value',
        isEditing: false,
      },
    ],
    watchVisible: true,
    watchExpanded: true,
    selectedIndex: 1, // Index 0 is the section heading, index 1 is the watch expression
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
        type: DebugRowType.Value,
        text: 'test',
        expanded: false,
        key: 'value-0',
        value: 'value',
        indent: 0,
        valueType: 'string',
        name: 'test',
        description: 'test',
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
    watchExpressions: [
      {
        expression: 'test',
        value: 'value',
        isEditing: true,
      },
    ],
    selectedIndex: 0,
    visibleRows: [
      {
        type: DebugRowType.WatchExpression,
        text: 'test',
        expanded: false,
        key: 'watch-0',
        value: 'value',
        indent: 0,
        valueType: 'string',
        name: 'test',
        description: 'test',
        index: 0,
      },
    ],
  }

  const result: RunAndDebugState = await handleRename(stateWithEditingWatch)

  // Check that the state is unchanged
  expect(result).toBe(stateWithEditingWatch)
})
