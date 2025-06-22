import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffPauseOnExceptions/DiffPauseOnExceptions.ts'
import * as ExceptionBreakPoints from '../src/parts/ExceptionBreakPoints/ExceptionBreakPoints.ts'

test('isEqual - same exceptionBreakPoints', () => {
  const state1 = createDefaultState()
  const state2 = createDefaultState()
  expect(isEqual(state1, state2)).toBe(true)
})

test('isEqual - different exceptionBreakPoints', () => {
  const state1 = createDefaultState()
  const state2 = {
    ...createDefaultState(),
    exceptionBreakPoints: ExceptionBreakPoints.All,
  }
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual - from None to Uncaught', () => {
  const state1 = createDefaultState()
  const state2 = {
    ...createDefaultState(),
    exceptionBreakPoints: ExceptionBreakPoints.Uncaught,
  }
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual - from All to None', () => {
  const state1 = {
    ...createDefaultState(),
    exceptionBreakPoints: ExceptionBreakPoints.All,
  }
  const state2 = createDefaultState()
  expect(isEqual(state1, state2)).toBe(false)
})
