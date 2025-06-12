import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as GetRunAndDebugRowSectionHeadingVirtualDom from '../GetRunAndDebugRowSectionHeadingVirtualDom/GetRunAndDebugRowSectionHeadingVirtualDom.ts'
import { renderCheckBox } from '../RenderCheckBox/RenderCheckBox.ts'
import { renderCallStack, renderMessage, renderNoop, renderScope, renderValue } from '../RunAndDebugRowRenderers/RunAndDebugRowRenderers.ts'

export const getRowRenderer = (type: number): any => {
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
    default:
      return renderNoop
  }
}
