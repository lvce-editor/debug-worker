import { test, expect } from '@jest/globals'
import { getScopeScopeRows } from '../src/parts/ScopeRenderers/GetScopeScopeRows.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugItemFlags from '../src/parts/DebugItemFlags/DebugItemFlags.ts'

test('getScopeScopeRows', () => {
  const scope = {
    key: 'scope',
    flags: DebugItemFlags.Expanded,
  }
  const result = getScopeScopeRows(scope)
  expect(result).toEqual([
    {
      type: DebugRowType.Scope,
      text: '',
      expanded: true,
      key: 'scope',
      value: '',
      indent: 0,
      valueType: '',
      name: '',
    },
  ])
})
