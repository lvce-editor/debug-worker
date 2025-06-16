import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderFocus } from '../src/parts/RenderFocus/RenderFocus.ts'

test.skip('renderFocus - with focus', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    id: 1,
    focus: 1,
  }
  const result = renderFocus(state, state)
  expect(result).toEqual(['Viewlet.focusElementByName', 1, '[data-focus="1"]'])
})

test('renderFocus - without focus', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    id: 1,
    focus: 0,
  }
  const result = renderFocus(state, state)
  expect(result).toEqual(['Viewlet.focusElementByName', 1, ''])
})
