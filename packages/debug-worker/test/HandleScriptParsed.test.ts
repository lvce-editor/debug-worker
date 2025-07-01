import { test, expect } from '@jest/globals'
import type { ParsedScript } from '../src/parts/ParsedScript/ParsedScript.ts'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleScriptParsed } from '../src/parts/HandleScriptParsed/HandleScriptParsed.ts'

test('handleScriptParsed adds parsed script to state', () => {
  const state: RunAndDebugState = createDefaultState()
  const parsedScript: ParsedScript = {
    scriptId: 'test-script',
    scriptLanguage: 'javascript',
    url: 'file:///test.js',
  }
  const newState = handleScriptParsed(state, parsedScript)
  expect(newState.parsedScripts['test-script']).toEqual(parsedScript)
})

test('handleScriptParsed preserves existing parsed scripts', () => {
  const state: RunAndDebugState = createDefaultState()
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
