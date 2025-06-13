import { test, expect } from '@jest/globals'
import { getScopeThisRows } from '../src/parts/ScopeRenderers/GetScopeThisRows.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'

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
      expanded: false,
      key: 'this',
      value: 'test',
      indent: 1,
      valueType: 'string',
      name: '',
    },
  ])
})
