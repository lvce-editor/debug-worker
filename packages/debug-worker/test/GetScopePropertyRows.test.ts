import { test, expect } from '@jest/globals'
import type { Scope } from '../src/parts/Scope/Scope.ts'
import * as DebugItemFlags from '../src/parts/DebugItemFlags/DebugItemFlags.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { getScopePropertyRows } from '../src/parts/ScopeRenderers/GetScopePropertyRows.ts'

test('getScopePropertyRows', () => {
  const scope: Scope = {
    flags: DebugItemFlags.Expanded,
    indent: 1,
    key: 'property',
    label: '',
    objectId: '',
    type: 0,
    value: 'test',
    valueType: 'string',
  }
  const result = getScopePropertyRows(scope, 0, 0)
  expect(result).toEqual([
    {
      description: '',
      expanded: true,
      indent: 1,
      index: 0,
      key: 'property',
      name: '',
      posInset: 1,
      scopeChainIndex: 0,
      setSize: 1,
      text: '',
      tokens: ['test', 'Identifier'],
      type: DebugRowType.Property,
      value: 'test',
      valueType: 'string',
    },
  ])
})
