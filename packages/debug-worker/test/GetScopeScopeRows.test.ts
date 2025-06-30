import { test, expect } from '@jest/globals'
import * as DebugItemFlags from '../src/parts/DebugItemFlags/DebugItemFlags.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { getScopeScopeRows } from '../src/parts/ScopeRenderers/GetScopeScopeRows.ts'

test('getScopeScopeRows', () => {
  const scope = {
    key: 'scope',
    flags: DebugItemFlags.Expanded,
    setSize: 1,
    posInset: 1,
  } as any
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
    },
  ])
})
