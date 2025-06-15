import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetChevronVirtualDom from '../GetChevronVirtualDom/GetChevronVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const renderSectionHeading = (row: DebugRow): readonly VirtualDomNode[] => {
  const { expanded, text, key, actions } = row
  const nodes: VirtualDomNode[] = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugSectionHeader,
      role: AriaRoles.TreeItem,
      ariaExpanded: expanded,
      ariaLevel: 1,
      childCount: 2,
      onClick: DomEventListenerFunctions.HandleClickSectionHeading,
      'data-name': key,
    },
    expanded ? GetChevronVirtualDom.getChevronDownVirtualDom() : GetChevronVirtualDom.getChevronRightVirtualDom(),
    VirtualDomHelpers.text(text),
  ]

  if (actions) {
    nodes.push({
      type: VirtualDomElements.Div,
      className: ClassNames.DebugSectionActions,
      childCount: actions.length,
    })
    for (const action of actions) {
      nodes.push({
        type: VirtualDomElements.Button,
        className: ClassNames.DebugSectionAction,
        title: action.title,
        onClick: DomEventListenerFunctions.HandleClickSectionAction,
        'data-action-id': action.id,
        childCount: 1,
      })
      nodes.push(VirtualDomHelpers.text(action.icon))
    }
  }

  return nodes
}
