import { test, expect } from '@jest/globals'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { getRowRenderer } from '../src/parts/GetRunAndDebugRowRenderer/GetRunAndDebugRowRenderer.ts'
import * as GetRunAndDebugRowSectionHeadingVirtualDom from '../src/parts/GetRunAndDebugRowSectionHeadingVirtualDom/GetRunAndDebugRowSectionHeadingVirtualDom.ts'
import { renderCallStack } from '../src/parts/RenderCallStack/RenderCallStack.ts'
import { renderCheckBox } from '../src/parts/RenderCheckBox/RenderCheckBox.ts'
import { renderValue } from '../src/parts/RenderDebugValue/RenderDebugValue.ts'
import { renderInputField } from '../src/parts/RenderInputField/RenderInputField.ts'
import { renderScope } from '../src/parts/RenderScope/RenderScope.ts'
import { renderWatchExpression } from '../src/parts/RenderWatchExpression/RenderWatchExpression.ts'
import { renderWatchMessage } from '../src/parts/RenderWatchMessage/RenderWatchMessage.ts'
import { renderMessage, renderNoop } from '../src/parts/RunAndDebugRowRenderers/RunAndDebugRowRenderers.ts'

test('getRowRenderer', () => {
  expect(getRowRenderer(DebugRowType.Message)).toBe(renderMessage)
  expect(getRowRenderer(DebugRowType.SectionHeading)).toBe(GetRunAndDebugRowSectionHeadingVirtualDom.renderSectionHeading)
  expect(getRowRenderer(DebugRowType.CallStack)).toBe(renderCallStack)
  expect(getRowRenderer(DebugRowType.Scope)).toBe(renderScope)
  expect(getRowRenderer(DebugRowType.Value)).toBe(renderValue)
  expect(getRowRenderer(DebugRowType.Property)).toBe(renderValue)
  expect(getRowRenderer(DebugRowType.Exception)).toBe(renderValue)
  expect(getRowRenderer(DebugRowType.CheckBox)).toBe(renderCheckBox)
  expect(getRowRenderer(DebugRowType.WatchMessage)).toBe(renderWatchMessage)
  expect(getRowRenderer(DebugRowType.WatchExpression)).toBe(renderWatchExpression)
  expect(getRowRenderer(DebugRowType.InputField)).toBe(renderInputField)
  expect(getRowRenderer(999)).toBe(renderNoop)
})
