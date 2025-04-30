import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { DebugButton } from '../DebugButton/DebugButton.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const DebugButtonClass = ClassNames.IconButton + ' ' + ClassNames.DebugButton

export const getDebugButtonVirtualDom = (button: DebugButton): readonly VirtualDomNode[] => {
  const { title, icon, fn } = button
  return [
    {
      type: VirtualDomElements.Button,
      className: MergeClassNames.mergeClassNames(DebugButtonClass, icon),
      title,
      childCount: 1,
      name: fn,
    },
    {
      type: VirtualDomElements.Div,
      className: `MaskIcon MaskIcon${icon}`,
      childCount: 0,
    },
  ]
}
