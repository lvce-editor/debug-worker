import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as GetRunAndDebugRowVirtualDom from '../GetRunAndDebugRowVirtualDom/GetRunAndDebugRowVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getRunAndDebugVirtualDom2 = (rows: readonly DebugRow[], selectedIndex: number, tokenColoringEnabled: boolean): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: 'Viewlet RunAndDebug',
      tabIndex: 0,
      childCount: rows.length,
      role: AriaRoles.Tree,
    },
    ...rows.flatMap((row, index) => GetRunAndDebugRowVirtualDom.getRunAndDebugRowVirtualDom(row, selectedIndex, index, tokenColoringEnabled)),
  ]
}
