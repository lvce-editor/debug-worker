import { expect, test } from '@jest/globals'
import { getRunAndDebugRowVirtualDom } from '../src/parts/GetRunAndDebugRowVirtualDom/GetRunAndDebugRowVirtualDom.ts'

test('getRunAndDebugRowVirtualDom - returns virtual dom for row', () => {
  const row = {
    type: 'testType',
    data: 'testData',
  }

  const result = getRunAndDebugRowVirtualDom(row)
  expect(result).toBeDefined()
})
