import { test, expect } from '@jest/globals'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { getScopeExceptionRows } from '../src/parts/ScopeRenderers/GetScopeExceptionRows.ts'

test('getScopeExceptionRows', () => {
  const scope = {
    key: 'error',
    value: 'test error',
    indent: 1,
  } as any
  const result = getScopeExceptionRows(scope, 0)
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
    },
  ])
})
