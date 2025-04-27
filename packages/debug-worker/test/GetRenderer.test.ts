import { expect, test } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as GetRenderer from '../src/parts/GetRenderer/GetRenderer.ts'
import * as RenderItems from '../src/parts/RenderItems/RenderItems.ts'

test('getRenderer - RenderItems', () => {
  expect(GetRenderer.getRenderer(DiffType.RenderItems)).toBe(RenderItems.renderItems)
})

test('getRenderer - unknown renderer', () => {
  expect(() => GetRenderer.getRenderer(999)).toThrow('unknown renderer')
})
