import { test, expect } from '@jest/globals'
import type { Scope } from '../src/parts/Scope/Scope.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { getScopeExceptionRows } from '../src/parts/ScopeRenderers/GetScopeExceptionRows.ts'

test('getScopeExceptionRows', () => {
  const scope: Scope = {
    key: 'error',
    value: 'test error',
    indent: 1,
    label: '',
    objectId: '',
    type: 0,
    valueType: '',
    flags: 0,
  }
  const result = getScopeExceptionRows(scope, 0, 0)
  expect(result).toEqual([
    {
      type: DebugRowType.Exception,
      text: '',
      tokens: ['test', 'Identifier', ' ', 'WhiteSpace', 'error', 'Identifier'],
      expanded: false,
      key: 'error',
      value: 'test error',
      indent: 1,
      valueType: '',
      name: '',
      description: '',
      index: 0,
      setSize: 1,
      posInset: 1,
      scopeChainIndex: 0,
    },
  ])
})
