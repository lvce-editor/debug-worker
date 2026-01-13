import { test, expect } from '@jest/globals'
import type { WatchExpression } from '../src/parts/WatchExpression/WatchExpression.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import { getRunAndDebugVisibleRowsWatchContent } from '../src/parts/GetRunAndDebugVisibleRowsWatchContent/GetRunAndDebugVisibleRowsWatchContent.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('getRunAndDebugVisibleRowsWatchContent - empty expressions', () => {
  const watchExpressions: readonly WatchExpression[] = []
  const result = getRunAndDebugVisibleRowsWatchContent(watchExpressions, 0)
  expect(result).toEqual([
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

test('getRunAndDebugVisibleRowsWatchContent - with expressions', () => {
  const watchExpressions: readonly WatchExpression[] = [
    {
      expression: 'x',
      isEditing: false,
      value: 42,
    },
    {
      expression: 'y',
      isEditing: false,
      value: 'test',
    },
  ]
  const result = getRunAndDebugVisibleRowsWatchContent(watchExpressions, 0)
  expect(result).toEqual([
    {
      description: '',
      expanded: false,
      indent: 0,
      index: 0,
      key: 'x',
      name: '',
      posInset: 1,
      setSize: 2,
      text: 'x',
      type: DebugRowType.WatchExpression,
      value: '42',
      valueType: '',
    },
    {
      description: '',
      expanded: false,
      indent: 0,
      index: 1,
      key: 'y',
      name: '',
      posInset: 2,
      setSize: 2,
      text: 'y',
      type: DebugRowType.WatchExpression,
      value: 'test',
      valueType: '',
    },
  ])
})

test('getRunAndDebugVisibleRowsWatchContent - with editing expression', () => {
  const watchExpressions: readonly WatchExpression[] = [
    {
      expression: 'x',
      isEditing: true,
      value: 42,
    },
  ]
  const result = getRunAndDebugVisibleRowsWatchContent(watchExpressions, 0)
  expect(result).toEqual([
    {
      description: '',
      expanded: false,
      indent: 0,
      index: 0,
      key: 'new-watch-expression',
      name: InputName.WatchExpressionInput,
      posInset: 1,
      setSize: 1,
      text: '',
      type: DebugRowType.InputField,
      value: '',
      valueType: '',
    },
  ])
})

test('getRunAndDebugVisibleRowsWatchContent - with null/undefined values', () => {
  const watchExpressions: readonly WatchExpression[] = [
    {
      expression: 'x',
      isEditing: false,
      value: null,
    },
    {
      expression: 'y',
      isEditing: false,
      value: undefined,
    },
  ]
  const result = getRunAndDebugVisibleRowsWatchContent(watchExpressions, 0)
  expect(result).toEqual([
    {
      description: '',
      expanded: false,
      indent: 0,
      index: 0,
      key: 'x',
      name: '',
      posInset: 1,
      setSize: 2,
      text: 'x',
      type: DebugRowType.WatchExpression,
      value: '',
      valueType: '',
    },
    {
      description: '',
      expanded: false,
      indent: 0,
      index: 1,
      key: 'y',
      name: '',
      posInset: 2,
      setSize: 2,
      text: 'y',
      type: DebugRowType.WatchExpression,
      value: '',
      valueType: '',
    },
  ])
})
