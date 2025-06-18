import type { DebugRowAction } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getActionsDom = (actions: readonly DebugRowAction[]): readonly VirtualDomNode[] => {
  const nodes: VirtualDomNode[] = []
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
      name: action.id,
      childCount: 1,
    })
    nodes.push(VirtualDomHelpers.text(action.icon))
  }
  return nodes
}
