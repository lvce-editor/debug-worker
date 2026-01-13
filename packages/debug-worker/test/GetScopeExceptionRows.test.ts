import { test, expect } from '@jest/globals'
import type { Scope } from '../src/parts/Scope/Scope.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { getScopeExceptionRows } from '../src/parts/ScopeRenderers/GetScopeExceptionRows.ts'

test('getScopeExceptionRows', () => {
  const scope: Scope = {
    flags: 0,
    indent: 1,
    key: 'error',
    label: '',
    objectId: '',
    type: 0,
    value: 'test error',
    valueType: '',
  }
  const result = getScopeExceptionRows(scope, 0, 0)
  expect(result).toEqual([
    {
      description: '',
      expanded: false,
      indent: 1,
      index: 0,
      key: 'error',
      name: '',
      posInset: 1,
      scopeChainIndex: 0,
      setSize: 1,
      text: '',
      tokens: ['test', 'Identifier', ' ', 'WhiteSpace', 'error', 'Identifier'],
      type: DebugRowType.Exception,
      value: 'test error',
      valueType: '',
    },
  ])
})
