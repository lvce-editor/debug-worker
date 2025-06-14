import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getArrowNodes } from '../GetArrowNodes/GetArrowNodes.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
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

export const renderCallStack = (row: DebugRow): readonly VirtualDomNode[] => {
  const { text, description, hasArrow } = row
  const childCount = hasArrow ? 3 : 2
  const arrowNodes = getArrowNodes(hasArrow)
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.DebugRow, ClassNames.DebugRowCallStack),
      role: AriaRoles.TreeItem,
      ariaLevel: 2,
      childCount,
      onClick: DomEventListenerFunctions.HandleClickCallStackItem,
    },
    ...arrowNodes,
    labelNode,
    VirtualDomHelpers.text(text),
    descriptionNode,
    VirtualDomHelpers.text(description),
  ]
}
