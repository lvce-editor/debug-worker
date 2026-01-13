import { test, expect } from '@jest/globals'
import type { Scope } from '../src/parts/Scope/Scope.ts'
import * as DebugItemFlags from '../src/parts/DebugItemFlags/DebugItemFlags.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { getScopeScopeRows } from '../src/parts/ScopeRenderers/GetScopeScopeRows.ts'

test('getScopeScopeRows', () => {
  const scope: Scope = {
    flags: DebugItemFlags.Expanded,
    indent: 0,
    key: 'scope',
    label: '',
    objectId: '',
    type: 0,
    value: '',
    valueType: '',
  }
  const result = getScopeScopeRows(scope, 2, 2)
  expect(result).toEqual([
    {
      description: '',
      expanded: true,
      indent: 0,
      index: 2,
      key: 'scope',
      name: '',
      posInset: 1,
      scopeChainIndex: 2,
      setSize: 1,
      text: '',
      type: DebugRowType.Scope,
      value: '',
      valueType: '',
    },
  ])
})
