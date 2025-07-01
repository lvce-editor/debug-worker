import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderFocusContext } from '../src/parts/RenderFocusContext/RenderFocusContext.ts'

test.skip('renderFocusContext - no focus', () => {
  const state = createDefaultState()
  expect(renderFocusContext(state, state)).toEqual([])
})

test('renderFocusContext - with focus', () => {
  const state = { ...createDefaultState(), focus: 1 }
  expect(renderFocusContext(state, state)).toEqual(['Viewlet.setFocusContext', 1])
})
