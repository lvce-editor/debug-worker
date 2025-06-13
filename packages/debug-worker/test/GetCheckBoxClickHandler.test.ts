import { expect, test } from '@jest/globals'
import { getCheckBoxClickHandler } from '../src/parts/GetCheckBoxClickHandler/GetCheckBoxClickHandler.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

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

test('getCheckBoxClickHandler - pause on exceptions handler returns new state', async () => {
  const handler = getCheckBoxClickHandler(InputName.PauseOnExceptions)
  const state = createDefaultState()
  const newState = await handler(state)
  expect(newState).toBeDefined()
  expect(newState).not.toBe(state)
})

test('getCheckBoxClickHandler - pause on uncaught exceptions handler returns new state', async () => {
  const handler = getCheckBoxClickHandler(InputName.PauseOnUncaughtExceptions)
  const state = createDefaultState()
  const newState = await handler(state)
  expect(newState).toBeDefined()
  expect(newState).not.toBe(state)
})
