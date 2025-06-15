import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderFocus } from '../src/parts/RenderFocus/RenderFocus.ts'

test('renderFocus - no focus', () => {
  const state = createDefaultState()
  expect(renderFocus(state)).toEqual([])
})

test('renderFocus - with focus', () => {
  const state = { ...createDefaultState(), focus: 'test' }
  expect(renderFocus(state)).toEqual(['Viewlet.setFocus', state.id, 'test'])
})
