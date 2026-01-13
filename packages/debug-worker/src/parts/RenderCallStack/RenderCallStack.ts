import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getArrowNodes } from '../GetArrowNodes/GetArrowNodes.ts'
import { getDebugRowClassName } from '../GetDebugRowClassName/GetDebugRowClassName.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const labelNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.CallStackLabel,
  type: VirtualDomElements.Div,
}

const descriptionNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.CallStackDescription,
  type: VirtualDomElements.Div,
}

export const renderCallStack = (row: DebugRow, selectedIndex: number, rowIndex: number): readonly VirtualDomNode[] => {
  const { description, hasArrow, index, text } = row
  const childCount = hasArrow ? 3 : 2
  const arrowNodes = getArrowNodes(hasArrow)
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName('DebugRow DebugRowCallStack', isSelected)
  return [
    {
      ariaLevel: 2,
      childCount,
      className,
      'data-index': index,
      onClick: DomEventListenerFunctions.HandleClickCallStackItem,
      role: AriaRoles.TreeItem,
      type: VirtualDomElements.Div,
    },
    ...arrowNodes,
    labelNode,
    VirtualDomHelpers.text(text),
    descriptionNode,
    VirtualDomHelpers.text(description),
  ]
}
