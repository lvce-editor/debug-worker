import { test, expect } from '@jest/globals'
import type { ParsedScript } from '../src/parts/ParsedScript/ParsedScript.ts'
import { createScriptMap } from '../src/parts/CreateScriptMap/CreateScriptMap.ts'

test('createScriptMap', () => {
  const scripts: readonly ParsedScript[] = [
    {
      scriptId: 'script1',
      url: 'test1.js',
      sourceMapURL: '',
      sourceURL: '',
      startLine: 0,
      startColumn: 0,
      endLine: 10,
      endColumn: 0,
      executionContextId: 1,
      hash: '',
      isLiveEdit: false,
      hasSourceURL: false,
      isModule: false,
      length: 100,
      stackTrace: null,
      codeOffset: 0,
      scriptLanguage: 'JavaScript',
      embedderName: '',
    },
    {
      scriptId: 'script2',
      url: 'test2.js',
      sourceMapURL: '',
      sourceURL: '',
      startLine: 0,
      startColumn: 0,
      endLine: 20,
      endColumn: 0,
      executionContextId: 1,
      hash: '',
      isLiveEdit: false,
      hasSourceURL: false,
      isModule: false,
      length: 200,
      stackTrace: null,
      codeOffset: 0,
      scriptLanguage: 'JavaScript',
      embedderName: '',
    },
  ]

  const result = createScriptMap(scripts)

  expect(result).toEqual({
    script1: scripts[0],
    script2: scripts[1],
  })
  expect(result.script1).toBe(scripts[0])
  expect(result.script2).toBe(scripts[1])
})

test('createScriptMap - empty array', () => {
  const result = createScriptMap([])
  expect(result).toEqual({})
})
