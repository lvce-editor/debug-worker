import { expect, test } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import { getRunAndDebugRowVirtualDom } from '../src/parts/GetRunAndDebugRowVirtualDom/GetRunAndDebugRowVirtualDom.ts'

test('getRunAndDebugRowVirtualDom - returns virtual dom for row', () => {
  const row: DebugRow = {
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: '',
    name: '',
    posInset: 1,
    setSize: 1,
    text: '',
    type: 0,
    value: '0',
    valueType: '',
  }

  const result = getRunAndDebugRowVirtualDom(row, -1, 0, true)
  expect(result).toBeDefined()
})
