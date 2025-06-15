import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const renderWatchExpression = (row: DebugRow): readonly VirtualDomNode[] => {
  const { value, key } = row
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugRow,
      role: AriaRoles.TreeItem,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Span,
      className: ClassNames.DebugValueScopeName,
      childCount: 1,
    },
    VirtualDomHelpers.text(key),
    {
      type: VirtualDomElements.Span,
      className: ClassNames.DebugValue,
      childCount: 1,
    },
    VirtualDomHelpers.text(value),
  ]
}
