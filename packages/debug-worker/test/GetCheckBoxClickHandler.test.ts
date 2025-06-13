import { expect, test } from '@jest/globals'
import { getCheckBoxClickHandler } from '../src/parts/GetCheckBoxClickHandler/GetCheckBoxClickHandler.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('getCheckBoxClickHandler - returns pause on exceptions handler', () => {
  const handler = getCheckBoxClickHandler(InputName.PauseOnExceptions)
  expect(typeof handler).toBe('function')
})

test('getCheckBoxClickHandler - returns pause on uncaught exceptions handler', () => {
  const handler = getCheckBoxClickHandler(InputName.PauseOnUncaughtExceptions)
  expect(typeof handler).toBe('function')
})

test('getCheckBoxClickHandler - throws error for unknown input name', () => {
  expect(() => getCheckBoxClickHandler('unknown')).toThrow('unknown input name')
})
