import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const DebugButton = ClassNames.IconButton + ' ' + ClassNames.DebugButton

export const getDebugButtonVirtualDom = (button: any): readonly VirtualDomNode[] => {
  const { title, icon, fn } = button
  return [
    {
      type: VirtualDomElements.Button,
      className: DebugButton + ' ' + icon,
      title,
      childCount: 1,
      // onPointerDown: fn,
      'data-command': fn,
    },
    {
      type: VirtualDomElements.Div,
      className: `MaskIcon MaskIcon${icon}`,
      childCount: 0,
    },
  ]
}
