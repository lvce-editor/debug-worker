import { test, expect } from '@jest/globals'
import { handleScriptParsed } from '../src/parts/HandleScriptParsed/HandleScriptParsed.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import type { ParsedScript } from '../src/parts/ParsedScript/ParsedScript.ts'

test('handleScriptParsed adds parsed script to state', () => {
  const state = createDefaultState()
  const parsedScript: ParsedScript = {
    scriptId: 'test-script',
    scriptLanguage: 'javascript',
    url: 'file:///test.js',
  }
  const newState = handleScriptParsed(state, parsedScript)
  expect(newState.parsedScripts['test-script']).toEqual(parsedScript)
})

test('handleScriptParsed preserves existing parsed scripts', () => {
  const state = createDefaultState()
  const existingScript: ParsedScript = {
    scriptId: 'existing-script',
    scriptLanguage: 'javascript',
    url: 'file:///existing.js',
  }
  const newScript: ParsedScript = {
    scriptId: 'new-script',
    scriptLanguage: 'javascript',
    url: 'file:///new.js',
  }
  const stateWithExisting = handleScriptParsed(state, existingScript)
  const finalState = handleScriptParsed(stateWithExisting, newScript)
  expect(finalState.parsedScripts['existing-script']).toEqual(existingScript)
  expect(finalState.parsedScripts['new-script']).toEqual(newScript)
})
