import { test, expect } from '@jest/globals'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../src/parts/DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import { getRunAndDebugVisibleRowsWatch } from '../src/parts/GetRunAndDebugVisibleRowsWatch/GetRunAndDebugVisibleRowsWatch.ts'

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
      actions: [
        {
          id: 'add-watch-expression',
          title: 'Add new watch expression',
          icon: '+',
        },
      ],
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
          id: 'add-watch-expression',
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

test('should show watch expressions when expanded', () => {
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
          id: 'add-watch-expression',
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
