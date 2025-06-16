import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleWatchValueChange } from '../src/parts/HandleWatchValueChange/HandleWatchValueChange.ts'

test('should update editingValue', () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithEditingValue: RunAndDebugState = handleWatchValueChange(state, 'x + y')
  expect(stateWithEditingValue.editingValue).toBe('x + y')
  expect(stateWithEditingValue.watchExpressions).toEqual(state.watchExpressions)
})

test('should not change watchExpressions', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpression: RunAndDebugState = await addWatchExpression(state, 'a + b')
  const stateWithEditingValue: RunAndDebugState = handleWatchValueChange(stateWithExpression, 'x + y')
  expect(stateWithEditingValue.editingValue).toBe('x + y')
  expect(stateWithEditingValue.watchExpressions).toEqual(stateWithExpression.watchExpressions)
})
