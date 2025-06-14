import { test, expect } from '@jest/globals'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../src/parts/DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import { getRunAndDebugVisibleRowsWatch } from '../src/parts/GetRunAndDebugVisibleRowsWatch/GetRunAndDebugVisibleRowsWatch.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('should return watch section with default state', () => {
  const state = createDefaultState()
  const rows = getRunAndDebugVisibleRowsWatch(state)
  expect(rows).toEqual([
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.watch(),
      expanded: false,
      key: DebugSectionId.Watch,
      value: '',
      indent: 0,
      valueType: '',
      name: 'Watch',
      description: '',
      actions: [],
    },
  ])
})

test('should show no watch expression message when expanded and no expressions', () => {
  const state = createDefaultState()
  const expandedState = {
    ...state,
    watchExpanded: true,
  }
  const rows = getRunAndDebugVisibleRowsWatch(expandedState)
  expect(rows).toEqual([
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.watch(),
      expanded: true,
      key: DebugSectionId.Watch,
      value: '',
      indent: 0,
      valueType: '',
      name: 'Watch',
      description: '',
      actions: [
        {
          id: InputName.AddWatchExpression,
          title: 'Add new watch expression',
          icon: '+',
        },
      ],
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
    },
  ])
})

test.skip('should show watch expressions when expanded', () => {
  const state = createDefaultState()
  const stateWithExpressions = addWatchExpression(addWatchExpression(state, 'x + y'), 'a + b')
  const expandedState = {
    ...stateWithExpressions,
    watchExpanded: true,
  }
  const rows = getRunAndDebugVisibleRowsWatch(expandedState)
  expect(rows).toEqual([
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.watch(),
      expanded: true,
      key: DebugSectionId.Watch,
      value: '',
      indent: 0,
      valueType: '',
      name: 'Watch',
      description: '',
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

test.skip('should show input field for new watch expression', () => {
  const state = createDefaultState()
  const stateWithNewExpression = addWatchExpression(state, '')
  const expandedState = {
    ...stateWithNewExpression,
    watchExpanded: true,
  }
  const rows = getRunAndDebugVisibleRowsWatch(expandedState)
  expect(rows).toEqual([
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.watch(),
      expanded: true,
      key: DebugSectionId.Watch,
      value: '',
      indent: 0,
      valueType: '',
      name: 'Watch',
      description: '',
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
  const state = createDefaultState()
  const rows = getRunAndDebugVisibleRowsWatch(state)
  expect(rows[0].actions).toEqual([])
})

test('getWatchActions should return empty array when watch is not expanded', () => {
  const state = createDefaultState()
  const rows = getRunAndDebugVisibleRowsWatch(state)
  expect(rows[0].actions).toEqual([])
})

test('getWatchActions should return actions when watch is expanded', () => {
  const state = createDefaultState()
  const expandedState = {
    ...state,
    watchExpanded: true,
  }
  const rows = getRunAndDebugVisibleRowsWatch(expandedState)
  expect(rows[0].actions).toEqual([
    {
      id: InputName.AddWatchExpression,
      title: 'Add new watch expression',
      icon: '+',
    },
  ])
})

test('should show actions when watch is expanded', () => {
  const state = createDefaultState()
  const expandedState = {
    ...state,
    watchExpanded: true,
  }
  const rows = getRunAndDebugVisibleRowsWatch(expandedState)
  expect(rows[0].actions).toEqual([
    {
      id: InputName.AddWatchExpression,
      title: 'Add new watch expression',
      icon: '+',
    },
  ])
})
