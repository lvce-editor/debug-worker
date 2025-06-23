import { expect, test } from '@jest/globals'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { handleNew } from '../src/parts/HandleNew/HandleNew.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import { updateVisibleRows } from '../src/parts/UpdateVisibleRows/UpdateVisibleRows.ts'

test('handleNew returns state unchanged when selected row is not a watch expression', async () => {
  const state = createDefaultState()
  const result = await handleNew(state)
  expect(result).toBe(state)
})

test.skip('handleNew calls addWatchExpression when selected row is a watch expression', async () => {
  const state = createDefaultState()
  const stateWithWatchExpression = await addWatchExpression(state, 'x + y')
  // Expand the watch section so the watch expression row is visible
  const expandedState = updateVisibleRows({
    ...stateWithWatchExpression,
    watchExpanded: true,
  })
  const updatedState = updateVisibleRows(expandedState)
  const rows = updatedState.visibleRows
  // Find the input field for new watch expression
  const inputFieldIndex = rows.findIndex((row) => row.type === DebugRowType.InputField && row.name === InputName.WatchExpressionInput)
  expect(inputFieldIndex).toBeGreaterThan(-1)
  const stateWithSelection = {
    ...expandedState,
    selectedIndex: inputFieldIndex,
  }
  const result = await handleNew(stateWithSelection)
  expect(result.watchExpressions).toHaveLength(2)
  expect(result.watchExpressions[1]).toEqual({
    expression: '',
    value: null,
    isEditing: true,
  })
})
