import { test, expect } from '@jest/globals'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { getScopeThisRows } from '../src/parts/ScopeRenderers/GetScopeThisRows.ts'

test('getScopeThisRows', () => {
  const scope = {
    indent: 1,
    key: 'this',
    value: 'test',
    valueType: 'string',
  }
  const result = getScopeThisRows(scope)
  expect(result).toEqual([
    {
      type: DebugRowType.Value,
      text: '',
      tokens: ['test', 'Identifier'],
      expanded: false,
      key: 'this',
      value: 'test',
      indent: 1,
      valueType: 'string',
      name: '',
      description: '',
    },
  ])
})
