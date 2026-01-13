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
      actions: [],
      description: '',
      expanded: false,
      indent: 0,
      index: 0,
      key: DebugSectionId.Watch,
      name: DebugRowName.Watch,
      posInset: 2,
      setSize: 4,
      text: DebugStrings.watch(),
      type: DebugRowType.SectionHeading,
      value: '',
      valueType: '',
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
      actions: expect.any(Array),
      description: '',
      expanded: true,
      indent: 0,
      index: 0,
      key: DebugSectionId.Watch,
      name: DebugRowName.Watch,
      posInset: 2,
      setSize: 4,
      text: DebugStrings.watch(),
      type: DebugRowType.SectionHeading,
      value: '',
      valueType: '',
    },
    {
      description: '',
      expanded: false,
      indent: 0,
      index: 1,
      key: '',
      name: '',
      posInset: 1,
      setSize: 1,
      text: DebugStrings.noWatchExpression(),
      type: DebugRowType.WatchMessage,
      value: '',
      valueType: '',
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
      actions: [
        {
          icon: '+',
          id: InputName.AddWatchExpression,
          title: 'Add new watch expression',
        },
      ],
      description: '',
      expanded: true,
      indent: 0,
      index: 0,
      key: DebugSectionId.Watch,
      name: DebugRowName.Watch,
      posInset: 1,
      setSize: 1,
      text: DebugStrings.watch(),
      type: DebugRowType.SectionHeading,
      value: '',
      valueType: '',
    },
    {
      description: '',
      expanded: false,
      indent: 0,
      key: 'x + y',
      name: '',
      text: 'x + y',
      type: DebugRowType.WatchExpression,
      value: '',
      valueType: '',
    },
    {
      description: '',
      expanded: false,
      indent: 0,
      key: 'a + b',
      name: '',
      text: 'a + b',
      type: DebugRowType.WatchExpression,
      value: '',
      valueType: '',
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
      actions: [
        {
          icon: '+',
          id: InputName.AddWatchExpression,
          title: 'Add new watch expression',
        },
      ],
      description: '',
      expanded: true,
      indent: 0,
      index: 0,
      key: DebugSectionId.Watch,
      name: DebugRowName.Watch,
      posInset: 1,
      setSize: 1,
      text: DebugStrings.watch(),
      type: DebugRowType.SectionHeading,
      value: '',
      valueType: '',
    },
    {
      description: '',
      expanded: false,
      indent: 0,
      key: '',
      name: '',
      text: '',
      type: DebugRowType.WatchExpression,
      value: '',
      valueType: '',
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
