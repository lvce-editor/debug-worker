import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleSectionHeaderContextMenu } from '../src/parts/HandleSectionHeaderContextMenu/HandleSectionHeaderContextMenu.ts'

test.skip('handleSectionHeaderContextMenu returns the same state', async () => {
  const state: RunAndDebugState = createDefaultState()
  const x = 0
  const y = 0
  const id = ''
  const result = await handleSectionHeaderContextMenu(state, x, y, id)
  expect(result).toBe(state)
})
