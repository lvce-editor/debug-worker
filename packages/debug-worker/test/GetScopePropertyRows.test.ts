import { test, expect } from '@jest/globals'
import * as DebugItemFlags from '../src/parts/DebugItemFlags/DebugItemFlags.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { getScopePropertyRows } from '../src/parts/ScopeRenderers/GetScopePropertyRows.ts'

test('getScopePropertyRows', () => {
  const scope = {
    indent: 1,
    key: 'property',
    value: 'test',
    valueType: 'string',
    flags: DebugItemFlags.Expanded,
  }
  const result = getScopePropertyRows(scope)
  expect(result).toEqual([
    {
      type: DebugRowType.Property,
      text: '',
      tokens: ['test', 'Identifier'],
      expanded: true,
      key: 'property',
      value: 'test',
      indent: 1,
      valueType: 'string',
      name: '',
      description: '',
    },
  ])
})
