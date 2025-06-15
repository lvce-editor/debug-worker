import { test, expect } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import { getRenderer } from '../src/parts/GetRenderer/GetRenderer.ts'
import * as RenderFocus from '../src/parts/RenderFocus/RenderFocus.ts'
import * as RenderFocusContext from '../src/parts/RenderFocusContext/RenderFocusContext.ts'
import * as RenderItems from '../src/parts/RenderItems/RenderItems.ts'

test('getRenderer - RenderItems', () => {
  expect(getRenderer(DiffType.RenderItems)).toBe(RenderItems.renderItems)
})

test('getRenderer - RenderFocusContext', () => {
  expect(getRenderer(DiffType.RenderFocusContext)).toBe(RenderFocusContext.renderFocusContext)
})

test('getRenderer - RenderFocus', () => {
  expect(getRenderer(DiffType.RenderFocus)).toBe(RenderFocus.renderFocus)
})

test('getRenderer - unknown', () => {
  expect(() => getRenderer(999)).toThrow('unknown renderer')
})
