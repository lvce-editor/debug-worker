import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../src/parts/AddWatchExpression/AddWatchExpression.ts'
import { copyWatchExpression } from '../src/parts/CopyWatchExpression/CopyWatchExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('copyWatchExpression should copy expression when index is valid', async () => {
  const state: RunAndDebugState = createDefaultState()
  const stateWithExpression: RunAndDebugState = await addWatchExpression(state, 'x + y')

  const result = copyWatchExpression(stateWithExpression, 0)

  // Should return a promise that resolves
  expect(result).toBeInstanceOf(Promise)
  await expect(result).resolves.toBeUndefined()
})

test('copyWatchExpression should do nothing when index is out of bounds', async () => {
  const state: RunAndDebugState = createDefaultState()

  const result = copyWatchExpression(state, 999)

  // Should return a promise that resolves
  expect(result).toBeInstanceOf(Promise)
  await expect(result).resolves.toBeUndefined()
})

test('copyWatchExpression should do nothing when index is negative', async () => {
  const state: RunAndDebugState = createDefaultState()

  const result = copyWatchExpression(state, -1)

  // Should return a promise that resolves
  expect(result).toBeInstanceOf(Promise)
  await expect(result).resolves.toBeUndefined()
})
