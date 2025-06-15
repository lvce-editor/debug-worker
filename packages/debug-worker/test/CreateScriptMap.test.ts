import { test, expect } from '@jest/globals'
import type { ParsedScript } from '../src/parts/ParsedScript/ParsedScript.ts'
import { createScriptMap } from '../src/parts/CreateScriptMap/CreateScriptMap.ts'

test('createScriptMap', () => {
  const scripts: readonly ParsedScript[] = [
    {
      scriptId: 'script1',
      url: 'test1.js',
      scriptLanguage: 'JavaScript',
    },
    {
      scriptId: 'script2',
      url: 'test2.js',
      scriptLanguage: '',
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
