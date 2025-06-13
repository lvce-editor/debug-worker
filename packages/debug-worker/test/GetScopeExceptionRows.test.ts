import { test, expect } from '@jest/globals'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { getScopeExceptionRows } from '../src/parts/ScopeRenderers/GetScopeExceptionRows.ts'

test('getScopeExceptionRows', () => {
  const scope = {
    key: 'error',
    value: 'test error',
    indent: 1,
  }
  const result = getScopeExceptionRows(scope)
  expect(result).toEqual([
    {
      type: DebugRowType.Exception,
      text: '',
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
