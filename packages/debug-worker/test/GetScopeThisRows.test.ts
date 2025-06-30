import { test, expect } from '@jest/globals'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { getScopeThisRows } from '../src/parts/ScopeRenderers/GetScopeThisRows.ts'

test('getScopeThisRows', () => {
  const scope = {
    indent: 1,
    key: 'this',
    value: 'test',
    valueType: 'string',
  } as any
  const result = getScopeThisRows(scope, 0)
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
      index: 0,
      setSize: 1,
      posInset: 1,
    },
  ])
})
