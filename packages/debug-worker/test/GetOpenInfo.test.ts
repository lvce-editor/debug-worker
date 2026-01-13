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
    functionLocation: {
      columnNumber: 1,
      lineNumber: 1,
      scriptId: '1',
    },
    functionName: 'test',
    location: {
      columnNumber: 1,
      lineNumber: 1,
      scriptId: '1',
    },
  }
  const result = getOpenInfo(0, parsedScripts, item)
  expect(result).toEqual({
    columnIndex: 1,
    languageId: 'javascript',
    rowIndex: 1,
    uri: 'debug:///0/1',
  })
})
