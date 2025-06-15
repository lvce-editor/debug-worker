import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderFocusContext } from '../src/parts/RenderFocusContext/RenderFocusContext.ts'

test('renderFocusContext - no focus', () => {
  const state = createDefaultState()
  expect(renderFocusContext(state)).toEqual([])
})

test('renderFocusContext - with focus', () => {
  const state = { ...createDefaultState(), focus: 1 }
  expect(renderFocusContext(state)).toEqual(['viewlet.setFocusContext', 1])
})
