import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetDebugButtons from '../GetDebugButtons/GetDebugButtons.ts'
import * as GetDebugButtonVirtualDom from '../GetDebugButtonVirtualDom/GetDebugButtonVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getRunAndDebugButtonsVirtualDom = (debugState: number): readonly VirtualDomNode[] => {
  const debugButtons = GetDebugButtons.getDebugButtons(debugState)
  const dom = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugButtons,
      childCount: debugButtons.length,
      role: AriaRoles.ToolBar,
    },
    ...debugButtons.flatMap(GetDebugButtonVirtualDom.getDebugButtonVirtualDom),
  ]
  return dom
}
