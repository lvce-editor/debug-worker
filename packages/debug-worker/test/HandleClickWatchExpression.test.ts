import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickWatchExpression } from '../src/parts/HandleClickWatchExpression/HandleClickWatchExpression.ts'
import { Script } from '../src/parts/InputSource/InputSource.ts'
import { FocusDebugWatchInput } from '../src/parts/WhenExpression/WhenExpression.ts'

const makeState = (): RunAndDebugState => {
  const state = createDefaultState(1)
  return {
    ...state,
    watchExpressions: [
      { expression: 'a + b', value: 3, isEditing: false },
      { expression: 'x * y', value: 10, isEditing: false },
    ],
  }
}

test('click valid watch expression index', async () => {
  const state = makeState()
  const result = await handleClickWatchExpression(state, '1', false)
  expect(result.watchExpressions[1]).toEqual({ expression: 'x * y', value: 10, isEditing: true })
  expect(result.focus).toBe(FocusDebugWatchInput)
  expect(result.inputSource).toBe(Script)
  expect(result.editingValue).toBe('x * y')
})

test('click out-of-bounds index returns same state', async () => {
  const state = makeState()
  const result = await handleClickWatchExpression(state, '5', false)
  expect(result).toBe(state)
})

test('click with non-numeric index returns same state', async () => {
  const state = makeState()
  const result = await handleClickWatchExpression(state, 'foo', false)
  expect(result).toBe(state)
})

test('click with defaultPrevented true does not enter edit mode', async () => {
  const state = makeState()
  const result = await handleClickWatchExpression(state, '1', true)
  expect(result).toBe(state)
})
