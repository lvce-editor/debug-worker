import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as GetRunAndDebugRowVirtualDom from '../GetRunAndDebugRowVirtualDom/GetRunAndDebugRowVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getRunAndDebugVirtualDom2 = (rows: readonly DebugRow[], selectedIndex: number, tokenColoringEnabled: boolean): readonly VirtualDomNode[] => {
  return [
    {
      childCount: rows.length,
      className: 'Viewlet RunAndDebug',
      role: AriaRoles.Tree,
      tabIndex: 0,
      type: VirtualDomElements.Div,
    },
    ...rows.flatMap((row, index) => GetRunAndDebugRowVirtualDom.getRunAndDebugRowVirtualDom(row, selectedIndex, index, tokenColoringEnabled)),
  ]
}
