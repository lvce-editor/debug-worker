import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ExceptionBreakPoints from '../src/parts/ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import { renderPauseOnExceptions } from '../src/parts/RenderPauseOnExceptions/RenderPauseOnExceptions.ts'

test.skip('renderPauseOnExceptions - None state', () => {
  const oldState: RunAndDebugState = createDefaultState()
  const newState: RunAndDebugState = createDefaultState()
  const result = renderPauseOnExceptions(oldState, newState)

  expect(result).toEqual([
    ['viewlet.setCheckBoxValue', 0, InputName.PauseOnExceptions, false],
    ['viewlet.setCheckBoxValue', 0, InputName.PauseOnUncaughtExceptions, false],
  ])
})

test.skip('renderPauseOnExceptions - All state', () => {
  const oldState: RunAndDebugState = createDefaultState()
  const newState: RunAndDebugState = {
    ...createDefaultState(),
    exceptionBreakPoints: ExceptionBreakPoints.All,
  }
  const result = renderPauseOnExceptions(oldState, newState)

  expect(result).toEqual([
    ['viewlet.setCheckBoxValue', 0, InputName.PauseOnExceptions, true],
    ['viewlet.setCheckBoxValue', 0, InputName.PauseOnUncaughtExceptions, false],
  ])
})

test.skip('renderPauseOnExceptions - Uncaught state', () => {
  const oldState: RunAndDebugState = createDefaultState()
  const newState: RunAndDebugState = {
    ...createDefaultState(),
    exceptionBreakPoints: ExceptionBreakPoints.Uncaught,
  }
  const result = renderPauseOnExceptions(oldState, newState)

  expect(result).toEqual([
    ['viewlet.setCheckBoxValue', 0, InputName.PauseOnExceptions, false],
    ['viewlet.setCheckBoxValue', 0, InputName.PauseOnUncaughtExceptions, true],
  ])
})

test.skip('renderPauseOnExceptions - with different id', () => {
  const oldState: RunAndDebugState = createDefaultState(1)
  const newState: RunAndDebugState = {
    ...createDefaultState(1),
    id: 2,
    exceptionBreakPoints: ExceptionBreakPoints.All,
  }
  const result = renderPauseOnExceptions(oldState, newState)

  expect(result).toEqual([
    ['viewlet.setCheckBoxValue', 2, InputName.PauseOnExceptions, true],
    ['viewlet.setCheckBoxValue', 2, InputName.PauseOnUncaughtExceptions, false],
  ])
})
