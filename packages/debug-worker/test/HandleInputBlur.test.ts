import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleInputBlur } from '../src/parts/HandleInputBlur/HandleInputBlur.ts'

test('should do nothing if no editing watch expression', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleInputBlur(state)
  expect(result).toBe(state)
})

test('should remove empty watch expression on blur', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithNewExpression: RunAndDebugState = await addWatchExpression(state, '')
  const result = await handleInputBlur(stateWithNewExpression)
  expect(result.watchExpressions).toHaveLength(0)
  expect(result.focus).toBe(1299)
  expect(result.editingValue).toBe('')
})

test('should update watch expression with value on blur', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithNewExpression: RunAndDebugState = await addWatchExpression(state, '')
  const stateWithValue: RunAndDebugState = {
    ...stateWithNewExpression,
    editingValue: 'x + y',
  }
  const result = await handleInputBlur(stateWithValue)
  expect(result.watchExpressions).toHaveLength(1)
  expect(result.watchExpressions[0]).toEqual({
    expression: 'x + y',
    value: null,
    isEditing: false,
  })
  expect(result.focus).toBe(1299)
  expect(result.editingValue).toBe('')
})
