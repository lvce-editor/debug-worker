import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleSectionHeaderContextMenu } from '../src/parts/HandleSectionHeaderContextMenu/HandleSectionHeaderContextMenu.ts'

test('handleSectionHeaderContextMenu returns the same state', () => {
  const state = createDefaultState()
  const result = handleSectionHeaderContextMenu(state)
  expect(result).toBe(state)
})
