import { expect, test } from '@jest/globals'
import { getOpenInfo } from '../src/parts/GetOpenInfo/GetOpenInfo.ts'

test('getOpenInfo', () => {
  const parsedScripts = {
    '1': {
      scriptId: '1',
      scriptLanguage: 'javascript',
      url: 'test.js',
    },
  }
  const item = {
    functionName: 'test',
    functionLocation: {
      scriptId: '1',
      lineNumber: 1,
      columnNumber: 1,
    },
    location: {
      scriptId: '1',
      lineNumber: 1,
      columnNumber: 1,
    },
  }
  const result = getOpenInfo(0, parsedScripts, item)
  expect(result).toEqual({
    uri: 'debug:///0/1',
    languageId: 'javascript',
    rowIndex: 1,
    columnIndex: 1,
  })
})
