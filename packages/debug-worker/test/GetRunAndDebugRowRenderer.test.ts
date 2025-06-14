import { expect, test } from '@jest/globals'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as GetRunAndDebugRowRenderer from '../src/parts/GetRunAndDebugRowRenderer/GetRunAndDebugRowRenderer.ts'
import * as GetRunAndDebugRowSectionHeadingVirtualDom from '../src/parts/GetRunAndDebugRowSectionHeadingVirtualDom/GetRunAndDebugRowSectionHeadingVirtualDom.ts'
import { renderCallStack } from '../src/parts/RenderCallStack/RenderCallStack.ts'
import { renderCheckBox } from '../src/parts/RenderCheckBox/RenderCheckBox.ts'
import { renderScope } from '../src/parts/RenderScope/RenderScope.ts'
import { renderValue } from '../src/parts/RenderValue/RenderValue.ts'
import { renderMessage, renderNoop } from '../src/parts/RunAndDebugRowRenderers/RunAndDebugRowRenderers.ts'

test('getRowRenderer - Message', () => {
  const renderer = GetRunAndDebugRowRenderer.getRowRenderer(DebugRowType.Message)
  expect(renderer).toBe(renderMessage)
})

test('getRowRenderer - SectionHeading', () => {
  const renderer = GetRunAndDebugRowRenderer.getRowRenderer(DebugRowType.SectionHeading)
  expect(renderer).toBe(GetRunAndDebugRowSectionHeadingVirtualDom.renderSectionHeading)
})

test('getRowRenderer - CallStack', () => {
  const renderer = GetRunAndDebugRowRenderer.getRowRenderer(DebugRowType.CallStack)
  expect(renderer).toBe(renderCallStack)
})

test('getRowRenderer - Scope', () => {
  const renderer = GetRunAndDebugRowRenderer.getRowRenderer(DebugRowType.Scope)
  expect(renderer).toBe(renderScope)
})

test('getRowRenderer - Value', () => {
  const renderer = GetRunAndDebugRowRenderer.getRowRenderer(DebugRowType.Value)
  expect(renderer).toBe(renderValue)
})

test('getRowRenderer - Property', () => {
  const renderer = GetRunAndDebugRowRenderer.getRowRenderer(DebugRowType.Property)
  expect(renderer).toBe(renderValue)
})

test('getRowRenderer - Exception', () => {
  const renderer = GetRunAndDebugRowRenderer.getRowRenderer(DebugRowType.Exception)
  expect(renderer).toBe(renderValue)
})

test('getRowRenderer - CheckBox', () => {
  const renderer = GetRunAndDebugRowRenderer.getRowRenderer(DebugRowType.CheckBox)
  expect(renderer).toBe(renderCheckBox)
})

test('getRowRenderer - Unknown type', () => {
  const renderer = GetRunAndDebugRowRenderer.getRowRenderer(999)
  expect(renderer).toBe(renderNoop)
})
