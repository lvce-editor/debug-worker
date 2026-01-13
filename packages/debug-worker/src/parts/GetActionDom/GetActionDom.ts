import type { DebugRowAction } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getActionDom = (action: DebugRowAction): readonly VirtualDomNode[] => {
  const { icon, id, title } = action
  return [
    {
      childCount: 1,
      className: ClassNames.DebugSectionAction,
      name: id,
      onClick: DomEventListenerFunctions.HandleClickSectionAction,
      title,
      type: VirtualDomElements.Button,
    },
    VirtualDomHelpers.text(icon),
  ]
}
