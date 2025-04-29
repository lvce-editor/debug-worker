import { expect, test } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import { getRunAndDebugRowVirtualDom } from '../src/parts/GetRunAndDebugRowVirtualDom/GetRunAndDebugRowVirtualDom.ts'

test('getRunAndDebugRowVirtualDom - returns virtual dom for row', () => {
  const row: DebugRow = {
    type: 0,
    expanded: false,
    indent: 0,
    key: '',
    name: '',
    text: '',
    value: '0',
    valueType: '',
  }

  const result = getRunAndDebugRowVirtualDom(row)
  expect(result).toBeDefined()
})
