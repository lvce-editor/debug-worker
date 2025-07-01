import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowName from '../src/parts/DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../src/parts/DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import { getRunAndDebugVisibleRowsWatch } from '../src/parts/GetRunAndDebugVisibleRowsWatch/GetRunAndDebugVisibleRowsWatch.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('should return watch section with default state', () => {
  const state: RunAndDebugState = createDefaultState()
  const rows = getRunAndDebugVisibleRowsWatch(state, 0, 4, 1)
  expect(rows).toEqual([
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.watch(),
      expanded: false,
      key: DebugSectionId.Watch,
      value: '',
      indent: 0,
      valueType: '',
      name: DebugRowName.Watch,
      description: '',
      index: 0,
      setSize: 4,
      posInset: 2,
      actions: [],
    },
  ])
})

test('should show no watch expression message when expanded and no expressions', () => {
  const state: RunAndDebugState = createDefaultState()
  const expandedState: RunAndDebugState = {
    ...state,
    watchExpanded: true,
  }
  const rows = getRunAndDebugVisibleRowsWatch(expandedState, 0, 4, 1)
  expect(rows).toEqual([
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.watch(),
      expanded: true,
      key: DebugSectionId.Watch,
      value: '',
      indent: 0,
      valueType: '',
      name: DebugRowName.Watch,
      description: '',
      index: 0,
      setSize: 4,
      posInset: 2,
      actions: expect.any(Array),
    },
    {
      type: DebugRowType.WatchMessage,
      text: DebugStrings.noWatchExpression(),
      expanded: false,
      key: '',
      value: '',
      indent: 0,
      valueType: '',
      name: '',
      description: '',
      index: 1,
      setSize: 1,
      posInset: 1,
    },
  ])
})

test.skip('should show watch expressions when expanded', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpressions: RunAndDebugState = await addWatchExpression(await addWatchExpression(state, 'x + y'), 'a + b')
  const expandedState = {
    ...stateWithExpressions,
    watchExpanded: true,
  }
  const rows = getRunAndDebugVisibleRowsWatch(expandedState, 0, 4, 1)
  expect(rows).toEqual([
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.watch(),
      expanded: true,
      key: DebugSectionId.Watch,
      value: '',
      indent: 0,
      valueType: '',
      name: DebugRowName.Watch,
      description: '',
      index: 0,
      setSize: 1,
      posInset: 1,
      actions: [
        {
          id: InputName.AddWatchExpression,
          title: 'Add new watch expression',
          icon: '+',
        },
      ],
    },
    {
      type: DebugRowType.WatchExpression,
      text: 'x + y',
      expanded: false,
      key: 'x + y',
      value: '',
      indent: 0,
      valueType: '',
      name: '',
      description: '',
    },
    {
      type: DebugRowType.WatchExpression,
      text: 'a + b',
      expanded: false,
      key: 'a + b',
      value: '',
      indent: 0,
      valueType: '',
      name: '',
      description: '',
    },
  ])
})

test.skip('should show input field for new watch expression', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithNewExpression: RunAndDebugState = await addWatchExpression(state, '')
  const expandedState = {
    ...stateWithNewExpression,
    watchExpanded: true,
  }
  const rows = getRunAndDebugVisibleRowsWatch(expandedState, 0, 4, 1)
  expect(rows).toEqual([
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.watch(),
      expanded: true,
      key: DebugSectionId.Watch,
      value: '',
      indent: 0,
      valueType: '',
      name: DebugRowName.Watch,
      description: '',
      index: 0,
      setSize: 1,
      posInset: 1,
      actions: [
        {
          id: InputName.AddWatchExpression,
          title: 'Add new watch expression',
          icon: '+',
        },
      ],
    },
    {
      type: DebugRowType.WatchExpression,
      text: '',
      expanded: false,
      key: '',
      value: '',
      indent: 0,
      valueType: '',
      name: '',
      description: '',
    },
  ])
})

test('should not show actions when watch is not expanded', () => {
  const state: RunAndDebugState = createDefaultState()
  const rows = getRunAndDebugVisibleRowsWatch(state, 0, 4, 1)
  expect(rows[0].actions).toEqual([])
})

test('getWatchActions should return empty array when watch is not expanded', () => {
  const state: RunAndDebugState = createDefaultState()
  const rows = getRunAndDebugVisibleRowsWatch(state, 0, 4, 1)
  expect(rows[0].actions).toEqual([])
})

test('getWatchActions should return actions when watch is expanded', () => {
  const state: RunAndDebugState = createDefaultState()
  const expandedState: RunAndDebugState = {
    ...state,
    watchExpanded: true,
  }
  const rows = getRunAndDebugVisibleRowsWatch(expandedState, 0, 4, 1)
  expect(rows[0].actions).toBeDefined()
})

test('should show actions when watch is expanded', () => {
  const state: RunAndDebugState = createDefaultState()
  const expandedState: RunAndDebugState = {
    ...state,
    watchExpanded: true,
  }
  const rows = getRunAndDebugVisibleRowsWatch(expandedState, 0, 4, 1)
  expect(rows[0].actions).toBeDefined()
})
