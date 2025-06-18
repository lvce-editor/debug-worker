import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleWatchExpressionDoubleClick } from '../src/parts/HandleClickWatchExpressionDoubleClick/HandleClickWatchExpressionDoubleClick.ts'

test('handleWatchExpressionDoubleClick returns state as is', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleWatchExpressionDoubleClick(state, '0')
  expect(result).toBe(state)
})
