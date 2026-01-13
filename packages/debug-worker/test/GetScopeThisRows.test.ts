import { test, expect } from '@jest/globals'
import type { Scope } from '../src/parts/Scope/Scope.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { getScopeThisRows } from '../src/parts/ScopeRenderers/GetScopeThisRows.ts'

test('getScopeThisRows', () => {
  const scope: Scope = {
    flags: 0,
    indent: 1,
    key: 'this',
    label: '',
    objectId: '',
    type: 0,
    value: 'test',
    valueType: 'string',
  }
  const result = getScopeThisRows(scope, 0, 0)
  expect(result).toEqual([
    {
      description: '',
      expanded: false,
      indent: 1,
      index: 0,
      key: 'this',
      name: '',
      posInset: 1,
      scopeChainIndex: 0,
      setSize: 1,
      text: '',
      tokens: ['test', 'Identifier'],
      type: DebugRowType.Value,
      value: 'test',
      valueType: 'string',
    },
  ])
})
