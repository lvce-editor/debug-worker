import type { DebugRowAction } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getActionDom = (action: DebugRowAction): readonly VirtualDomNode[] => {
  const { title, id, icon } = action
  return [
    {
      type: VirtualDomElements.Button,
      className: ClassNames.DebugSectionAction,
      title,
      onClick: DomEventListenerFunctions.HandleClickSectionAction,
      name: id,
      childCount: 1,
    },
    VirtualDomHelpers.text(icon),
  ]
}
