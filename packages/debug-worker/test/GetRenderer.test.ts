import { test, expect } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import { getRenderer } from '../src/parts/GetRenderer/GetRenderer.ts'
import * as RenderFocus from '../src/parts/RenderFocus/RenderFocus.ts'
import * as RenderFocusContext from '../src/parts/RenderFocusContext/RenderFocusContext.ts'
import * as RenderItems from '../src/parts/RenderItems/RenderItems.ts'
import * as RenderPauseOnExceptions from '../src/parts/RenderPauseOnExceptions/RenderPauseOnExceptions.ts'

test('getRenderer - RenderItems', () => {
  expect(getRenderer(DiffType.RenderItems)).toBe(RenderItems.renderItems)
})

test('getRenderer - RenderFocusContext', () => {
  expect(getRenderer(DiffType.RenderFocusContext)).toBe(RenderFocusContext.renderFocusContext)
})

test('getRenderer - RenderFocus', () => {
  expect(getRenderer(DiffType.RenderFocus)).toBe(RenderFocus.renderFocus)
})

test('getRenderer - RenderPauseOnExceptions', () => {
  expect(getRenderer(DiffType.RenderPauseOnExceptions)).toBe(RenderPauseOnExceptions.renderPauseOnExceptions)
})

test('getRenderer - unknown', () => {
  expect(() => getRenderer(999)).toThrow('unknown renderer')
})
