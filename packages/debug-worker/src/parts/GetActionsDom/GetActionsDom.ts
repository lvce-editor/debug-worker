import type { DebugRowAction } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetActionDom from '../GetActionDom/GetActionDom.ts'
import { Div } from '../VirtualDomElements/VirtualDomElements.ts'

export const getActionsDom = (actions: readonly DebugRowAction[]): readonly VirtualDomNode[] => {
  if (actions.length === 0) {
    return []
  }
  return [
    {
      childCount: actions.length,
      className: ClassNames.DebugSectionActions,
      type: Div,
    },
    ...actions.flatMap(GetActionDom.getActionDom),
  ]
}
