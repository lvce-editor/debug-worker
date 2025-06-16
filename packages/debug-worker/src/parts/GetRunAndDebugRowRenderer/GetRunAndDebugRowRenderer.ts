import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { DebugRow } from '../DebugRow/DebugRow.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as GetRunAndDebugRowSectionHeadingVirtualDom from '../GetRunAndDebugRowSectionHeadingVirtualDom/GetRunAndDebugRowSectionHeadingVirtualDom.ts'
import { renderCallStack } from '../RenderCallStack/RenderCallStack.ts'
import { renderCheckBox } from '../RenderCheckBox/RenderCheckBox.ts'
import { renderValue } from '../RenderDebugValue/RenderDebugValue.ts'
import { renderInputField } from '../RenderInputField/RenderInputField.ts'
import { renderScope } from '../RenderScope/RenderScope.ts'
import { renderWatchExpression } from '../RenderWatchExpression/RenderWatchExpression.ts'
import { renderWatchMessage } from '../RenderWatchMessage/RenderWatchMessage.ts'
import { renderMessage, renderNoop } from '../RunAndDebugRowRenderers/RunAndDebugRowRenderers.ts'

export interface DebugRowRenderer {
  (row: DebugRow): readonly VirtualDomNode[]
}

export const getRowRenderer = (type: number): DebugRowRenderer => {
  switch (type) {
    case DebugRowType.Message:
      return renderMessage
    case DebugRowType.SectionHeading:
      return GetRunAndDebugRowSectionHeadingVirtualDom.renderSectionHeading
    case DebugRowType.CallStack:
      return renderCallStack
    case DebugRowType.Scope:
      return renderScope
    case DebugRowType.Value:
    case DebugRowType.Property:
    case DebugRowType.Exception:
      return renderValue
    case DebugRowType.CheckBox:
      return renderCheckBox
    case DebugRowType.WatchMessage:
      return renderWatchMessage
    case DebugRowType.WatchExpression:
      return renderWatchExpression
    case DebugRowType.InputField:
      return renderInputField
    default:
      return renderNoop
  }
}
