import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugState from '../src/parts/DebugState/DebugState.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import { getRunAndDebugVisibleRows } from '../src/parts/GetRunAndDebugVisibleRows/GetRunAndDebugVisibleRows.ts'
import { renderItems } from '../src/parts/RenderItems/RenderItems.ts'

test('renderItems', () => {
  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), id: 1 }

  const result = renderItems(oldState, newState)

  expect(result).toEqual(['Viewlet.setDom2', 1, expect.anything()])
})

test.skip('getRunAndDebugVisibleRows - unavailable debug state returns message row', () => {
  const state = { ...createDefaultState(), debugState: DebugState.Unavailable }

  const rows = getRunAndDebugVisibleRows(state)

  expect(rows).toHaveLength(1)
  expect(rows[0]).toEqual({
    type: DebugRowType.Message,
    text: DebugStrings.noScriptRunning(),
    expanded: false,
    key: 'no-script-running',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: '',
  })
})
