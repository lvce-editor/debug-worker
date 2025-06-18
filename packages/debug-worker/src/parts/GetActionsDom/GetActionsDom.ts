import type { DebugRowAction } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetActionDom from '../GetActionDom/GetActionDom.ts'
import { Div } from '../VirtualDomElements/VirtualDomElements.ts'

export const getActionsDom = (actions: readonly DebugRowAction[]): readonly VirtualDomNode[] => {
  const actionNodes = actions.flatMap(GetActionDom.getActionDom)
  return [
    {
      type: Div,
      className: ClassNames.DebugSectionActions,
      childCount: actionNodes.length,
    },
    ...actionNodes,
  ]
}
