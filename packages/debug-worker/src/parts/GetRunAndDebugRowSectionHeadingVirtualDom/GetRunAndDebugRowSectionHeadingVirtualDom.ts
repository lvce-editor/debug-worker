import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetActionsDom from '../GetActionsDom/GetActionsDom.ts'
import * as GetChevronVirtualDom from '../GetChevronVirtualDom/GetChevronVirtualDom.ts'
import { getDebugRowClassName } from '../GetDebugRowClassName/GetDebugRowClassName.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const renderSectionHeading = (row: DebugRow, selectedIndex: number, rowIndex: number): readonly VirtualDomNode[] => {
  const { actions, expanded, index, key, posInset, setSize, text } = row
  const hasActions = actions && actions.length > 0
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName(ClassNames.DebugSectionHeader + ' ' + ClassNames.DebugRow, isSelected)
  const nodes: VirtualDomNode[] = [
    {
      ariaExpanded: expanded,
      ariaLevel: 1,
      ariaPosInSet: posInset,
      ariaSetSize: setSize,
      childCount: hasActions ? 3 : 2,
      className,
      'data-index': index,
      'data-name': key,
      onClick: DomEventListenerFunctions.HandleClickSectionHeading,
      onContextMenu: DomEventListenerFunctions.HandleSectionHeaderContextMenu,
      role: AriaRoles.TreeItem,
      type: VirtualDomElements.Div,
    },
    expanded ? GetChevronVirtualDom.getChevronDownVirtualDom() : GetChevronVirtualDom.getChevronRightVirtualDom(),
    VirtualDomHelpers.text(text),
    ...GetActionsDom.getActionsDom(actions || []),
  ]
  return nodes
}
