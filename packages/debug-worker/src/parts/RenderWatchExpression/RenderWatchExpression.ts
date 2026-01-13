import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getDebugRowClassName } from '../GetDebugRowClassName/GetDebugRowClassName.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import { separator } from '../Separator/Separator.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const renderWatchExpression = (row: DebugRow, selectedIndex: number, rowIndex: number): readonly VirtualDomNode[] => {
  const { index, key, value } = row
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName(ClassNames.DebugRow, isSelected)
  return [
    {
      childCount: 4,
      className,
      'data-index': index,
      onClick: DomEventListenerFunctions.HandleClickWatchExpression, // TODO use doubleclick
      onContextMenu: DomEventListenerFunctions.HandleWatchExpressionContextMenu,
      role: AriaRoles.TreeItem,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.DebugValueScopeName,
      type: VirtualDomElements.Span,
    },
    VirtualDomHelpers.text(key),
    separator,
    {
      childCount: 1,
      className: ClassNames.DebugValue,
      type: VirtualDomElements.Span,
    },
    VirtualDomHelpers.text(value),
    {
      childCount: 1,
      className: MergeClassNames.mergeClassNames(ClassNames.IconButton, ClassNames.DebugSectionAction, ClassNames.DeleteWatchExpression),
      'data-index': index,
      onClick: DomEventListenerFunctions.HandleClickWatchExpressionDelete,
      title: DebugStrings.deleteWatchExpression(),
      type: VirtualDomElements.Button,
    },
    VirtualDomHelpers.text('×'),
  ]
}
