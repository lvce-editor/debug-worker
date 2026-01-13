import type { DebugRowRenderer } from '../RunAndDebugRowRenderer/RunAndDebugRowRenderer.ts'
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

export const getRowRenderer = (type: number): DebugRowRenderer => {
  switch (type) {
    case DebugRowType.CallStack:
      return renderCallStack
    case DebugRowType.CheckBox:
      return renderCheckBox
    case DebugRowType.Exception:
    case DebugRowType.Property:
    case DebugRowType.Value:
      return renderValue
    case DebugRowType.InputField:
      return renderInputField
    case DebugRowType.Message:
      return renderMessage
    case DebugRowType.Scope:
      return renderScope
    case DebugRowType.SectionHeading:
      return GetRunAndDebugRowSectionHeadingVirtualDom.renderSectionHeading
    case DebugRowType.WatchExpression:
      return renderWatchExpression
    case DebugRowType.WatchMessage:
      return renderWatchMessage
    default:
      return renderNoop
  }
}
