import { test, expect } from '@jest/globals'
import type { WatchExpression } from '../src/parts/WatchExpression/WatchExpression.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import { getRunAndDebugVisibleRowsWatchContent } from '../src/parts/GetRunAndDebugVisibleRowsWatchContent/GetRunAndDebugVisibleRowsWatchContent.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('getRunAndDebugVisibleRowsWatchContent - empty expressions', () => {
  const watchExpressions: readonly WatchExpression[] = []
  const result = getRunAndDebugVisibleRowsWatchContent(watchExpressions)
  expect(result).toEqual([
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

test('getRunAndDebugVisibleRowsWatchContent - with expressions', () => {
  const watchExpressions: readonly WatchExpression[] = [
    {
      expression: 'x',
      value: 42,
      isEditing: false,
    },
    {
      expression: 'y',
      value: 'test',
      isEditing: false,
    },
  ]
  const result = getRunAndDebugVisibleRowsWatchContent(watchExpressions)
  expect(result).toEqual([
    {
      type: DebugRowType.WatchExpression,
      text: 'x',
      expanded: false,
      key: 'x',
      value: '42',
      indent: 0,
      valueType: '',
      name: '',
      description: '',
      index: 0,
    },
    {
      type: DebugRowType.WatchExpression,
      text: 'y',
      expanded: false,
      key: 'y',
      value: 'test',
      indent: 0,
      valueType: '',
      name: '',
      description: '',
      index: 1,
    },
  ])
})

test('getRunAndDebugVisibleRowsWatchContent - with editing expression', () => {
  const watchExpressions: readonly WatchExpression[] = [
    {
      expression: 'x',
      value: 42,
      isEditing: true,
    },
  ]
  const result = getRunAndDebugVisibleRowsWatchContent(watchExpressions)
  expect(result).toEqual([
    {
      type: DebugRowType.InputField,
      text: '',
      expanded: false,
      key: 'new-watch-expression',
      value: '',
      indent: 0,
      valueType: '',
      name: InputName.WatchExpressionInput,
      description: '',
      index: 0,
    },
  ])
})

test('getRunAndDebugVisibleRowsWatchContent - with null/undefined values', () => {
  const watchExpressions: readonly WatchExpression[] = [
    {
      expression: 'x',
      value: null,
      isEditing: false,
    },
    {
      expression: 'y',
      value: undefined,
      isEditing: false,
    },
  ]
  const result = getRunAndDebugVisibleRowsWatchContent(watchExpressions)
  expect(result).toEqual([
    {
      type: DebugRowType.WatchExpression,
      text: 'x',
      expanded: false,
      key: 'x',
      value: '',
      indent: 0,
      valueType: '',
      name: '',
      description: '',
      index: 0,
    },
    {
      type: DebugRowType.WatchExpression,
      text: 'y',
      expanded: false,
      key: 'y',
      value: '',
      indent: 0,
      valueType: '',
      name: '',
      description: '',
      index: 1,
    },
  ])
})
