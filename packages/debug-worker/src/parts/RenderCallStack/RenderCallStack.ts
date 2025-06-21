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
  type: VirtualDomElements.Div,
  className: ClassNames.CallStackLabel,
  childCount: 1,
}

const descriptionNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: ClassNames.CallStackDescription,
  childCount: 1,
}

export const renderCallStack = (row: DebugRow, selectedIndex: number, rowIndex: number): readonly VirtualDomNode[] => {
  const { text, description, hasArrow, index } = row
  const childCount = hasArrow ? 3 : 2
  const arrowNodes = getArrowNodes(hasArrow)
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName('DebugRow DebugRowCallStack', isSelected)
  return [
    {
      type: VirtualDomElements.Div,
      className,
      role: AriaRoles.TreeItem,
      ariaLevel: 2,
      childCount,
      onClick: DomEventListenerFunctions.HandleClickCallStackItem,
      'data-index': index,
    },
    ...arrowNodes,
    labelNode,
    VirtualDomHelpers.text(text),
    descriptionNode,
    VirtualDomHelpers.text(description),
  ]
}
