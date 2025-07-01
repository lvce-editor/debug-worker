import { test, expect } from '@jest/globals'
import * as DebugItemFlags from '../src/parts/DebugItemFlags/DebugItemFlags.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { getScopeScopeRows } from '../src/parts/ScopeRenderers/GetScopeScopeRows.ts'
import type { Scope } from '../src/parts/Scope/Scope.ts'

test('getScopeScopeRows', () => {
  const scope: Scope = {
    key: 'scope',
    flags: DebugItemFlags.Expanded,
    indent: 0,
    label: '',
    objectId: '',
    type: 0,
    value: '',
    valueType: '',
  }
  const result = getScopeScopeRows(scope, 2, 2)
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
      description: '',
      index: 2,
      setSize: 1,
      posInset: 1,
      scopeChainIndex: 2,
    },
  ])
})
