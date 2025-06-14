import { test, expect } from '@jest/globals'
import { getOpenInfo } from '../src/parts/GetOpenInfo/GetOpenInfo.ts'
import type { ParsedScript } from '../src/parts/ParsedScript/ParsedScript.ts'

test('getOpenInfo', () => {
  const parsedScripts = {
    '1': {
      scriptId: '1',
      scriptLanguage: 'javascript',
      url: 'test.js',
    } as ParsedScript,
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
  const result = getOpenInfo(parsedScripts, item)
  expect(result).toEqual({
    uri: 'test.js',
    languageId: 'javascript',
    rowIndex: 1,
    columnIndex: 1,
  })
})
