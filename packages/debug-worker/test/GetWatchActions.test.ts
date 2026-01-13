import { test, expect } from '@jest/globals'
import { getWatchActions } from '../src/parts/GetWatchActions/GetWatchActions.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('should return empty array when watch is not expanded', () => {
  const actions = getWatchActions(false)
  expect(actions).toEqual([])
})

test('should return actions when watch is expanded', () => {
  const actions = getWatchActions(true)
  expect(actions).toEqual([
    {
      icon: '+',
      id: InputName.AddWatchExpression,
      title: 'Add new watch expression',
    },
    {
      icon: '↻',
      id: InputName.RefreshWatchExpressions,
      title: 'Refresh watch expressions',
    },
  ])
})
