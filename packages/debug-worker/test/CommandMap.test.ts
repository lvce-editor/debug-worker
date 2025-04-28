import { test, expect } from '@jest/globals'
import * as CommandMap from '../src/parts/CommandMap/CommandMap.ts'

test('commandMap is an object', () => {
  expect(typeof CommandMap.commandMap).toBe('object')
})

test('commandMap contains expected commands', () => {
  expect(CommandMap.commandMap['RunAndDebug.create']).toBeDefined()
  expect(CommandMap.commandMap['RunAndDebug.diff2']).toBeDefined()
  expect(CommandMap.commandMap['RunAndDebug.dispose']).toBeDefined()
  expect(CommandMap.commandMap['RunAndDebug.terminate']).toBeDefined()
})
